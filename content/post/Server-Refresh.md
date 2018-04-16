---
title: "Server Refresh"
date: 2018-04-15T07:56:46-04:00
menu:
  main:
    parent: 'posts'
---

Welcome to the new-ish website! Same site, hopefully new commitment to keeping it updated.  Had to make some updates (updated to [Font Awesome 5] for example) which required a bit of redoing of my custom templates.  Also transitioned to a new Droplet to take advantage of [Digital Ocean]’s upgraded plans.

I’ve been wanting to learn and use [Docker], and the upgraded storage capacity of these VPS’s seemed like a good time to learn.  

Currently, I’m using a container running [Traefik] as a reverse proxy.  This also lets me use [Let’s Encrypt] for valid SSL certificates, which is very good.

This site is still being built using [Hugo], but is now being served by a custom Docker image.  That image builds from a basic [NGINX] container to serve my files.

And I still have it all set up to use [git post-receive hooks] to build and deploy any changes.

So far enjoying the set up.  Going to try to work over the next few days to better explain some of my software choices.

[Font Awesome 5]:https://fontawesome.com/
[Digital Ocean]:https://www.digitalocean.com/
[Docker]:https://www.docker.com/
[Traefik]:https://traefik.io/
[Let's Encrypt]:https://letsencrypt.org/
[Hugo]:https://gohugo.io/
[NGINX]:https://www.nginx.com/
