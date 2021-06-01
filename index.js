const ChangeTypes = require('./lib/ChangeTypes');
const factor = require('./lib/factor');
const simplifyExpression = require('./lib/simplifyExpression');
const solveEquation = require('./lib/solveEquation');
const express = require("express")

const app = express()


module.exports = {
  factor,
  simplifyExpression,
  solveEquation,
  ChangeTypes,
};

app.get("/", (req, res)=>{
  res.send('Welcome to Veda Math Solver')
})


app.get("/solveEquation/:expr", (req,res)=>{
  var list=[]
  var expr = req.params.expr;
  const steps = solveEquation(expr);
  steps.forEach(step => {
    list.push("before change: " + step.oldEquation.ascii());
    list.push("change: " + step.changeType);
    list.push("after change: " + step.newEquation.ascii());
    list.push("No. of substeps: " + step.substeps.length);
    list.push("\n "); 
});
res.send(list)
});
app.get("/simplifyExpression/:expr", (req,res)=>{
  var list=[]
  var expr = req.params.expr;
  const steps = simplifyExpression(expr);
  steps.forEach(step => {
    list.push("before change: " + step.oldNode.toString());
    list.push("change: " + step.changeType);
    list.push("after change: " + step.newNode.toString());
    list.push("No. of substeps: " + step.substeps.length);
    list.push("\n "); 
});
res.send(list)
});
//console.log(list);

/*
const steps = solveEquation('2x + 3x = 35');
//console.log(steps);
steps.forEach(step => {
    list.push("before change: " + step.oldEquation.ascii());
    list.push("change: " + step.changeType);
    list.push("after change: " + step.newEquation.ascii());
    list.push("# of substeps: " + step.substeps.length);
    list.push("\n ");
*/
    /*
    console.log("before change: " + step.oldEquation.ascii());  // e.g. before change: 2x + 3x = 35
    console.log("change: " + step.changeType);                  // e.g. change: SIMPLIFY_LEFT_SIDE
    console.log("after change: " + step.newEquation.ascii());   // e.g. after change: 5x = 35
    console.log("# of substeps: " + step.substeps.length);      // e.g. # of substeps: 2
    */


app.listen(process.env.PORT || 5000, ()=>{
  console.log("NodeJS server is listening on the port 80 - Welcome to Veda")
})
