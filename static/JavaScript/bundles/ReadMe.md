Frontend build files are located in this folder, to build the bundles set up the frontend, as per the documentation and run: npm run dev.

To modify the frontend files, edit the js & jsx files located in assets/JavaScript/ once the files are modified you must re-build the frontend, so you dont have to re-build each time it's a good idea to have the npm run dev, constantly watching for changes in the designated webpack build entry files:   
entry: {
    site: './assets/JavaScript/site.js',
    FactGenerator: './assets/JavaScript/applications/FactGenerator/FactGenerator.jsx',
    Table: './assets/JavaScript/applications/Table/Table.jsx',

    Example_of_adding_a_file: './assets/JavaScript/applications/Table/Example_file.js'
    
},  // input file

Add new build files to the entry: in webpack.config.js this will add a new bundle file