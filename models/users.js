const mongoose = require("mongoose");
const user = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  course: {
    type: String,
  },
  remarks: {
    type: String,
    required: true,
  },
});

const schema = mongoose.model("Users", user);
exports.Users = schema;
