var reply = require('./../');

reply.confirm('Do you agree to the terms and conditions?', function(err, yes){

  if (!err && yes)
    reply.confirm('Are you 18 years old or older?', function(err, yes){
      if (!err && yes)
        console.log("You can download the program.");
      else
        console.log("You cannot download the program.");
    });  
  else
    console.log("You cannot download the program.");

});
