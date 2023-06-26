const uuid = require('uuid');
const mongoose = require("mongoose");

const frequestSchema = new mongoose.Schema({
  id:{
    type: String,
    default: uuid.v4,
    unique: true,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
    required: true,
  },
});

const Frequest = mongoose.model("Frequest",frequestSchema);

module.exports = Frequest;