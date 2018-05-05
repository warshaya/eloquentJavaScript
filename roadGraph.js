
const { roads } = require('./roads.js');
const { buildGraph } = require('./buildGraph.js');

const roadGraph = buildGraph(roads);

module.exports = { roadGraph };

