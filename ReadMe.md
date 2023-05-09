# Hybrid: Django + React | Full-Stack Backend + Frontend


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
* JavaScript | https://www.w3schools.com/js
* JavaScript | React.js https://react.dev/
* CSS | BootStrap https://getbootstrap.com/docs/

<img class="img-fluid" src="/static/images/screenshots/landing_page.png" style="height: 500px; width: auto;">

## SET UP


### Setup Python Environment & Install packages

*Install Virtual Environments in you Base Python, Run:*     pip install virtualenv | https://pypi.org/project/virtualenv/


*Create Virtual Environment (venv) in project Folder*    virtualenv venv


*Activate the Virtual Python Environment, run: activate.ps1 FOUND-->*   ./venv/Scripts/activate.ps1


*Install Python Requirements, Run:*     pip install -r requirements.txt


*Install a new Python Package, Run:*     pip install A_Python_Package | https://pypi.org


*When you Install additional Python Packages, to update the requirements.txt file, Run:*     pip freeze > requirements.txt

*Run:* py manage.py makemigrations

*Run:* py manage.py migrate



### Setup Node.js and Build Frontend files

*Initialize Node.js, Run:*      npm init -y

*Install npm package, Run:*      npm install webpack webpack-cli --save-dev

**TO avoid errors add '--save' or '--save-dev' any time you install a npm package in this project, Example:** npm install --save mathjs

**This will create a node_modules/ folder, plus package.json & package-lock.json files**

*Install npm package for translating React.js to .js, Run:* npm install --save-dev babel-loader @babel/core @babel/preset-env @babel/preset-react

*Install npm package React.js, Run:* npm install --save react react-dom

*To build your frontend files, Run:* npm run dev   |   Leave this running in the background so node watches for any changes to the frontend/ folder

*Open another vs code terminal or cli, cd into main directory Run:* py manage.py runserver

##### Now Your Project is ready and you should be ready to start development, and digest the code structure. visit http://127.0.0.1:8000/ to see the project example: Apps, API, Content pages


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
3. Modify the apps.py in the new App folder.
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

