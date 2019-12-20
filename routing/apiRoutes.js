var express = require("express")
var path    = require("path")
var friends = require("../data/friends")


module.exports = function(app) {


  app.get("/api/friends", function(req, res) {
    res.json(friends)
  });

  app.post("/api/friends", function(req, res) {

    var friend = req.body;

    var bestFriend = {};

    var diffArray = [];

    for( var i = 0; i < friends.length; i++){
       console.log(friends)
      //  if (friends[i].answer[k] >= friend.answer[k]) {
      //      (diffArray.push(friends[i].answer[k] - friend.answer[k]))
      //  }else {
      //   diffArray.push(friend.answer[k] - parseInt(friends[k].answer))
      //  }
     }

  });

}