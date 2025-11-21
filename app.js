const express = require("express");
const app = express();
const methodOverrid = require("method-override");
const mongoose = require("mongoose");
const path = require("path");
const ejsMate = require('ejs-mate');
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const flash = require("connect-flash");
 const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("./models/user.js");
const review = require("./models/review.js");
const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");
//  console.log("User.authenticate type:", typeof User.authenticate);




const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverrid("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "/public")));



main().then(() => {
    console.log("connected to DB");
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}



const sessionOptions = {
    secret: "nothing",
    resave:false,
    saveUninitialized: true,
    cookies: {
        expires: Date.now() + 7*24*60*60*1000,
        maxAge: 7*24*60*60*1000,
        httpOnly:true,
    },
};


app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
//  app.use(passport.session);



 passport.use(new LocalStrategy({usernameField:"email"},User.authenticate())); passport.serializeUser(User.serializeUser());
 passport.deserializeUser(User.deserializeUser());




app.use((req,res,next)=>{
    res.locals.success = req.flash("success");
     res.locals.error = req.flash("error");
    next();
});
 
app.get("/demousers",async (req, res)=>{
    let fakeUsers = new User({
        username:"deehgjhjpakse-dskfstudentwe",
        email:"dedjhgdepak3454@gmail.com",
    });
    let resisteredUsers = await User.register(fakeUsers,"helloworlds");
    res.send(resisteredUsers);
});

  app.use("/",userRouter);
 app.use("/listings", listingRouter);
 app.use("/listings/:id/reviews", reviewRouter);


app.get("/", (req, res) => {
    console.log("hii, i am root");
    res.send("hii, I am root");
});

app.all(/.*/, (req, res, next) => {// regex=>(/.*/ ) use instead of *;
    next(new ExpressError(404, "Page not found!"));
});

//custom => error handler
app.use((Error, req, res, next) => {
    let { statusCode = 500, message = "something is wrong" } = Error;
    res.status(statusCode).render("Error.ejs", { message });
    // res.status(statusCode).send(message);
});

app.listen(8080, () => {
    console.log('server is listening to port 8080');
});