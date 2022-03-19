#### Individual Project for COMP3120:
##### Submitted by: Mariel Anne Uykim (46129448)

--
---

# POEM WEBSITE

This is a website that allows users to post poems they have created, view poems from other users, and vote on a poem.

This website was mainly built using **React, Express, and Node** and is deployed through Heroku.

--

*  **REACT:**

     The website contains multiple components:

1.  **index.js**: the main file that gets executed

2.  **app.js**: contains the router that allows users to navigate the web page, the addLike function, and the get reuqest to retrive data

3.  **preview.js**: generates the poem cards seen in the main page

4.  **poem.js**: generates the poem page when a poem is clicked

5.  **create.js**: generates the form for uploading a poem and sends post request to server

6.  **poems.js**: generates the display for poems in the home page


*  **EXPRESS:**

     Express runs the `server.js` file located in `./server` folder. The file contains the script for retrieving and posting information from the json file.

     * To **get all** poems `/api/poems`
     * To **get a** poem `/api/poems/:id`
     * To **post** a poem `/api/poems`
     * To **update** a poem's likes `/api/poems/:id`


*  **NODE:**

     The project dependencies can be locates in the package.json file. This contains all the necessary packages needed in order to run the website.


*  **DEPLOYMENT:**

     The site is deployed in Heroku. It can be accessed [here](https://still-springs-11430.herokuapp.com/).
