# Friend APP

## Description
In this activity, I built a compatibility-based "FriendFinder" application. This full-stack site takes in results from users' surveys, then compares their answers with those from other users. The app will then display the name and picture of the user with the best overall match. 

## Technologies Used
1. Node.js
2. Bootstrap
3. JavaScript
4. CSS3
5. HTML5

### Code Snippet

The below code returns a funtcion which then gets called which then gets called and passes the app 
argument into the function. This makes those specific routes that are available in that folder to users
who make both "POST" and "GET" requests. 

```javascript
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);
```