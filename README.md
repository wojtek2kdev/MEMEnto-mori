# MEMEnto-mori

##### Simple node.js project for uploading and evaluating memes. 
##### Main idea standing behind this project is to allow any registered user upload memes. There is only one restriction: each user can upload one meme at a time and won't be allowed to upload another one until the last uploaded "dies". After lifecycle of the meme ends it is deleted from the servers and the user can upload new meme again. Likes and dislikes gathered by the uploaded content are stored permanently. 
#
#### Technological stack:

###### Back-end
* Node.js
* Express
* PostgreSQL
* Sequelize
###### Front-end
* Vue
* Vuex
* VueRouter
* Buefy/Bulma
* SASS/SCSS
* Webpack
###### Testing
* Mocha
* Chai
* Chai-http

## ERD:

![relations](https://i.imgur.com/mhtqD28.png)

## Features done:
|Frontend|
|--------|
|Navbar with: Logo, Add, Categories[dropdown] and if session inactive (Sign In, Sign Up) if active (profile, Log Out)|
|Background with memes|
|News feed|
|News object: title, category, image, author, like, dislike|
|Pagination if sites count > 1|
|Communicaton with rest api: fetching memes by (category or category and page or page) + pagination, fetching user info, fetching categories into navbar and add meme form in select input, fetching likes and dislikes for each meme (inluding logged user opinion)|
|Add meme form: title {1,50} characters, category (Games, Black Humor, Other [if you want then add more]), image file|
|Registration form: Username max 20 characters, Password min 8 characters, one min one big letter, min one number (added regex), password confirmation, recaptcha|
|Login form: Username, Password, field for error|
|Profile info site: username, join date, likes and dislikes|

|Backend|
|-------|
|Made 4 models: user, meme, category and vote|
|Made session for 1 hour|
|Made schedule job which delete all memes older than 1 hour every minute|
|Configured database with Sequelize|
|Exported sql database into src/config folder|
|Middleware wrappers which executes function if session is active or inactive|
|REST api for fetching memes, votes, categories and for upload memes and evaluate them|
|Used 3 http methods, GET for getting json informations, POST for login/registration/add meme, PUT for evaluate memes|
|Controller checking recaptcha|

|Testing|
|-------|
|Made test for authentication which check result on correct and incorrect authorization|
|Made tests for user model which check validation|
|Made test which ckeck if user was insert into database correct|
|Made some integration tests which check add meme functionality|

## TODO:

###### Frontend
* Make RWD for all pages
* Make more beautiful design
* Learn how to write better BEM
* Learn more about semantics

###### Backend
* Make report meme system
* Search and resolve all vulnerabilities
* Make protection from website flooding
* Learn more about S.O.L.I.D and clean code
* Contrib note: DDD or EDD

###### Testing
* Learn more about TDD
* Write code with TDD more often
* Learn something about other testing metodologies
* Learn how to write better tests
* Make more tests for this project

## How to install project:

1. Install postgres on your computer. [tutorial](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-16-04)
    If you use other system than Ubuntu then search alternative tutorial.
2. Create new database, name it e.g memento
3. > $ psql memento < src/config/database.pgsql
4. > $ sudo npm install --unsafe-perm
5. > $ npm run build
6. You have to generate recaptcha keys and insert these into src/config/recaptcha.js this file looks:
    ```js
    module.exports = {
        SECRET: 'your_secret_key',
        SITE: 'your_key_on_website'
    };
    ```
7. > $ node app.js
8. Enter browser to address: localhost:8081
