const os = require("os");
const getContainerId = () => os.hostname();

module.exports = { getContainerId };