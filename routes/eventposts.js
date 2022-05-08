const express = require('express');
const posts = require('../models/eventposts');
const Posts = require('../models/eventposts');
const Orders = require('../models/eventorders');

const router = express.Router();

//save posts

router.post('/eventpost/save',(req,res) =>{

    let newPost = new Posts(req.body);

    newPost.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Posts saved sucessfully"
        });
    });

});

//get posts

router.get('/eventposts',(req,res) =>{
    Posts.find().exec((err,posts) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:posts
        });
    });
});

//get a specific post

router.get("/eventpost/:id",(req,res) =>{

    let postId = req.params.id;

    Posts.findById(postId,(err,post) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            post
        });
    });


});




//update post

router.put('/eventpost/update/:id',(req,res) =>{
    Posts.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,_post) =>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Update Successfuly"
            });
        }
    );
});

//delete post

router.delete('/eventpost/delete/:id',(req,res) =>{
    Posts.findByIdAndRemove(req.params.id).exec((err,deletedPost) =>{

        if(err) return res.status(400).json({
           message:"Delete unsuccesful",err
        });
        return res.json({
            message:"Delete Succesfull",deletedPost
        });
    });
});

//save orders
router.post('/eventorder/save',(req,res) =>{
    let newOrder = new Orders(req.body);
    newOrder.save((err) =>{
          if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Posts saved sucessfully"
        });
    });
});

//get orders
router.get('/eventorders',(req,res)=>{
    Orders.find().exec((err,orders)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({  
            success:true,
            existingOrders:orders
        });
    });
});



module.exports = router;