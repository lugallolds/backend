const Router = require('express').Router();
const HistorialController = require('../controllers/historial');

Router.get("/", HistorialController.getHistorial); 
Router.get("/empresa", HistorialController.getPacienteConsultaEmpresa); 
Router.post("/create", HistorialController.createHistorial);
Router.put("/", HistorialController.updateHistorial);

module.exports = Router;