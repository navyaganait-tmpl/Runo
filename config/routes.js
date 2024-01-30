const topicRouter=require("../routes/topic");
const categoryRouter=require("../routes/category");
const authorRouter=require("../routes/author");

module.exports=function(app){
console.log("in rotes");
app.use('/',topicRouter);
app.use('/',categoryRouter);
app.use('/',authorRouter);
}