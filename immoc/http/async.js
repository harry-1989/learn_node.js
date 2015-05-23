var c = 0;

function printIt(c) {
	console.log(c);
}

function plus(callback) {
	setTimeout(function() {
		c += 1;
		callback(c);
	}, 1000)
	//c += 1; 
}

plus(printIt);

//printIt();