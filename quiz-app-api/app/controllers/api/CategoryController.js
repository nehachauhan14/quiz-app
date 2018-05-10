const ResourceController = require("../ResourceController");
const { Category } = require('../../models')

class CategoryController extends ResourceController {
    constructor(...args) {
        super(...args);
    }

}
var cc = new CategoryController(Category);
category = {
    create: (req, res) => {
        try {
            if (req.body.categoryName == "") {
                throw "Category Name is blank"
            }
        } catch (ex) {
            res.status(400).json(ex);
        }
        var categoryObj = {
            categoryName: req.body.categoryName,
            isTechnology: req.body.isTechnology
        }
        cc.create(categoryObj).then((result) => {
            res.status(200).json(result);
            //res.send(result);
        });



    },
    list: (req, res) => {
        cc.index().then((result) => {
            result.sort(function(a, b) { return a.categoryName.localeCompare(b.categoryName); });
            res.status(200).json(result);

        });
    },
    show: (req, res) => {
        //Error handling not needed in this case but still adding.
        try {
            if (req.params._id == "") {
                throw "Category Id is blank"
            }
        } catch (ex) {
            res.status(400).json(ex);
        }
        cc.show(req.params._id).then((result) => {
            res.status(200).json(result);
        });


    },

    update: (req, res) => {

        var categoryObj = {
            categoryName: req.body.categoryName,
            isTechnology: req.body.isTechnology
        }
        cc.update(categoryObj, req.params._id).then((result) => {
            res.status(200).json(result);
        });
    },
    delete: (req, res) => {
        try {
            if (req.params._id == "") {
                throw "Category Id is blank"
            }
        } catch (ex) {
            res.status(400).json(ex);
        }
        cc.delete(req.params._id).then((result) => {
            res.status(200).json(result);
        });
    }

}

module.exports = category
