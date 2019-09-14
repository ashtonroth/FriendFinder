var friendArray = require("../app/data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendArray);
    })

    app.post("/api/friends", function (req, res) {
        //Send user data
        var user = req.body;
        console.log(user)
        //Note the differences between the user and the possible friend
        var differences = [];

        //Search friend array
        friendArray.forEach(function (friend) {
            var userComparison = 0;

            for (var i = 0; i < user.scores.length; i++) {
                var userScore = user.scores[i];
                var friendScore = friend.scores[i];
                var difference = friendScore - userScore;
                userComparison += Math.abs(difference);
            }
            differences.push(userComparison);

        });
            var minimumDifference = Math.min.apply(null, differences);

            var trueLove = [];

            for (var i = 0; i < differences.length; i++) {
                if (differences[i] === minimumDifference) {
                    trueLove.push(friendArray[i]);
                }
            }
            res.json(trueLove);
            friendArray.push(user)
    })
}