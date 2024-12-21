
import express from 'express'
import {registerUser , loginUser , logoutUser , updatePassword , authMiddleware , allUsers , deleteUser} from '../controllers/auth.controllers.js'


const router = express.Router();


router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.put("/update", updatePassword);
router.delete("/delete-user/:id", deleteUser);
router.get("/check-auth", authMiddleware, (req, res) => {
  res.status(200).json({
    success: true,
    message: "Authenticated user!",
    
  });
});
router.get("/all-users",  allUsers);

export default router