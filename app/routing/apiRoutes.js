var path = require("path");
var allFriends = require("../data/friends.js");

module.exports = function(app) {

app.get("/api/friends", function(req, res){
    res.json(allFriends);
})

app.post("/api/friends", function(req, res){
    var answers = req.body.answers;
    // console.log(answers);
    var minDifference = 9000;
    var bestMatch;

    for(i=0; i< allFriends.length; i++) {
        // console.log("test");
        var comparedFriend = allFriends[i].answers;
        var totalDifference = 0;
        console.log(comparedFriend);
        for(j=0; j < answers.length; j++) {
            // console.log("Nested test");
            // // console.log(answers[i]);
            var difference = Math.abs(answers[j] - comparedFriend[j]);
            // console.log("difference");
            // console.log(difference)
            totalDifference += difference;
        }
        console.log(totalDifference)
        console.log(allFriends[i].name);

        if(totalDifference < minDifference) {
            bestMatch = allFriends[i];
            minDifference = totalDifference;
            // console.log(allFriends[i].name);
        }
    }
    allFriends.push(req.body);
    console.log(bestMatch);
    res.json(bestMatch);
})
}