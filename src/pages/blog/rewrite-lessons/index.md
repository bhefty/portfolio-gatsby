---
title: Another rewrite and more lessons learned
date: "2017-05-28"
image: "./images/blog-react-rewrite.jpeg"
---

I find the best approach to really learning a topic is just to apply it to a real project. This is something I’ve read over and over again in various articles, but the problem is I sometimes struggle thinking of what project to create which applies what I’m trying to learn. I’ve found that the projects proposed by [FreeCodeCamp](https://www.freecodecamp.com/) are open ended enough to be flexible in playing around, but I tend to like to focus on my portfolio page (which conveniently enough was one of the first FreeCodeCamp projects I did).

I’ve detailed before how my portfolio has gone through several iterations. Now it’s time to add another to the list! Recently, I started watching the live coding sessions that Jesse Weigel has done on the [FreeCodeCamp Youtube](https://www.youtube.com/watch?v=pTw7CDD6k2c) channel and found he was utilizing NextJS in his website. I’d heard very little about NextJS at this point, but a quick read through of the docs on GitHub intrigued me.

One of my early portfolio designs used `create-react-app` to build off of, but I had the feeling it was pretty heavy for showing the static content I had. I moved to a simple Express/Handlebars static site after that, followed by using KeystoneJS once I decided to add this blog. This brings us to my current situation.

## The Journey Begins

I created a new NextJS project anticipating using WordPress to host my blog posts and getting the post data via the WordPress REST API. Building the NextJS portion of the app was really straightforward (I’ve redone this portfolio so many times by this point…) and I already have a good grasp on ReactJS. For the blog side though I had only ever played with WordPress locally on my machine. Given that I was really only starting down this path as a learning experience and wasn’t sure if I would stick with it (once again, my portfolio is constantly evolving) I wanted a free solution to play with. I opted for Heroku since I’m familiar with it, and after reading the docs for [heroku-wp](https://github.com/xyu/heroku-wp). Getting this working wasn’t too difficult, but ultimately I had a problem with this: responsiveness.

On the free usage of Heroku, the dyno will sleep after a period of inactivity. It will wake when prompted for a response, but this can take up to a minute to respond, too long to wait for my blog information to populate on the NextJS portion of the site. I could write a script to keep the dyno awake, but the dyno would still require some downtime to stay on the free tier. Rather than trying to complicate this any further than it needed to be (managing plugins for WordPress on a system running in memory isn’t as by-the-book as you’d think) I decided to look elsewhere into hosting my WordPress.

I found [x10hosting.com](https://x10hosting.com/) after a little searching and it seemed to be what I needed. Given that I only need it hosted for the REST API usage, I wasn’t concerned with performance or hosting features. Setup was really easy and within 30 minutes I had some content up and was able to successfully bring it into my NextJS build. Everything was going great, and after some time I decided to deploy to my DigitalOcean droplet hosting my site. Then I hit another roadblock.

## SNAFU's

My site uses Let’s Encrypt to provide a SSL and serve content securely. My WordPress blog on x10hosting was not protected by SSL however. This resulted in a mixed content error where a HTTPS site won’t make calls for data to a HTTP site. I spent the better part of my Saturday trying to work around this. Getting a SSL working for WordPress would involve upgrading my hosting plan, but I really wanted to get this working without paying for anything.

With upgrading my hosting out of the picture, I thought about my DigitalOcean droplet. I’d heard of people successfully hosting WordPress blogs on the 512mb droplet, and given that I only need to hit the API it should be fine for my uses. I wasn’t sure how this would effect my existing build though so I made sure to take a snapshot of my droplet before going too far. I started by trying to get the [LEMP stack installed](https://www.digitalocean.com/community/tutorials/how-to-install-linux-nginx-mysql-php-lemp-stack-in-ubuntu-16-04). I got mostly through this guide before deciding to try to get NginX to correctly route traffic for my subdomain. This headache of a venture is what I spent most of my day on, and I can say two things for certain:

1. It did not work for me
2. I have a new-found appreciation for those in DevOps

The daylight was fading and then something clicked. If I handled the API call from the server level, I wouldn’t need to be concerned with the mixed content errors. I rolled back to my previous snapshot backup (I knew it would come in handy) and set to work on a new path. NextJS uses `getInitialProps()` which can operate on the server. This worked, but was only part of the solution. If the user navigates between pages, `getInitialProps()` fires off at the client level, giving me the mixed content error once again. I was almost there, but I had been working on this for 12 hours and could see the light. I made sure my server was showing my KeystoneJS version of the site and went to bed.

## It lives!

The next morning I decided to take a slightly altered approach: a custom server. NextJS makes it really easy to do this by creating a `server.js` file and rewriting the start script in `package.json`. I followed the [example](https://github.com/zeit/next.js/tree/v3-beta/examples/ssr-caching) for caching since I figured I’d give it a shot while I was at it. Adding in my routes for my API calls I was almost done. In order for the ReactJS components to call the API correctly, it would need to use an absolute URL from the server, but relative path on the client. I refactored my page views to check if `getInitialProps()` was triggering from the server or client and route my API call as necessary.

I deployed the application on my site and went live. I believe I’ve gotten out the major kinks and while this project has taken longer than I expected, I’ve walked away from it feeling like I understand the technologies involved much more, and even learned a few new things. I realize what I’m doing with my portfolio currently may not be the most “optimal” way of showing the content, but I believe that by using what I’ve learned I’m also able to show others what I know and how I’ve progressed. Not to mention there’s something meta about having your own portfolio in your portfolio!

*Edit: I have removed the server side caching for now as it seemed to be preventing new blog material from updating.*