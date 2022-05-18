const express = require('express');
const posts = require('../models/spaposts');
// const Ports = require('../models/posts');
const Orders = require('../models/spaorders');

const router = express.Router();

//save posts

router.post('/spapost/save',(req,res) =>{

    let newPost = new posts(req.body);
    newPost.save((err) =>{
        if(err){
            return res.status(400).json({

            });
        }
        return res.status(200).json({
            success:"Posts saved successfully"
        });
    });

});
//get posts
router.get('/spaposts',(req,res) =>{
    posts.find().exec((err,posts) =>{
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

// get a specific post

router.get("/spapost/:id",(req,res) =>{
    let postId = req.params.id;

    posts.findById(postId,(err,post) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            post
        });
    });
});


//update posts

router.put('/spapost/update/:id',(req,res) =>{
    posts.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated Succesfully"
            });
        }
    );
});

//delete post

router.delete('/spadelete/:id',(req,res) =>{
    posts.findByIdAndRemove(req.params.id).exec((err,deletedPost) =>{

        if(err) return res.status(400).json({
            message:"Delete Unsuccesful",err
        });
        return res.json({
            message:"Delete Succesfull",deletedPost
        });
    });
});
// save orders

router.post('/spaorder/save',(req,res) =>{
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

//  get orders

router.get('/spaorders',(req,res)=>{
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