+++
date = "2017-03-23T23:34:37-04:00"
title = "Louisville.io"
languages = [ "HTML", "CSS", "JavaScript" ]

[menu]

  [menu.main]
    parent = "projects"

+++

On June 6, 2015, I participated in a local event as part of the [National Day of Civic Hacking] in Louisville, KY.  While I was there, the project that I decided to work on was a website that would consolidate all the different calendars of all the different Technology related groups meeting around Louisville.  And that was also the day that [Louisville.io] was born.

I was about 5 weeks into my first session as part of [Code Louisville], which was also the location that hosted the event, and I honestly didn't know what how useful I would be.  However, since I was trying to make a massive carreer shift, this project seemed immediately useful.  So I set down at a table with a group of people who were all significantly more experienced, and offered my help.

One of the members, Eric, had build a static site generator, called [unfold].  It used JavaScript based templates, data stored in json files, and several different NPM based tasks to download the calendars from the different groups, process the received data, and then build the site out.  This was all way over my head, since I had just recently learned the ins and outs of basic JavaScript in the browser.  Most of this was an entirely new concept to me.

But I did know basic HTML and CSS.  So after getting a quick primer on how the templates work, I worked on trying to make a quick and dirty visual design of the site.  The Hackathon was only about 6 hours or so before we had to presented our project. We launched [Louisville.io] to the web that day, and showed the live site as part of our presentation.  It was immediately used by a lot of people to get a quick glance and events coming up in the area.

It is still widely used by people following a similar path as I did, trying to break into the career, and its associated Slack channel has over 1100 registered members.  This is one project that I am still very proud to say I was a part of, even if a small one.  The site has been redesigned, and I've submitted a few pull requests here and there, but the site has taken on a life of its own for the most part now. 

{{% figure src="/img/louisvilleio-original-design.png" title="Original Visual Design of Louisville.io" alt="Original design of Louisville.io" caption="This is the original design of [Louisville.io].  It was later replaced by a design using Bootstrap, but some of the basic layout has survived." %}}

[National Day of Civic Hacking]: http://www.courier-journal.com/story/news/local/2015/06/07/louisville-hackers-code-public-good/28666213/
[Louisville.io]: http://louisville.io/
[Code Louisville]: https://www.codelouisville.org/
[unfold]: https://github.com/ericlathrop/unfold "unfold, a data driven static site generator"
