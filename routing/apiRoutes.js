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

    //Keeps track of the best friend
    var bestFriend = {};
    //array to keep track of the difference
    var diffArray = [];
//loops through friends data and has a nested loop to loops through our current friend 
    for( var i = 0; i < friends.length; i++){
       for(var j = 0; j < friend.answer.length; j++){

        if (friends[i].answer[j] >= friend.answer[j]){
            diffArray.push(friends[i].answer[j] - friend.answer[j]) 
        }else {
          diffArray.push(friend.answer[j] - parseInt(friends[i].answer[j]))
        }
       }
       //adds up all numbers in diff array]
       diffArray = []
       compatabilityScore = diffArray.reduce((a, b) => a + b, 0)
       //revertsback diffarray to empty after each person
       //If best does not have property of name or bestFriend score is greater then current score
       if(!bestFriend.name || bestFriend.score > compatabilityScore){
        bestFriend.name = friends[i].name;
        bestFriend.image = friend[i].mageUrl;
        bestFriend.score = compatabilityScore;
       }
       //resets the score back to zero
       compatabilityScore = 0;
     }

     console.log(bestFriend)
  });

}