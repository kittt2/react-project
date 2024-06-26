import express from "express";
import {registerController,loginController,testController,forgotPasswordController,updateProfileController,getAllOrdersController,getOrdersController, getallusers,orderStatusController} from "../controllers/authController.js";
import { requireSignIn,isAdmin } from "../middlewares/authMiddleware.js";
// authRoute.js

  


//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register", registerController);

// LOGIN || POST
router.post("/login", loginController);

// //test routes
router.get("/test", requireSignIn, isAdmin, testController);

router.get("/user-auth", requireSignIn, (req, res) => {
    res.status(200).send({ ok: true });
  });
  //protected Admin route auth
  router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
    res.status(200).send({ ok: true });
  });


router.post("/forgot-password", forgotPasswordController);





// update profile
router.put("/profile", requireSignIn, updateProfileController);

//orders
router.get("/orders", requireSignIn, getOrdersController);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);
router.get("/all-users", requireSignIn, isAdmin, getallusers);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);

export default router;
