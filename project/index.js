var rp = require('request-promise')

rp('http://www.google.com')
    .then(function (htmlString){
        //Process html...
        console.log(htmlString)
    })
    .catch(function(err){
        //error
        console.log (err)
    })