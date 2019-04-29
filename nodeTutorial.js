var Tutor = require('./tutorial.js');
exports.Nodetutorial = function()
{
  console.log("Node Tutorial")
  this.pTutor = function()
  {
    var pTutor=Tutor;
    pTutor.tutorial();
  }
}
