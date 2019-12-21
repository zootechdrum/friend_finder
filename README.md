# Friend APP

## Description
In this activity, I built a compatibility-based "FriendFinder" application. This full-stack site takes in results from users' surveys, then compares their answers with those from other users. The app will then display the name and picture of the user with the best overall match. 

## Technologies Used
1. Node.js
2. Bootstrap
3. JavaScript
4. CSS3
5. HTML5
6. Flexbox

### Code Snippet

The below code returns a funtcion which then gets called which then gets called and passes the app 
argument into the function. This makes those specific routes that are available in that folder to users
who make both "POST" and "GET" requests. 

```javascript
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);
```

The below code is the small algorithm challenge which compares the compatability score 
of each user to the compatability score of the current user. 

```javascript
 //loops through friends data and has a nested loop to loops through our current friend 
    for (var i = 0; i < friends.length; i++) {
      for (var j = 0; j < friend.answer.length; j++) {

        if (friends[i].answer[j] >= friend.answer[j]) {
          diffArray.push(friends[i].answer[j] - friend.answer[j])
        } else {
          diffArray.push(friend.answer[j] - parseInt(friends[i].answer[j]))
        }
      }
      //adds up all numbers in diff array.
      compatabilityScore = diffArray.reduce((a, b) => a + b, 0);
      //revertsback diffarray to empty after each person
      //If best does not have property of name or bestFriend score is greater then current score
      if (!bestFriend.name || bestFriend.score > compatabilityScore) {
        bestFriend.name = friends[i].name;
        bestFriend.image = friends[i].imageUrl;
        bestFriend.score = compatabilityScore;
      }
      //resets the score back to zero
      compatabilityScore = 0;
      //resets diffArray
      diffArray = [];
    }
//Sends json information to the frontend
    res.json(bestFriend)
    friends.push(friend);
  });
```

### Home screenshot
![Home Pic](/public/images/home-screen.png)

### Survey screenshot
![Survey Pic](/public/images/survey-screen.png)

### Error screenshot
![error Pic](/public/images/error-message.png)

### Best Friend recommendation
![sucess Pic](/public/images/sucess.png)

### Giphy of working app
![site giphy](/public/images/friend-giphy.gif)
