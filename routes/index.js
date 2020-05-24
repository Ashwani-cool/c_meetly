var express = require('express');
var router = express.Router();

const User = require('../api/users');
const user = new User();


// Data

var data = [
  {
    date: 1,
    name: 'Kartik Tyagi',
    email: 'kajdh@gah.com',
    time: '9AM - 10PM',
    description: 'BLah...Blah..ggfuhjkl.Blah...'
  },
  {
    date: 2,
    name: 'Ashwani',
    email: 'Ashwani@gmail.com',
    time: '9AM - 1PM',
    description: 'Testing...'
  }
]


/* GET home page. */
router.get('/',  function(req, res, next) {
  user.find(result=>{
    if(result.length){
      var booked = []
      for(var i=0; i<data.length; i++){
        booked[i] = data[i].date
      }
        res.render('index', {
          d: '',
          date: '',
          bs: booked, //booked slot
          page: 'homepage'
      })
    }
    else{
      res.redirect('/user/login')
    }
  })
});

router.post('/', function(req, res, next){
  var r = req.body;
  var temp = {
    date: r.date,
    name: r.yourname,
    email: r.youremail,
    time: r.starttime,
    description: r.reason
  }
  data.push(temp)
  var booked = []
for(var i=0; i<data.length; i++){
  booked[i] = data[i].date
}
  res.render('index',{
    d: data,
    date: '',
    bs: booked, //booked slot
    page: 'homepage'
  })
})

router.get('/:date', function(req, res){
  user.find(result=>{
    if(result.length){
      var date = req.params.date;
      var temp_ar = []
      var j = 0
      for(var i=0; i<data.length; i++){
        if(data[i].date == date){
          temp_ar[j]=data[i]
          j++
        }
      }
      var booked = []
      for(var i=0; i<data.length; i++){
        booked[i] = data[i].date
      }
      res.render('index',{
        d: temp_ar,
        date: date,
        bs: booked, //booked slot
        page: 'homepage'
      })
    }
    else{
      res.redirect('/user/login')
    }
  })
  
})






module.exports = router;
