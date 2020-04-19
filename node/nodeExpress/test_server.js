let http = require("http")

let ourApp = http.createServer(function(req, res) {
    console.log(req.url)
    if(req.url == "/") {
        res.end("Hello from home page!")
    }
    if(req.url =="/about") {
        res.end("Hi from about page")
    }
    
    res.end("Page not found!")
})

ourApp.listen(3000)  
console.log("running in PORT:3000")