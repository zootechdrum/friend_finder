var express = require("express")
var path    = require("path")
var friends = require("../data/friends")


module.exports = function(app) {


  app.get("/api/friends", function(req, res) {
    res.json(friends)
  });

  app.post("/api/friends", function(req, res) {

    var friend = req.body;

    var compatabilityScore;

    var bestFriend = {};

    var diffArray = [];

    for( var i = 0; i < friends.length; i++){
       for(var j = 0; j < friend.answer.length; j++){

        if (friends[i].answer[j] >= friend.answer[j]){
            diffArray.push(friends[i].answer[j] - friend.answer[j]) 
        }else {
          diffArray.push(friend.answer[j] - parseInt(friends[i].answer[j]))
        }
       }
       compatabilityScore = diffArray.reduce((a, b) => a + b, 0)
       console.log(compatabilityScore)
       diffArray = []
     }
  });

}