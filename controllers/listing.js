const listing = require("../models/listing.js")


module.exports.index = (async (req, res) => {
    const allListings = await listing.find({});
    res.render("listings/index.ejs", { allListings });

});

module.exports.NewListingForm=(async (req, res) => {
    res.render("listings/new.ejs");
});

module.exports.ShowListing=(async (req,res) => {
    //  console.log("hii");
    let { id } = req.params;
    // console.log("hii");

    const listings = await listing.findById(id).
    populate("reviews").populate("owner");
    
    if(!listings){
        req.flash("error", "Listing you try to access for does not exist!");
      return res.redirect("/listings");// use return or else to protect  next line execution
    }
    console.log(listings);
    res.render("listings/show.ejs", { listings });
});

module.exports.PostNewListing = (async (req, res,
    ) => {
    let result = listingSchema.validate(req.body);
    console.log(result);
    if (result.error) {
        throw new ExpressError(400, result.error)
    }
    //  let {title, description, image, price, place, country} = 
    // req.body;
    const newListing = new listing(req.body.listing);
    newListing.owner =req.user._id;
    await newListing.save();
    req.flash("success","new listing created");
    console.log("hii");
   return  res.redirect("/listings");

});

module.exports.editLisingForm = (async (req, res) => {
    let { id } = req.params;
    let listings = await listing.findById(id);
    res.render("listings/edit.ejs", { listings });
});

module.exports.updateListing = (async (req, 
res) => {
    let { id } = req.params;
    await listing.findByIdAndUpdate(id, { ...req.body.listing });
     req.flash("success"," listing updated");
    res.redirect("/listings");
});

module.exports.destroyListing = (async (req, res) => {
    let { id } = req.params;
    await listing.findByIdAndDelete(id);
     req.flash("success"," listing Deleted successfully");
    res.redirect("/listings");
});
