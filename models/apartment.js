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
  // might make amenities a subSchemai
});

const Apartments = mongoose.model("Apartment", apartmentSchema);
module.exports = Apartments;
