const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const apartmentSchema = new Schema({
  image: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  bedrooms: {
    type: Number,
    required: true,
  },
  rentPrice: {
    type: String,
    required: true,
  },
  landlord: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  // might make amenities a subSchema
});

const Apartments = mongoose.model("Apartment", apartmentSchema);
module.exports = Apartments;

/* the next thing to do is this:
  - try and make everyone able to see but only post if signed in
  - start with react and jump straight to redux
  - link backend and frontend together
  - deploy on heroku and github pages
*/