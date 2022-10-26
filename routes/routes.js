const route = require("express").Router();
const animeController = require('../controllers/animeController');
const requestController = require('../controllers/requestController');

route.get('/order/:title', animeController.getOrder);
route.post('/add', animeController.addOrder);
route.post('/request/:title', requestController.addRequest);
route.get('/all_requests', requestController.getRequests);
route.get('/requests/:status', requestController.getRequestByStatus);

module.exports = route;