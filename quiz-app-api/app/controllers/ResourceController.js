class ResourceController {

  constructor(model) {
    this.Model = model;
  };

  create(data) {
    return new Promise((resolve, reject) => {
      var model = new this.Model(data);
      model.save((err, response) => {
        if (err) {
          reject(err);
        }
        resolve(response);
      });
    })
      .catch((e) => {
        console.log(e)
      })
  };

  index() {
    return new Promise((resolve, reject) => {
      var model = this.Model
      model.find({}, (err, response) => {
        if (err) {
          reject(err);
        }
        resolve(response);
      })
    })
      .catch((e) => { })
  };

  list(req, res) {
    return new Promise((resolve, reject) => {
      var model = this.Model
      model.find({}, (err, response) => {
        if (err) {
          reject(err);
        }
        resolve(response);
      })
    })
      .then((result) => {
        console.log(result)
        res.send(result);
      })
      .catch((e) => { })
  };

  show(id) {
    return new Promise((resolve, reject) => {
      var model = this.Model
      model.find({
        "_id": id
      }, (err, response) => {
        if (err) {
          reject(err);
        }
        resolve(response);
      })
    });
  };

  update(req) {
    return new Promise((resolve, reject) => {
      var model = this.model
      model.update({ _id: req.params.id }, req.body, (err, response) => {
        if (err) {
          reject(err)
        }

        resolve(response);
      })
    })
    console.log("this is the value of this" + this)
    console.log('update called');
    //res.send('update called from resource controller')
  }

  delete(id) {
    return new Promise((resolve, reject) => {
      var model = this.model
      model.remove({ _id: id }, (err, response) => {
        if (err) {
          reject(err)
        }
        resolve(response);
      })
    })
  };
};


module.exports = ResourceController;
