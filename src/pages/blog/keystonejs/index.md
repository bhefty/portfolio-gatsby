---
title: Lessons learned in moving to KeystoneJS from development to production
date: "2017-04-13"
image: "./images/blog-keystone.jpeg"
---

So I have successfully migrated my portfolio site over from an Express generated framework to KeystoneJS. The initial setup and moving content over from HBS to Pug templating wasn’t hard (it’s not a very large site to begin with), and getting everything running locally in development went smoothly.

I’ve pushed enough projects to Heroku which also make use of mLab for MongoDB that I was fairly confident in my ability to stand it up quickly. Sure enough, I had both Heroku and mLab spun up within a few seconds and added my MongoDB URI to the Heroku environment variables. One npm install later and my Heroku instance was running smooth.

Now that I was confident my site would run outside of my local dev environment, it was time to move it to my DigitalOcean Droplet where my site is hosted. I had just recently moved my portfolio from a React single page app to an Express generated one, so I was somewhat familiar with the process. I ssh’d into my Droplet, cloned my Github repo, went ahead and added my .env file, and started npm install. That’s when I ran into a bit of a snag.

NPM appeared to be installing fine, until around the 80% mark when I got a message that it was killed. I tried a couple more times and every time it killed the process. I believe I had also run into something similar when I first stood up my Droplet, so I began researching and found my answer. The tier I’m on for my Droplet has 512MB of RAM, which wasn’t enough for the npm installer to finish. I found a link to this site on how to add swap space on Ubuntu, which is what my Droplet is running. Within a few minutes I had added a temporary swap of 1GB which allowed my node modules to finish installing!

All that remained was to reconfigure my pm2 process manager to make sure that the Keystone instance started every time in the background should my Droplet reboot. All told, this journey from local development to production took roughly one hour, but I feel that I understand some of the processes involved much better than I did before.

I also wanted to give a link to How to Deploy a Node.js App to DigitalOcean with a Free SSL Certificate. This YouTube video has helped me several times as a great reference when standing up and maintaining my website!