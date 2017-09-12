var mongoose    =   require("mongoose");
mongoose.connect('mongodb://localhost:27017/demoDb');
var mongoSchema =   mongoose.Schema;
var itemSchema  = {
    "itemName" : String
};
module.exports = mongoose.model('itemLogin', itemSchema);