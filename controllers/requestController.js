const Request = require("../models/requestModel");
const requestController = {};

requestController.addRequest = async (req, res) => {
  const title = req.params.title;
  Request.find({ title }).then((anime) => {
    if (anime) {
      res.status(400).json({
        msg: "Anime is already requested please wait till it's resolved!!",
      });
    } else {
      const newRequest = new Request({ title });
      newRequest
        .save()
        .then((reqs) => {
          res.status(200).json({ msg: "Request successfully added" });
        })
        .catch((err) => res.json(err));
    }
  });
};

requestController.getRequests = async (req, res) => {
  Request.find({})
    .then((reqs) => res.json(reqs))
    .catch((err) => res.json(err));
};

requestController.getRequestByStatus = async (req, res) => {
  const status = req.params.status;
  Request.find({ status })
    .then((reqs) => res.json(reqs))
    .catch((err) => res.json(err));
};

module.exports = requestController;