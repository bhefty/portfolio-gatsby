---
title: "Part 1: The Case for React Redux Boilerplate"
date: "2017-07-19"
image: "./images/redux-part-1.jpg"
---

I’ve long been a fan of ReactJS. I try to use it in all of my projects in fact. I’ve touched it before, but this portfolio site at the time of this post is written in ReactJS using NextJS. One thing that I’ve always wanted to really utilize though has been Redux.

There are resources available that can better teach Redux than I can, some of which I’ve gone through myself. I won’t try to position myself as an expert here, but I believe talking through what I’m learning is the best method to really learn it myself. This will be the first part in a who-knows-how-many-parts series describing my experiences in creating a boilerplate as a means of learning Redux and how to apply it to my projects. Let’s get started!

# Starting Point

I came across [react-boilerplate](https://github.com/react-boilerplate/react-boilerplate) probably 6 months ago when searching for a way to kickstart my projects. At the time, I was barely introduced to React and the concepts utilized in this boilerplate felt way over my head. The creators were very upfront about this though, specifically stating the following in their readme:

```
Please note that this boilerplate is production-ready and not meant for beginners!
```

Having read this and looking at the built in sample project, I was amazed by the sense of scale and complexity. I felt overwhelmed and retreated back to my small projects, wondering if I’d ever reach the point of understanding what was involved in that amazing boilerplate.

Fast forward to just a couple weeks ago, and I feel like a much more accomplished developer. I had my Front-End Developer Certification from FreeCodeCamp under my belt, solid progress on the Back-End projects, and felt like I had a good grasp on React. As I worked through the back-end projects from FCC I was starting to feel the pain of managing state with setState and passing it and props back and forth between parents and children components. If I took anymore than a day away from my codebase, I had to relearn what I was doing all over again. It was time to figure out Redux.

# Code monkey see, code monkey do

Looking at future projects and what I could think I might do, I came to the conclusion I needed a boilerplate that provided the fundamentals that I want to implement my work going forward:

* State management
* Testing
* Coverage reports
* Continuous integration/deployment

I went back to react-boilerplate and scanned through the codebase. I actually understood what was going on for the most part this time around. Given the popularity of this boilerplate, I decided I wanted mine to be very similar in structure and features. Why not just use the existing boilerplate? Firstly, I felt like if I hand coded the entire structure myself, I would better understand it. Secondly, I wanted to change some aspects of the boilerplate to suit my needs.

## State Management

I wanted a structured way to maintain application state in my projects, above and beyond what setState offered. Utilizing actions and reducers, and also selectors, have made it very opinionated in how I touch my data while helping ensure a functional style of programming, always getting predictable results.

## Testing

Testing has become very important to me. I’ve spent too much time `console.log`ging over and over just to troubleshoot and make sure I get expected results. This boilerplate uses Jest with enzyme for testing. I find it reasonably fast to run, and the visual output of running 200 tests feels amazing when all the green PASS marks flies by. There’s nothing quite like going to bed knowing all your functions work as expected!

## Coverage Reports

Using [Coveralls](https://coveralls.io/), I get a nice layout (and badge!) showing how much of my code is covered which gives a great confidence boost in my codebase. In addition, I’ve set a coverage threshold to make sure I’m not a completely untested code branch to production.

## Continuous Integration/Deployment

I won’t be able to do CI/CD justice here. Being able to push commits and have my tests automatically run (separate from my local machine especially) is an amazing feature that I wonder how I’ve lived so long without it. This prevents me from merging broken code to master, and adding on automatic deployment on top of that is just icing on the cake!

# More to come

I plan on doing a deep dive into all the major functions of my boilerplate, detailing how I differed my codebase from the origin react-boilerplate repo and why I made the decisions I did. More importantly, I can go over where I struggled to help myself and maybe someone else learn!