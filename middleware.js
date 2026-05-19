const listing = require ("./models/listing.js");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema , reviewSchema} = require("./schema.js");

module.exports.isLoggedIn =(req,res,next)=>{
    if(!req.isAuthenticated()){
         console.log(req.path, ".." , req.originalUrl);
        req.session.redirecturl = req.originalUrl;
        req.flash("error","you must be logged in to create listings");
        return res.redirect("/login");
    }
    next();

}

module.exports.saveUrl = (req, res, next)=>{
    if(req.session.redirecturl){
        res.locals.redirectUrl = req.session.redirecturl;
    }
    next();
};


module.exports.isOwner = async(req,res, next)=>{
    const {id} = req.params;
    const Listing  = await listing.findById(id).populate("owner");
   if(!Listing.owner_id.equals(res.locals.currUser._id)){
      res.flash("error","you are not the owner of this listing");
      return res.redirect(`/listings/${id}`);
   }
   next();
}


module.exports.validateListing = (req, res, next) => {
    let { error } = listingSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();   
    }
};

module.exports.validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.
        body);
    if (error) {
        let errMsg = error.details.map((el) => el.
            message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }};