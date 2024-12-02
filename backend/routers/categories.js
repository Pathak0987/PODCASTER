const router = require("express").Router();
const Cat = require("../models/category");

// Add-category
router.post("/add-category", async (req, res) => {
    
        const { categoryName } = req.body;

    

        // Create a new category
        const cat = new Cat({ categoryName });

        // Save the category to the database
        await cat.save();

        return res.status(200).json({ message: "Category added successfully!" });
  
});

module.exports = router;
