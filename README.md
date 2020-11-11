# Multer Upload
Upload image file using multer and fetch it in html using ejs.

Install Express

```
npm install express --save

// in recent version no need to --save It saves automatically
```

Install Body Parsor

```
npm install body-parser

```

Install nodemon for automatically restarting the node application

```
npm install -g nodemon

// -g flag activate it globally
```

For using nodemon
- Make sure you configured
```
// Change in package.json

"scripts": {
    "start": "node app.js"
  }

//app.js may be in your case index.js
```
- run this command in root directory
```
nodemon
```

## Notes:

- res.download() //Download request:
- res.end() //ends the sever response
- res.json() //sends json response
- res.send() //Sends text response
- res.render() //Renders entire template
- res.redirect() //redirecting logged in user to home screen
- res.sendStatus() //Error codes

Status Codes

```
200 Everything Okay
403 Forbideen (NO acess)
404 File not found
500 Internal server error
```
