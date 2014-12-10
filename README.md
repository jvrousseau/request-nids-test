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

The issue that I am seeing is that there seems to be some compression of the data on request within the browser.

Here are some basic stats from testing

Original file size: 340968 bytes

Server-side:

    readFileSync: 340968 bytes

    request: 340968 bytes

Browser-side:

    readFileSync: 340968 bytes

    request: *327844 bytes*
