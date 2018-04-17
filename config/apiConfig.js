const Mock=require("mockjs");
// import axios from 'axios';
const Login=require("../api/login");
module.exports=(app)=>{
  app.post("/news/data",function(req,res){
    res.json(Mock.mock(Login))
  })
}
