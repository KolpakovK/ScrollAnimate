# ScrollAnimate
ScrollAnimate.js is a JavaScript library designed to facilitate seamless animations on web pages triggered by scroll events. It simplifies the process of animating elements based on their visibility in the viewport while providing flexibility in defining animation types, durations, delays, and easing modes through HTML data attributes. This library enables the initiation and control of animations as users scroll through the webpage, enhancing the user experience and adding dynamic visual effects to content.

## Source description:
### ScrollAnimate.js
This file includes functions to trigger animations on scroll events. It contains methods to check element visibility, handle animation types, and initiate animations based on scroll positions. Use these functions to create engaging scroll-triggered animations on your web pages.

### ScrollAnimate.css
This file contains a set of CSS animations used in conjunction with ScrollAnimate.js to create scroll-triggered animations. Various animation types such as fading in, sliding, and scaling up are available for use. Apply these animations to your HTML elements using corresponding data-animation attributes to enhance your website's visual appeal with scroll-based animations.

## Functions in ScrollAnimate.js
### isInViewport(element, offset)
Purpose: Checks if an element is within the visible area of the viewport.
Example: Ensures that an element becomes visible only when it enters the viewport by adjusting the offset value.

### animateOnScroll()
Purpose: Initiates animations for elements based on their visibility in the viewport during a scroll event.
Example: Triggers the specified animations (fadeIn, scaleUp, etc.) for elements marked with data-animated-item as they come into view while scrolling.

## Examples
**Example 1: Fading In**
```
<div data-animated-section>
  <h1 data-animated-item data-animation="fadeIn" data-duration="0.8s" data-delay="0.0s" data-easing="ease-in-out">
      ScrollAnimate.js
  </h1>
</div>
```
