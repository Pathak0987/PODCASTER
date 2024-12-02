const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.cookies.podcastUserToken; // Retrieve the token from cookies

        if (!token) {
            return res.status(401).json({ message: "No token provided. Unauthorized access." });
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Find the user using the decoded token's ID
        const user = await User.findById(decoded.id);

        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }

        // Attach user to the request object for later use
        req.user = user;

        // Move to the next middleware or route
        next();
    }  catch (error) {
        console.error("Error in authMiddleware:", error);
        res.status(500).json({ message: "Invalid Token", error });
    }
};

module.exports = authMiddleware;
