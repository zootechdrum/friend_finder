var express = require("express")
var path    = require("path")
var friends = require("../data/friends")


module.exports = function(app) {


  app.get("/api/friends", function(req, res) {
    res.json(friends)
  });

  app.post("/api/friends", function(req, res) {

    var friend = req.body

    friends.push(friend)
    for( var i = 0; i < friends.length; i++){
      console.log(friends[i])
    }

 
  });

}