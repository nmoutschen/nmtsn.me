---
title: "nmtsn.me"
date: 2019-04-22T11:53:00+02:00
draft: false
category: frontend
summary: |
  My personal website running Hugo. Working a lot with backend systems, I wanted to refresh my knowledge of frontend design.
---

As I spend lot of my time experimenting with backend systems these days, I usually don't have the chance to play around frontend design.

I went through multiple iterations on both the underlying technology as well as the design itself.

You can see the source code running this website on [Github](https://github.com/nmoutschen/nmtsn.me).

## Technology

A colleague of mine gave me the motivation to experiment with [Vue.js](https://vuejs.org/). I started with a new Vue project for the first iteration. However, I quickly realised that managing all articles manually would be bothersome in the long run. While I could've used [VuePress](https://vuepress.vuejs.org/), I switched to [Hugo](https://gohugo.io/) as it is purpose-built for static websites.

I ended up using Vue for other projects, but I prefer to stick to something like Hugo for purely static projects, as I feel it gives me more control over the overall generated content.

## Design

### First iteration

![Screenshot of the first iteration](/img/nmtsn.me/screenshot1.png)

I decided to generate a random, moving set of triangles for the background using Perlin noise. I liked the cybernetic look that it gave as the triangles were slowly shifting around.

The background was made of right triangles (two forming a square), with the coordinates of each vertex being slightly shifted according to a 2-dimensional Perlin noise map. The colour of each triangle would also shift slowly overtime between different nuances of light gray.

### Second iteration

![Screenshot of the second iteration](/img/nmtsn.me/screenshot2.png)

During the second iteration, I decided to learn how to use [Sketch](https://www.sketch.com/). This helped me a lot in arranging the different element and build layouts for different types of screens.

I tried to stick to the principles of [Responsive Web Design](https://en.wikipedia.org/wiki/Responsive_web_design) with a mobile first approach.


![Palette for the second iteration](/img/nmtsn.me/palette1.png)

I also used a much brighter palette, using [Coolors.co](https://coolors.co/) for inspiration.

### Third iteration

In the end, having such a saturated background made it difficult to build something suitable for articles. I was also using [P5js](https://p5js.org/) for rendering the background and that library size seemed overkill for the desired outcome.

![Palette for the third iteration](/img/nmtsn.me/palette2.png)

I switched to more muted colours and a simpler, one-column design that would switch seamlessly for different screen sizes.

![Layout in Sketch for the third iteration](/img/nmtsn.me/sketch1.png)
