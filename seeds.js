const mongoose = require("mongoose"),
    Campground= require("./models/campground"),
    Comment = require("./models/comment");
const data= [
        {
            name:"Yellowstone",
            image:"https://images.spot.im/v1/production/mhauolfkk9clppokc3po", 
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            name:"Park Foundation",
            image:"https://www.nationalparks.org/sites/default/files/yellowstone-header.jpg", 
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            name:"Winter Yellowstone",
            image:"https://ifly-selections-axaxzmkc.netdna-ssl.com/10301486-klm-selections/content/image/_f_large/Yellowstone_01_Header_Video_Still-1479142969.jpg", 
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    ]
    
function seedDB(){    
    Campground.remove({}, function(err){
        // if(err){
        //     console.log(err);
        // }else{
        //         console.log("removed campgrounds!");
        //         data.forEach(function(seed){
        //         Campground.create(seed,function(err, campground){
        //         if(err){
        //             console.log(err)
        //         }else{
        //             console.log("added a campground");
                    
        //             Comment.create(
        //                 {
        //                     text: "This place is great, but I wish there was internet",
        //                     author: "Homer"
        //                 }, function(err, comment){
        //                      if(err){
        //                          console.log(err)
        //                      }else{
        //                         campground.comments.push(comment);
        //                         campground.save();
        //                         console.log("Create a new comment");
        //                      }
        //                 }
        //             )
        //         }
        //      })
        //  })
        // }
    });
    
}

module.exports=seedDB;