# Recruitment task 


## Table of Content:
1. [Demo link](#Demo-link)
2. [About The App](#About-The-App)
3. [Technologies](#Technologies)
4. [Setup](#Setup)
5. [Structure](#Structure)
6. [Approach](#Approach)

## Demo link:
 - https://fainapahanko.github.io/recruitment-task

## About The App
 - This is the demo page created for the recruitment process.

## Technologies
 - ReactJS, Typescript

## Setup
 - clone the project into your machine 
 - run in your terminal:
 ``` 
 npm i
 npm start
 ```
 - you are briliant

*Note*: to run the code API headers credentials are needed.

## Structure 
  - src/
    - assets/
        - folder for all assets (pngs, svgs, etc);
    - components/
        - ui/
            - folder for small reusable ui components like buttons, forms, icons, etc and their css;
        - folder for modular components and their css;
    - pages/ 
        - folder with pages that appears in the website;  
    - utils/
        - folder with logic that can be used in the application 
        - API.js 
            - file with axios instance initialized;
        - pages.js
            - file with an object to keep track of all pages and add route/component on demand;
        - requests.js 
            - file with functions for requests(GET, POST, PATCH, DEMAND) with parameters;

## Approach

For the project I used typescript in order to control datatypes.  

Reusable utilities placed in dedicated folder in order to not nest them in the component. 

One component one css file. 

I used functional components only because project did not require any functionality that it doesn't have. 
