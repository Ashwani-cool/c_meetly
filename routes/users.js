var express = require('express');
var router = express.Router();

const User = require('../api/users');
const user = new User();




/* GET home page. */
router.get('/user/login',  function(req, res, next) {
  user.find(result=>{
    if(result.length){
      res.redirect('/')
    }
    else{
      res.render('login')
    }
  })
  
});

router.post('/user/login', (req, res, next) => {
  var r = req.body;
  var username = r.uname;
  var password = r.psw;
  var temp = {
    uname: username,
    pwd: password
  }
  user.login(temp, result=>{
    if(result == 1){
      console.log('logged in')
      res.redirect('/')
    }
    else{
      res.redirect('/user/login')
    }
  })
  

});

router.get('/users/signup', function(req, res, next){
  user.find(result=>{
    if(result.length){
      res.redirect('/')
    }
    else{
      res.render('signup')
    }
  })
  
})

router.post('/users/signup', (req, res, next) => {
  var r = req.body;
  var username = r.uname;
  var password = r.psw;
  var cpassword = r.cpsw;
  if(password === cpassword){
    
    var temp = {
      uname: username,
      pwd: password
    }
    user.signup(temp, result=>{
      if(result == 1){
        res.redirect('/')
      }
      else{
        res.redirect('/users/signup')
      }
    })

  }
  else{
    console.log('Password doesn\'t match')
    req.session.userdata = ''
    res.redirect('users/signup')
  }

});


module.exports = router;
