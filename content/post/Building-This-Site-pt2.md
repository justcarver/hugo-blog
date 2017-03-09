+++
date = "2017-03-07T23:41:44-05:00"
title = "Building This Site Pt. 2"

+++

This is a continuation of my blog detailing how I'm learing to use [Hugo](http://gohugo.io).  See my first steps in [part one]({{ relref "post/Building-This-Site.md" }}).

Today, I went through and removed the [Bootstrap v4 Blog](https://github.com/alanorth/hugo-theme-bootstrap4-blog) theme and reverted back to trying to build my own.

I got my Head and my Site Header into seperate partials, I got my footer into one as well.  Had to do some work figuring out how to access different variables in these partials, but I got help with debuggins through a post on Medium, titled [Tips and tricks for building a theme in Hugo](https://medium.com/@jeffmcmorris/tips-and-tricks-for-building-a-theme-in-hugo-4806bdd747d7#.kiui61k98).  This has helped me a lot figuring out how to build my partials and templates.

I got my main Index template functioning, and will include a picture below.  There are no styles assigned yet, so its all just a list of text, but I have it functioning mostly.  Right now, clicking on any of the links will load a 404 error, so I will have to figure out what is missing there.  From what I gather, I have to build out the template for a single item, which shouldn't be too hard, now that I have the basic Index template done.

That is all for now, so hopefully I will have more progress soon in [Part 3]({{ relref "post/Building-This-Site-pt3.md }}).
