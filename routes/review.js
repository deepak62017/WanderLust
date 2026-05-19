const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const review = require("../models/review.js");
const listing = require("../models/listing.js");
const {validateReview} = require ("../middleware.js")

//Reviews
//post Route
router.post("/", validateReview, wrapAsync(async (req, res) => {
    let Listing = await listing.findById(req.params.id);
    let newReview = new review(req.body.review);
    Listing.reviews.push(newReview);

    await newReview.save();
    await Listing.save();
     req.flash("success","new review created!");
    //    res.send("successfull");
    res.redirect(`/listings/${Listing.id}`);
}));


router.delete("/:reviewId",async(req, res) => {
        console.log("hlo");
    let { id, reviewId } = req.params;
    await listing.findByIdAndUpdate(id, { $pull: {reviews:reviewId } });
     await review.findByIdAndDelete(reviewId);
      req.flash("success","review Deleted!");
    // res.send("successful")
     res.redirect(`/listings/${id}`);
});

module.exports = router;
