var num = prompt("insert a number : ");

function pushZero (num){
	var array = num.split("");
	var nonZero = [];
	var zeros = [];

	for(var i = 0; i < array.length; i++){
		if (array[i] == 0){
			zeros.push(array[i]);
			
	} else {
		nonZero.push(array[i]);
		}
	}

	return nonZero.join("") + zeros.join("");
}

alert(pushZero(num));