var mongoose = require("mongoose");

var courseSchema = mongoose.Schema({
    // กำหนด ชื่อและชนิดของ document เรา
    name: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    }
}, {
    collection: "COURSES"
});

// Default
var Course = mongoose.model("courses", courseSchema);
module.exports = Course;