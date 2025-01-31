// const express = require("express");
// const User = require("../models/user");
// const authMiddleware = require("../middleware/authMiddleware"); // Protect routes

// const router = express.Router();

// // Fetch logged-in user's data
// router.get("/dashboard", authMiddleware, async (req, res) => {
//     try {
//         const user = await User.findById(req.user.id).select("-password"); // Exclude password
//         if (!user) {
//             return res.status(404).json({ success: false, message: "User not found" });
//         }

//         res.json({ success: true, user });
//     } catch (error) {
//         res.status(500).json({ success: false, message: "Server error" });
//     }
// });

// module.exports = router;
