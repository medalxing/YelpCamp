const express = require('express'),
        router  = express.Router(),
        Campground = require("../models/campground"),
        middleware = require('../middleware')
    
router.get("/", function(req, res){
    Campground.find({},function(err, campgrounds){
        if(err){
            console.log(err)
        }else{
            res.render("campgrounds/index",{campgrounds:campgrounds, currentUser: req.user});
        }
    })
    
});

//Create = add new campground to DB
router.post("/", middleware.isLoggedIn, function(req, res){
    let name = req.body.name;
    let price= req.body.price;
    let image = req.body.image;
    let description = req.body.description;
    let author = {
        id: req.user._id,
        username: req.user.username
    };
    let newCampground = {name:name,price:price, image:image, description:description, author:author}
    Campground.create(newCampground,function(err, campground){
    if(err){
        console.log(err);
    }else{
       
        req.flash("success","You created a campground!")
        res.redirect("/campgrounds");
        }
    });
});

router.get("/new", middleware.isLoggedIn,function(req, res){
    res.render("campgrounds/new")
});

router.get("/:id", function(req, res){
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
         if(err){
        console.log(err);
    }else{
        
         res.render("campgrounds/show", {campground:foundCampground});
        }
    });
   
});
//Edit 
router.get("/:id/edit", middleware.checkCampgroundOwnership, function(req, res){
    Campground.findById(req.params.id, function(err, foundCampground){
        res.render("campgrounds/edit",{campground: foundCampground});
    });
});

//Update
router.put("/:id",middleware.checkCampgroundOwnership, function(req, res){
    
    Campground.findByIdAndUpdate(req.params.id,req.body.campground, function(err, updatedCampground){
        if(err){
            res.redirect("/campgrounds");
        }else{
             res.redirect("/campgrounds/"+ req.params.id);
        }
    })
   
});

//Destroy route
router.delete("/:id", middleware.checkCampgroundOwnership, function(req, res){
    
    Campground.findByIdAndRemove(req.params.id,function(err){
        if(err){
            res.redirect("/campgrounds");
        }else{
             res.redirect("/campgrounds");
        }
    })
   
})


module.exports = router;
