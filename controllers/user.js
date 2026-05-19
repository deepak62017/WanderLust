
module.exports.renderSignupForm = (req,res)=>{
    // console.log("hiiiii");
    res.render("users/signup.ejs");
};

module.exports.signup =(async (req,res)=>{
    // console.log('BODY TYPE',typeof req.body);
    // console.log('BODY',req.body);
    try{
        let {username, email, password} = req.body;
    const newUser = new User({username,email});
    const resisteredUser = await User.register(newUser,password);
    req.login(resisteredUser,(err)=>{
        if(err){
            return next(err);
        }
         req.flash("success","welcome to wanderlust!");
        res.redirect("/listings");
   
    })
    // console.log(resisteredUser);
   
} catch(e){
    req.flash("error", e.message);
    res.redirect("/signup");
}
    
});


module.exports.renderLoginForm = (req,res)=>{
    res.render("users/login.ejs");
};


module.exports.logout = (req,res)=>{
    req.logout(function(err){
        if(err){
         return next(err);
        }
        req.flash("success","you are logged out!");
        req.session.destroy(()=>{
            res.redirect("/login");
        })
    })
};
