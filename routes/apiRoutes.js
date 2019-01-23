var register = require("../routes/loginRoutes");
// var matchIndex;

module.exports = function(app) {
    app.get("/api/register", function(req, res){
        console.log("/api/register hit");
        res.json(register);
    });

    app.get("/api/user", function(req,res) {
        console.log("/api/user hit")
	    res.json(login);
    });

    // app.get("/api/friendMatch", function(req,res) {
    //    var userInfo = {
    //        userName: user,
    //        userPhoto: photo,
    //        match: friends[matchIndex],
    //     //    photo: userPhoto,
    //    }
    //     res.json(userInfo);
    //     console.log(friends[matchIndex], "friends match index");
    //     console.log(user,"user")
    // })

    app.post("/api/register", function(req,res) {
        var register = req.body;
        res.send(register);
    });

    app.post("/api/user", function(req,res) {
        if (!req.body) {
            return;
        }

        var register = req.body;
        // var closeScore = 40;
        
        user = req.body.name;

        // console.log(friends[matchIndex], "getting the match index value");
        register.push(req.body);
        // console.log(friends, "friends in api routes");
        res.send(register);
   });
   
};