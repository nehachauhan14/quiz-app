const ResourceController = require("../ResourceController");
const Category = require('../../models/category')

class CategoryController extends ResourceController {
    constructor(...args) {
        super(...args);
    }
          
}
var cc = new CategoryController(Category);
category = {
    create: (req, res) => {
    var categoryObj = {
	categoryName: req.body.categoryName,
	isTechnology: req.body.isTechnology
}
        cc.create(categoryObj).then((result) => {
            res.send(result);
        });
    },
    list: (req, res) => {
        cc.index().then((result) => {
            res.send(result.sort());
        });
    },
    show: (req, res) =>{
        cc.show(req.params._id).then((result)=>{
            res.send(result);
        });        
    },

update: (req, res) => {
   
        cc.update(req).then((result) => {
            res.send(result);
        });
    },
    delete: (req, res) =>{
        cc.delete(req.params._id).then((result)=>{
            res.send(result);
        });        	
    }

}

module.exports = category