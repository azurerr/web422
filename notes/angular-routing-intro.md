---
title: Angular routing introduction
layout: default
---

## Angular routing, introduction

> This document is being edited.  
> This notice will be removed when the edits are complete.

<br> 

Recall the ["Routing" in React](react-routing) notes from a few weeks ago. (Please review them before continuing.)

To summarize, you learned some new ideas:
* Routing matches URLs to components in an app
* In an app, we must add the router code module
* You must design and configure he route URLs
* It is possible to define URL parameters
* It is possible to define a "not found" route

~ ~ ~ ~ ~ 

Return to the tutorial  
Pick and choose the highlights  
Done - not much new was learned there  

Then go to the FUNDAMENTALS > Routing & Navigation  
Work our way through that  
Again, focus on the engineering aspects  

Router features include (from the docs):
* can interpret a URL as an instruction to navigate to a view
* can pass optional parameters along to the view component 
* can bind the router to links on a page
* can navigate imperatively when the user clicks a button, selects from a drop box, or in response to some other stimulus from any source
* and the router logs activity in the browser's history feature so the back and forward buttons work as well

Routes (URL paths) must be defined. In the base config, there's no "by convention" route templates. This contrasts with ASP.NET MVC apps, which have a default route template. (Follow the convention, and there's no route code to write.)

Order of the defined routes matters. 

Route array id of type Routes. A few notes to get started:
* path is a string; it's assumed (configured) that the string is added to the "base" href in index.html
* empty path is often used todo a default redirect
* path ** is a wildcard, to match any non-configured route; often used for 404 not found component (or redirect)
* component names the component with the view to be displayed
* data is optional, can pass an object to the component/view

Router outlet (router-outlet) element is a placeholder, often in app-component.html. 

An `<a>` element must include a routerLink attribute, and NOT an href attribute. 

Often, a `<nav>` element encloses a set of links. Add a `routerLinkActive` attribute to the `<nav>` element so that it will add the CSS "active" class to the active/clicked link. A nice visual help for the browser user. 




( more to come )

<br>