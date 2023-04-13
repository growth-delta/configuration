# Python Django + Modern JavaScript | NoDe'Django


## Requirements
1. Python the project was developed on Python 3.10.10 | Download: https://www.python.org/ Used for Backend Python & Django
2. Node.js the project was developed on Node v16.18.1 | Download: https://nodejs.org/en Used for Frontend JavaScript & npm

### Technology Stack
#### DataBase
* SQlite | db.sqlite3 (PostgreSQL)  https://sqlite.org
#### Backend
* Python | Django   https://www.djangoproject.com/re
* Python | Django Rest Framework    https://www.django-rest-framework.org/
#### Frontend
* JavaScript    https://www.w3schools.com/js
* JavaScript | React.js     https://react.dev/
* CSS | BootStrap   https://getbootstrap.com/docs/

<img class="img-fluid" src="static/images/screenshots/landing_page.png" style="height: 500px; width: auto;">

## SET UP


### Setup Python Environment & Install packages

**Install Virtual Environments in you Base Python** pip install virtualenv | https://pypi.org/project/virtualenv/

**Create Virtual Environment (venv) in Configuration Folder** virtualenv venv

**Activate the Virtual Python Environment, FOUND-->** /venv/Scripts/activate.ps1

**Install Python Requirements, Run** pip install -r requirements.txt

**Install a new Python Package, Run** pip install A_Fake_Python_Package | https://pypi.org

**When you Install additional Python Packages, to update the requirements.txt file, Run** pip freeze > requirements.txt


### Setup Node.js and Build Frontend files

**Initialize Node.js, RUN:** npm init -y

**Install npm package, RUN:** npm install webpack webpack-cli --save-dev
**It's a good idea to add '--save' any time you install a npm package in configuration django project**
**This will create a node_modules/ folder, plus package.json & package-lock.json files**

**Install npm package for translating React.js to .js, RUN:** npm install --save-dev babel-loader @babel/core @babel/preset-env @babel/preset-react

**Install npm package React.js, RUN:** npm install --save react react-dom

**To build your frontend files, RUN:** npm run dev

"dev": "webpack --mode development --watch"  *This allows you to watch for changes made in the asset/ folder, when a build input file chnages, the frontend bundle files are re-built*

in the scripts /package.json

"scripts": {

    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "webpack --mode development --watch"

}

##### Your Frontend is now setup, modify site.js with any JavaScript you want on your site


### How to create a new django app
**To Create a new DJANGO APP**
1. cd applications
2. py manage.py startapp 'new_app'
3. Modify the apps.py in the new App folder
4. Add a urls.py to the new_app
5. Connect the INSTALLED_APPS in the configuration/settings.py and Connect the URLS to the configuration/urls.py
6. run migrations if you have updated any model.py files etc.
<code>
    # new_app/App.py
    class WebsiteConfig(AppConfig):
        name = '*applications.*website' # 'applications.' Added to name
        *label = 'website'* # New Line
        default_auto_field = 'django.db.models.BigAutoField'
</code>


## Notes
* I use na/ folder in each Django App to contain any files which are not used in the Django App, this is to keep the project clean, these folders are also included in the .gitignore


## Structure

#### Configuration Folder
configuration/ folder is where your Django project is 'configured' aka: settings.py & urls.py ect...

#### Static Folder
**** Never Put Sensitive DATA in the Static Folder instead you must serve it using DRF and modify the settings to apply appropriate Restriction ****

./static/database/
Contains any Data which you want to serve statically. Its Important to note any files in the static folders are available to anyone with a web browser and a URL to download/view.
**This folder should contain files like; .xlsx | .csv | .json etc**

./static/images/
Contains any Images and Graphic which will be served up to the frontend using {% static 'images/image.png' %}

./static/scripts/
Contains the JavaScript files which have been built from your ./asset/javascript folder. Any changes to your .js should be made in the asset folder file, the frontend should then be rebuilt Run: <code>npm run dev</code>

./static/styles/
Contains the CSS files which have been built from your ./asset/styles folder. Any changes to your (.css | .scss) should be made in the asset folder file, the frontend should then be rebuilt Run: <code>npm run dev</code>