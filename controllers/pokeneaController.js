const pokeneas = require('../config/database');
const { getContainerId } = require('../utils/containerInfo');
const { generatePokeneaPhilosophy } = require('../views/templates/pokeneaCard');

const getRandomPokenea = () => {
  const number = Math.floor(Math.random() * pokeneas.length);
  return pokeneas[number];
};

const getPokeneaInfo = (req, res) => {
  const selectedPokenea = getRandomPokenea();
  const containerId = getContainerId();
 
  res.json({
    id: selectedPokenea.id,
    nombre: selectedPokenea.nombre,
    altura: selectedPokenea.altura,
    habilidad: selectedPokenea.habilidad,
    containerId: containerId
  });
};

const getPokeneaPhilosophy = (req, res) => {
  const selectedPokenea = getRandomPokenea();
  const containerId = getContainerId();
  const html = generatePokeneaPhilosophy(selectedPokenea, containerId);
  res.send(html);
};

module.exports = {
  getPokeneaInfo,
  getPokeneaPhilosophy
};