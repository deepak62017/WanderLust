const mongoose= require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title:{
        type:String,
        required: true,
    },
    description:{
      type: String,

    },
    image:{
        type: String,
        filename:String,
        default:"https://images.unsplash.com/photo-1742647230923-292e4e1e10c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D",
        set:(v)=> v===""? "https://images.unsplash.com/photo-1742647230923-292e4e1e10c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D":v,
    },
    price:{
        type:Number,
    },
    location:{
        type:String,
    },
    country:{
        type:String,
    },
    reviews:[
        {
            type:Schema.Types.ObjectId,
            ref:"review",
        }
    ],
    owner :[
        {
         type: Schema.Types.ObjectId,
         ref:"User",
        }
    ]
});

const listing = mongoose.model("listing",listingSchema);

module.exports= listing;
