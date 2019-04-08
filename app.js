const express   = require('express'),
        app     = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    flash       =require("connect-flash"),
    passport    = require('passport'),
    LocalStrategy = require ('passport-local'),
    methodOverride = require('method-override'),
    Campground  = require("./models/campground"),
    seedDB      = require("./seeds"),
    Comment     = require("./models/comment"),
    User        = require("./models/user");

//require routes  
const commentRoutes  = require("./routes/comments"),
    campgroundRoutes = require("./routes/campgrounds"),
    indexRoutes     = require("./routes/index");

const url = process.env.DATABASEURL || "mongodb://localhost/yelp_camp";
mongoose.connect(url, { useNewUrlParser: true });    
// mongoose.connect("mongodb://localhost/yelp_camp",{ useNewUrlParser: true });  
// mongoose.connect("mongodb+srv://medal:123456Medal@cluster0-qfv2y.mongodb.net/yelp_camp?retryWrites=true", { useNewUrlParser: true });

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname+ "/public"));
app.use(methodOverride("_method"));
app.use(flash());

// seedDB(); //seed the database
// PASSPORT CONFIGURATION
app.use(require('express-session')({
    secret: "G is the best",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req,res,next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
})

app.use("/",indexRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);
app.use("/campgrounds",campgroundRoutes);

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp Server is running");
});