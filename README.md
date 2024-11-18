# AuctionApp_testing

AuctionApp_testing is a project made for an application that runs locally. Project contains API tests with most important requests : GET, PUT, POST, DELETE.

# Framework setup

Requirements : Visual Studio Code, Javascript, Jasmine and Selenium installed. Axios library is used for automation support, and Allure is used as a reporter. <br>

WebDriver with Selenium -> [download](https://chromedriver.chromium.org/downloads) ChromeDriver with the proper Chrome version <br>
In case of a Chrome Browser update, run : `npm install selenium-webdriver@latest` to update Selenium. 

Node.js -> [here](https://nodejs.org/en/download) <br>

Framework setup: 
!run in terminal!
* Creating a package.json file for compiling : `npm init –y` <br>
* Installing dependencies listed in the package.json file : `npm install` <br>
* Building the project : `npm run build` <br>
* Configuring Jasmine : `npm install --save-dev jasmine` <br>
* Installing Axios : `npm install axios` and adding the library : `import axios from 'axios';` <br>

# Running the project

* Running a specific test : `npm test thenameofthetest.test.ts` <br> 
* Running all the tests : `npm test`
