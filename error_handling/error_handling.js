// error handling
try
{
	throw "Throwing errors on purpose";
}
catch(ex)
{
	console.log(ex)
}


// lets cause an error and log it to the console
try
{
	var result = Sum(10, 20); // Sum is not defined yet
}
catch(ex)
{
	var errors = document.getElementById("errorMessage");
	errors.innerHTML = ex

};


// use object for more info about an error
try {
	throw {
		number: 101,
		message: "Error. Your computer will self-destruct in 10 seconds"
	};
}
catch(ex) {
	var err_number = document.getElementById("err_number")
	err_number.innerHTML = (ex.number + " " + ex.message);
}



