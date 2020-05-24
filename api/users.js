
function User() {};

var users = [
    {
      uname: 'guest',
      pwd: 'password'
    },
    {
      uname: 't',
      pwd: 't'
    }
  ]

  var sessionuser = []

User.prototype = {
    
    login : function(user, callback)
    {
        for(var i=0; i<users.length; i++){
            if(user.uname == users[i].uname && user.pwd == users[i].pwd){
                sessionuser.push(user)
                callback (1)
            }
        }
    },
    signup: function(data, callback)
    {
        users.push(data)
        sessionuser.push(data)
        callback (1)
    },
    find: function(callback)
    {
        callback (sessionuser)
    }

}


module.exports = User;