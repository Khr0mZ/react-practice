# Introduction

This is a small project to build a profile page for a person/character. There are a number of tasks that span different skills for you to test how much you know about everyday things required as a developer:
- maybe check out sourcecodes from git
- run a project in your IDE and work on it
- start a development server based on node, first downloading all dependencies
- read requirements and come up with a technical solution for implementing the described functionality
- write some HTML and CSS to build a page
- use css to layout a page into sections
- maybe add responsiveness to it
- maybe build components in react
- maybe use JSON data as input to display in the page
- manipulate some images

If you know how to do all of that, that is great. If there are things you do not know yet, then don't worry, just try to get to a result with the parts of technology you **do** know how to work with (plain HTML/CSS, not dynamic from JSON for instance). It is more about you getting an overview what the job is like and us getting an idea what you already know, what way you took towards implementation. 

# A react based profile

The desired result is a profile page, which displays a set of data (that is supplied in the App.tsx file). The page consists of several boxes for different sets of information about the person. Each section will be explained in detail.

You can see the desired structure in characterpage.png in this folder.

## The layout
The profile should be centered on the page horizontally and have a maximum width of 1200 pixels. In web development today, we build pages to adapt to the width of the screen (or window). This is calles responsive design and uses CSS breakpoints to define different CSS rules based on how wide the screen is for example. If you know how to do this, we would change the layout as it is seen in the charagerpage.png, so that below 600 pixels width all of the boxes become a list, each box below the other, so no two boxes are next to one another horizontally. So, if you see in the description that a box should take 50% of the width, then this means "as long as the screen is more than 600 pixels wide", and below that it should be 100% of the screen width.

Each box should have the same background color and a padding inside, so the contents do not touch the sides of the boxes.

The characterpage.png is a so called wireframe, meaning it was badly drawn not to represent the design of the page, but to show the structure of the page. So it is not supposed to actually look like that. If you want to make it a little prettier, you might find inspiration here: 
https://charactersheetonline.com/discover    
https://dribbble.com/shots/2549710-Hubstaff-directory-profile-page   

We are not hiring a designer, so do not worry, but if you enjoy that kind of thing feel free.

## The sections of the profile

### Basic info box
There should be a box which spans 50% of the width of the profile, which contains the profile photo, the name and the location of the person. The values in the JSON data are `name`, `location` and `avatar`
The image should be left aligned with the text to the right of the image with some space between it.

### Bio box
There should be a box which spans 50% of the width of the profile, sits below the Basic info box and which contains a text. The value in the JSON data are `bid`.
There should be a headline "bio" and the text from the JSON.

### Classes info box
There should be a box which spans 50% of the width of the profile, which contains a list of classes the person belongs to. Each class has a name and a level. The values come from the JSON data in `classes`.

The output should be the format rank and then skill. Each entry should be on a separate line. 

The box should have a headline "Classes"

### Achievements box
There should be a box which spans 100% of the width of the profile, which contains a list of achievements of the person. Each achievement consists of an image with a small text below it. The values come from the JSON data in `achievements`.

The box should have a headline "Achievements"

The list should be horizontal, each achievement has a fixed width, the text blow the image becomes multiple lines if it is too long to fit in one line at that width. 

You can take the image from this page: https://www.cleanpng.com/png-computer-icons-medal-rewards-4238662/preview.html. You will have to cut this up into individual transparent PNG images and put them in public/assets to use them. See the JSON data in the App.tsx which contains the image path and name. 

### Skills box
There should be a box which spans 50% of the width of the profile, which contains a list of skills of the person. Each skill belongs to a category. The values come from the JSON data in `skilltree`.

We want to display a category and each skill that belongs to it as a separate entry below it (see image). Each skill has a number of experience points and really nice would be if the category has the sum of all of the entries. This is a bit more advanced though. 

The box should have a headline "Skills"

### Inventory box
There should be a box which spans 50% of the width of the profile, which contains a list of things the person has. Each item belongs to a category. The values come from the JSON data in `inventory`.

We want to display a category and each item that belongs to it as a separate entry below it (see image). 

The box should have a headline "Inventory"

### Growth map box
There should be a box which spans 100% of the width of the profile, which contains a list of things the person wants to achieve. Each thing belongs to a category. The values come from the JSON data in `goals`.

Sorry that this section is not better done in the wireframe. Please follow these written instructions closely and it will come out ok.

We want to display each category as a block with the title and each item that belongs to it as a separate entry below it. There can be up to 16 categories. We want to show four horizontally in a row, so up to four rows. All entries in a row should start at the same vertical position. The next row will start below the longest block of the previous line, all blocks of that row starting at the same vertical position. Four is too much for reading on a phone for example, so we want to have maybe two breakpoints, where first the rows become two blocks horizontally per row (maybe if the screen is less than 800 pixels) and below 400 it should become each block stacked vertically.

The box should have a headline "Growth map"

## Some notes on react
React makes building components from HTML/CSS/JS easy. It is not a part of standard web technologies and it introduces one weird feature: JSX (or TSX with typescript). This is a way to write components in JavaScript with HTML mixed inside. This is strange to begin with but has proven **very** useful. There are tons of tutorials on this, but take a look at the App.tsx, notice how it is not a class but a function. Make sure, __if__ you want to build react components to make them functional components.

If you understand a bit of react then: the data should remain in the App.tsx and be passed in as props into the components. 

## Tips
- www.photopea.com is photoshop in a browser, good to work on images.
- For the layout check the flexbox CSS properties
- The project is set up with typescript, a superset of javascript. You do not have to use it, but it may give you errors for things that are not correct (that is what it is for)
- Once you have the project running with `yarn start`, you should be good to go, everything you change and then save gets reloaded in the browser straight away. 

## Requirements
You need an IDE. Try visual studio code, it's free. You need to have nodejs installed and yarn, which is used to download javascript libraries for node. If you have these three things look at the [README react.md](README react.md) for more instructions on running the project.

## Starting up
You should check this project out from gitlab, then with the above requirements you should be able to run the project. If you see the page with a react logo in your browser you are ready to begin. 

## Ask
If you have questions, it is better to ask than to do the wrong thing. Feel free to ask us about if you understood something correctly. 

