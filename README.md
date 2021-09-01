
![Status Stable](https://img.shields.io/badge/Status-Stable-blue)
[![MIT License](https://img.shields.io/badge/License-MIT%20License-brightgreen)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
# Tech Blog
This project is about creating a blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. It follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.
## Table of Contents
- Tech Blog
	* [Installation](#installation)
	* [Usage](#usage)
	* [Database](#database)
    * [Credits](#credits)	  
	* [Future Features](#Future-Features)
	* [Contributions](#contributions)
- [🔗 Links](#---links)
	+ [GitHub Repository](#github-repository)
	+ [Live Link in Heroku](#Live-Link-in-Heroku)
	+ [Support](#support)
	+ [Authors](#authors)
## Installation
This project uses many packages from NPM. 
- app-root-path 
- connect-session-sequelize 
- express 
- express-handlebars 
- memorystore 
- mysql2 
- bcrypt 
- dotenv 
- express-session 
- sequelize

## Usage
The user can browse the blog without authentication, but if he or she wants to post or comment about other 
people's posts, then a login is needed. The site is very easy to navigate. There is an option to create a new user, in 
case someone wants to contribute but is not registered yet.

![tech-blog.gif](docs/tech-blog.gif)

## Database
This is the structure of the schema used for the project.
![tech_blog_db.png](docs/tech_blog_db.png)


## Credits
Following are the websites that helped me the most to understand and solve some problems I found while developing 
the project. 
 - [sequelize associations](https://sequelize.org/master/manual/associations.html)
 - [Four Sequelize Associations You Should Know](https://javascript.plainenglish.io/four-sequelize-associations-you-should-know-415d8d413e1e)
 - [A Step By Step Guide To Using Handlebars With Your Node js App](https://waelyasmina.medium.com/a-guide-into-using-handlebars-with-your-express-js-application-22b944443b65)
 - [How to deploy a NodeJS app to Heroku](https://www.freecodecamp.org/news/how-to-deploy-a-nodejs-app-to-heroku-from-github-without-installing-heroku-on-your-machine-433bec770efe/)

## Current Features
````````````````````````
- It is a CMS-style blog site
- Uses authentication to distinguish among users
- Follows the MVC paradigm of architectural structure
- Its easy to navigate and use
````````````````````````
## Future Features
````````````````````````
- Make the Blog mobile-friendly
- Ability to choose different color palettes
````````````````````````
## Contributions
If you would like to contribute to this project , you are very welcome! You can fork it and later submit a pull request. 
In case you need them, here are some guidelines: [Contributor Covenant](https://www.contributor-covenant.org/)
# 🔗 Links
### GitHub Repository
[https://github.com/giannifontanot/tech-blog/](https://github.com/giannifontanot/tech-blog/)
### Live Link in Heroku
[https://gianni-tech-blog.herokuapp.com/](https://gianni-tech-blog.herokuapp.com/)
### Support
If you need help with this project, please write to: [giannifontanot@gmail.com](https://mailto:giannifontanot@gmail.com)
### Authors
 - [@giannifontanot](https://www.github.com/giannifontanot)
 - [![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://giannifontanot.github.io/portfolio/)
 - [![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/gianni-fontanot/)