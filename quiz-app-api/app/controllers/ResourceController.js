class ResourceController {

  constructor(model) {
    this.Model = model;
  }

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
      });
  }

  index(queryString) {
    return new Promise((resolve, reject) => {
      var model = this.Model;
      model.find({}, "", {
        "skip": ((queryString.perPage * queryString.page) - queryString.limit),
        "limit": (queryString.limit || 10)
      },
        (err, response) => {
          if (err) {
            reject(err);
          }
          if (response.length === 0) {
            resolve({"message": "Questions Finished!", "response": response});
          }
          resolve({
            "page": (queryString.page || 1),
            "perPage": (queryString.perPage || 10),
            "limit": (queryString.limit || 10),
            "response": response
          });
        });
    })
      .catch((e) => { })
  }

  list(req, res) {
    return new Promise((resolve, reject) => {
      var model = this.Model;
      model.find({}, (err, response) => {
        if (err) {
          reject(err);
        }
        resolve(response);
      });
    })
      .then((result) => {
        console.log(result)
        res.send(result);
      })
      .catch((e) => { });
  }

  show(id) {
    return new Promise((resolve, reject) => {
      var model = this.Model;
      model.find({
        "_id": id
      }, (err, response) => {
        if (err) {
          reject(err);
        }
        resolve(response);
      });
    });
  }

  update(body) {
    /* console.log(`this is the value of this ${Object.getOwnPropertyNames(this)}`);
    console.log("this is the value of this" + this);
    console.log("update called"); */

    return new Promise((resolve, reject) => {
      var model = this.Model;
      model.update({ "_id": body.id }, body, (err, response) => {
        if (err) {
          reject(err);
        }

        resolve(response);
      });
    });

    // res.send("update called from resource controller")
  }

  delete(id) {
    /* console.log(`this is the value of this ${Object.getOwnPropertyNames(this)}`);
    console.log("this is the value of this" + this);
    console.log("update called"); */

    return new Promise((resolve, reject) => {
      var model = this.Model;
      model.remove({ "_id": id }, (err, response) => {
        if (err) {
          reject(err);
        }
        resolve(response);
      });
    });
  }
}


module.exports = ResourceController;
