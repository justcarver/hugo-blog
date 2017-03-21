// Application Constants
const treehouseColors = {
  'Android' : '#5cb860',
  'Business' : '#f9845b',
  'CSS' : '#3079ab',
  'Design' : '#e59a13',
  'Dev. Tools' : '#637a91',
  'HTML' : '#39add1',
  'iOS' : '#53bbb4',
  'Java' : '#2c9676',
  'JavaScript' : '#c25975',
  'PHP' : '#7d669e',
  'Python' : '#f092b0',
  'Ruby' : '#e15258',
  'WordPress' : '#838cc7',
  'Digital Literacy' : '#c38cd4',
  'Game Dev' : '#20898C',
  'C#' : '#9E4D83',
  'Databases' : '#EB7728'
};

// Global Variables
var httpRequest;
var treehouseJSON;

function treehouseAJAX (username) {
  const url = 'https://teamtreehouse.com/' + username + '.json';
  httpRequest = new XMLHttpRequest();

  if (!httpRequest) {
    console.log("Can not create XMLHttpRequest instance");
    return false;
  }

  httpRequest.onreadystatechange = processTreehouseRequest;
  httpRequest.open('GET', url);
  httpRequest.send();
}

function processTreehouseRequest() {
  if (httpRequest.readyState === 4 && httpRequest.status === 200) {
    treehouseJSON = JSON.parse(httpRequest.responseText);
    buildTreehouseGraph(treehouseJSON);
  }
}

function buildTreehouseGraph ( treehouse ) {
  //Parse the JSON into different Variables
  let offset = 0 - 1;
  let name = treehouse.name;
  let points = treehouse.points; /* Directs to the points object */
  let total = points.total; /* Gets your total number of points earned */
  let pointsObject = {
    "HTML" : points.HTML,
    "CSS" : points.CSS,
    "Design" : points.Design,
    "JavaScript" : points.JavaScript,
    "Ruby" : points.Ruby,
    "PHP" : points.PHP,
    "WordPress" : points.WordPress,
    "iOS" : points.iOS,
    "Android" : points.Android,
    "Dev. Tools" : points["Development Tools"],
    "Business" : points.Business,
    "Python" : points.Python,
    "Java" : points.Java,
    "Digital Literacy" : points["Digital Literacy"],
    "Game Dev" : points["Game Development"],
    "C#" : points["C#"],
    "Databases" : points.Databases
  };
  let badges = treehouse.badges; /* Gets the Badges object */

  //Build the HTML pieces
  let legendHtml = '<ul id="chartLegend">';
  let badgeHtml = '<h3>Recent Treehouse Badges</h3>';
  let pieHTML = '';
  let counter = 0;
  let sliceSize;
  let sliceRoation;
  let chartTotal = 0;

  // The Total provided by Treehouse includes points not featured in the categories.
  // This allows me to get the proper total for the math to build the pie chart.
  for ( const pointValue in points) {
    chartTotal += points[pointValue];
  }
  chartTotal -= total;
  console.log(chartTotal);

  // Badge List
  for (let i=1; i<=10; i++ ) {
    const index = badges.length - i;
    const badge = badges[index];
    const date = new Date(badge.earned_date);
    let datetext = date.getMonth() + 1;
    datetext += "/";
    datetext += date.getDate();
    datetext += "/";
    datetext += date.getFullYear();
    badgeHtml += '<div class="badge"><img src=' + badge.icon_url + ' alt="' + badge.name + '">';
    badgeHtml += '<div class="badge-info"><span class="badge-name">' + badge.name +'</span>';
    badgeHtml += '<span class="badge-date">' + datetext + '</span></div></div>';
  }
  // build the pie chart HTML
  const pieElement = document.getElementById('pie');
  for (var key in pointsObject) {
    if (pointsObject[key] !== 0) {
      var sliceCount = 0;
      let sliceID = "";
      legendHtml += "<li style='border-color: " + treehouseColors[key] +"'>" + key;
      legendHtml += "<span>" + pointsObject[key] + "</span></li>";
      sliceSize = pointsObject[key] / chartTotal;
      sliceSize = sliceSize * 360;
      sliceID = "s"+counter+"-"+sliceCount;
      pieElement.insertAdjacentHTML("beforeend", "<div class='slice' id='"+ sliceID + "'><span></span></div>");
      const sliceElement = document.getElementById(sliceID);
      sliceElement.style.transform = "rotate("+ offset + "deg) translate3d(0,0,0)";

      let sliceRotation = 0 - 180;
      sliceRotation += sliceSize;
      sliceElement.getElementsByTagName("span")[0].style.transform = "rotate(" + sliceRotation + "deg) translate3d(0,0,0)";
      sliceElement.getElementsByTagName("span")[0].style.backgroundColor = treehouseColors[key];

      counter += 1;
      offset += sliceSize;
    }
  }

  legendHtml += "</ul>";

  // append all the elements to the DOM
  const usernameElement = document.getElementById('treehouse-username');
  const totalPointsElement = document.getElementById('treehouse-total');
  const badgeDisplayElement  = document.getElementById('badge-display');
  const pieLegendElement = document.getElementById('legend');

  usernameElement.innerHTML = name;
  totalPointsElement.innerHTML = total;
  pieLegendElement.innerHTML = legendHtml;
  badgeDisplayElement.innerHTML = badgeHtml;

  document.getElementById('loader').style.display = "none";
}

treehouseAJAX('justincarver');

