
import express from 'express'
import {registerUser , loginUser , logoutUser , authMiddleware , allUsers , deleteUser} from '../controllers/auth.controllers.js'


const router = express.Router();


router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/delete-user", deleteUser);
router.get("/check-auth", authMiddleware, (req, res) => {
  const user = req.user;
  res.status(200).json({
    success: true,
    message: "Authenticated user!",
    user,
  });
});
router.get("/all-users",  allUsers);

export default router