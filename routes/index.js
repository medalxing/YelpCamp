const express = require('express'),
    router  = express.Router(),
    passport    = require('passport'),
    User    = require("../models/user");

//root
router.get("/", function(req,res){
    res.render("landing");
});

//register
router.get("/register", function(req, res){
    res.render("register");
});

router.post("/register", function(req, res){
    const newUser = new User({username:req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            req.flash("error", err.message);
            return res.render("register");
        }
        passport.authenticate("local")(req,res,function(){
            req.flash("success", "Welcome to YelpCamp "+ user.username);
            res.redirect("/campgrounds");
        })
        
    })
});
//Show login form
router.get("/login", function(req, res) {
    res.render("login");
})

router.post("/login", passport.authenticate("local",
    {
        successRedirect:"/campgrounds",
        failureRedirect: "/login"
    }),
    function(req, res) {
});

//logout
router.get("/logout", function(req, res) {
    req.logout();
    req.flash("success", "Logged you out!");
    res.redirect("/campgrounds");
})


module.exports = router;