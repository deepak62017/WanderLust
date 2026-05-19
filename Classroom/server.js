const express= require("express");
const app= express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
const cookieParser = require("cookie-parser");
const session = require("express-session")

 app.use(cookieParser("mysecretkey"));

const sessionOptions ={
    secret:"mysupersecretstring",
    resave: false,
    saveUninitialized:true,
};

 app.use(session(sessionOptions));


app.get("/resister",(req,res)=>{
    let {name="anonymous"}= req.query;
    req.session.name = name;
    res.redirect("/hii");
});

app.get("/getcookies",(req,res)=>{
    res.cookie("great","namaste");
    res.send("sent you somecookies");
});

app.get("/getcookie",(req,res)=>{
    res.cookie("origin","india");
    res.send("sent you somecookies");
});


app.get("/",(req,res)=>{
  console.dir(req.cookies);
  res.send('hii');
})

app.get("/hii",(req,res)=>{
  res.send(`hello,${req.session.name}`);
}
)


app.get("/test",(req,res)=>{
    if(req.session.count){
        req.session.count++;
    }
    else{
        req.session.count = 1;
    }
    res.send(`you sent a request ${req.session.count} times`);
}); 

 app.get("/setcookies",(req,res)=>{
    // console.log(res);
    res.cookie("greet","namaste",{signed:true});
    res.cookie("origin","India",{signed:true});
    res.cookie("name",'Deepak',{signed:true});
    res.send("we send you cookies!")
 });


 app.get("/verify",(req,res)=>{
    let {name="anonymous"}= req.cookies;
    // res.send(`Hi,${name}`);
    console.log(req.signedCookies);
    res.send(req.signedCookies);
 });

  
app.use("/users",users);
app.use("/posts",posts);

app.listen(3000,()=>{
    console.log("server is listining to 3000");
})