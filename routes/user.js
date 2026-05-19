const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const session = require("express-session");
const flash = require("connect-flash");
const { saveUrl } = require("../middleware.js");

const userController = require("../controllers/user.js")

const sessionOptions = {
    secret: "nothing",
    resave: false,
    saveUninitialized: true,
};

router.use(session(sessionOptions));
router.use(flash());




router.get("/signup",userController.renderSignupForm);


router.post("/signup",wrapAsync( userController.signup));

router.get("/login",userController.renderLoginForm);


router.post(
    "/login",saveUrl,
        passport.authenticate("local", {
        failureRedirect: "/login",
        failureFlash:true,
    }),
    async(req ,res)=>{
        console.log(req.body);
        req.flash("success","welcome to wanderlust! you are logged in!");
        let redirecturl = res.locals.redirectUrl || "/listings";
        res.redirect(redirecturl);
    }
);

router.get("/logout",userController.logout);
module.exports = router;