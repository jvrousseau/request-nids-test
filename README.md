This shows a very peculiar issue with the request module when used in a browser.

Usage
```
npm install

node index.js //to start the web server

node test.js //this runs a readFileSync and request on the data file.
            //The output is the length of each response

```

open http://localhost:3000/ in your browser and open the console to see the same output.

if you want to change some things in the test.js file run to have that update the bundle.js file

```
    browserify -t brfs test.js > bundle.js
```