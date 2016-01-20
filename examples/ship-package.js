var reply = require('./..');
var options = {
	First_Name: {
		message: "Enter your first name",
		allow_empty: false
	},
	Last_Name: {
		message: "Enter your last name",
		allow_empty: false
	},
	Email: {
		message: "Enter your email",
		allow_empty: false
	},
	Street_Address: {
		message: "Enter your street address",
		allow_empty: false
	},
	City: {
		message: "Enter your city",
		allow_empty: false
	},
	State: {
		message: "Enter your state",
		allow_empty: false
	},
	Zipcode: {
		message: "Enter your zipcode",
		allow_empty: false,
		type: 'number'
	}
}

var cancel_shipment = function(){
	console.log("Ok, maybe next time.");
}

var get_shipment = function(){

	reply.confirm('Would you like to ship a package?', function(err, yes){

	  if (!err && yes)
	    console.log("Please allow us to collect your shipment information.");
	  else
	    return console.log("Ok, maybe next time.");

		reply.get(options, function(err, answers){

			if (err) return cancel_shipment();
				console.log(answers.First_Name + " " + answers.Last_Name);
	  			console.log(answers.Street_Address);
	  			console.log(answers.City + ", " + answers.State + " " + answers.Zipcode);;

			reply.confirm('Is this the correct address?', function(err, yes){

					if (err || !yes)
						get_shipment();
					else
						console.log("We will ship to this address.")

			})
		})
	});	
}

get_shipment();


