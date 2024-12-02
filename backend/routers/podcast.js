const authMiddleware = require("../middleware/authMiddleware");
const upload = require("../middleware/multer");
const category=require("../models/category");
const podcast = require("../models/podcast");
const Podcast=require("../models/podcast");
const User = require("../models/User");
const router=require("express").Router();

//add-podcast
router.post("/add-podcast",authMiddleware,upload, async (req, res) => {
    try{
        const {title,description,category}=req.body;
    const frontImage=req.files["frontImage"][0].path;
    const audioFile=req.files["audioFile"][0].path;
    if(!title|| !description || !category|| !frontImage || !audioFile){
        return res.status(400).json({message:"Please fill all the fields"});

    }
    const {user}=req;
    const cat =await category.findOne({categoryName:category});
    if(!cat){
        return res.status(400).json({message:"Category not found"});
    }
    const catid =cat._id;
    const userid =user._id;
    const newpodcast = new Podcast({
        title:title,
        description:description,
        category:catid,
        frontImage:frontImage,
        audioFile:audioFile,
        userid:userid
    });
    await newpodcast.save();
    await Category.findByIDAndUpdate(
        catid,
        {
            $push :{podcast: newpodcast._id},
        }
    );
    await User.findOne.findByIDAndUpdate(
        userid,
        { $push:{podcasts:newpodcast._id}}
    );
    res.status(201).json({message:"Podcast added successfully"});
    
    }catch(error){
        res.status(500).json({ msg: "failed to add podcast", error });
    }
});

//get all poscast
router.get("/all-podcasts", async (req, res) => {
    try{
        const podcast = await Podcast.find().populate("category")
        .sort({createArt: -1});
        return res.status(200).json( podcasts);
        }catch(error){
          return  res.status(500).json({ msg: "internal servrefaile to get podcast", error });
            }
        });
     
 //  gate -user podcasts
 router.get("/get-user-podcasts", authMiddleware, async (req, res) => {
    try {
        const { user } = req;

        // Fetch user ID from the auth middleware
        const userId = user._id;

        // Find the user and populate the "podcasts" and "category" fields
        const data = await User.findById(userId)
            .populate({
                path: "podcasts",
                populate: { path: "category" }, // Populate category field within podcasts
            })
            .select("-password"); // Exclude password field from the result

        // If data exists and contains podcasts, sort by creation date
        if (data && data.podcasts) {
            data.podcasts.sort(
                (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
            );
        }

        // Respond with the user's podcasts
        return res.status(200).json({ data: data.podcasts });
    } catch (error) {
        console.error("Error in /get-user-podcasts route:", error);
        return res.status(500).json({ message: "Internal server error", error });
    }
});
           //get podcast by id
           router.get("/get-podcast/:id", async (req, res) => {
            try {
                const { id } = req.params;
                const podcast = await Podcast.findById(id).populate("category");
                return res.status(200).json({ data: data.podcasts });
            }catch (error) {
                
                return res.status(500).json({ message: "Internal server error", error });
            }
        });

     //get podcast by categories 
     router.get("/category/:cat", async (req, res) => {
        try {
            const { cat } = req.params;
    
            // Find categories that match the categoryName
            const categories = await Category.find({ categoryName: cat }).populate({
                path: "podcasts", // Populate the "podcasts" field
                populate: { path: "category" }, // Populate the "category" field within podcasts
            });
    
            // Gather all podcasts from the matching categories
            let podcasts = [];
            categories.forEach((category) => {
                podcasts = [...podcasts, ...category.podcasts];
            });
    
            // Return the podcasts in the response
            return res.status(200).json({ data: podcasts });
        } catch (error) {
            console.error("Error in /category/:cat route:", error);
            return res.status(500).json({ message: "Internal server error", error });
        }
    });
    

module.exports=router;