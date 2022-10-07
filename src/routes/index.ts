import { Router } from "express";
import messages from "../constants/messages";
import authRouter from "./auth.route";

const router = Router();
const routes = [
  {
    path: "/auth",
    route: authRouter
  },
];




// *Route to ensure that server is currently running
router.get("/", (req, res) => {
  res.send({
    success: true,
    message: messages["welcomeMessage"],
    data: [],
  });
});

// *Instantiate all the routes
routes.forEach((route) => {
  router.use("/auth", route.route());
});



export default router;
