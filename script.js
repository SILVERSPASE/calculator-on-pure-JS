var keys = document.querySelectorAll('#calculator span');
var operators = ['+','-','x','/'];
var decimalAdded = false;

for (var i = 0; i < keys.length; i++){
	keys[i].onclick = function(e){
		var input = document.querySelector('.screen');
		var inputVal = input.innerHTML;
		var btnVal = this.innerHTML;

		//clear all
		if(btnVal == 'C'){
			btnVal = '';
			input.innerHTML = '';
		}

		// getting string of symbols
		if(btnVal == '='){
			var equation = inputVal;
			equation = equation.replace(/x/g,'*');
		}

		// getting numbers and decimals
		else {
			input.innerHTML += btnVal;
		}

		if (equation){
			input.innerHTML = eval(equation);
			// decimalAdded = false;
		}

		else if(operators.indexOf(btnVal) > -1){ 
			var lastChar = inputVal[inputVal.length - 1];

			// if(inputVal != '' && operators.indexOf(lastChar) == -1){	
			// 	input.innerHTML += btnVal;
			// }

			// else if(inputVal == '' && btnVal == '-'){
			// 	input.innerHTML += btnVal; 
			// }

			if(operators.indexOf(lastChar) > -1 && inputVal.length > 0){
				input.innerHTML = inputVal.replace(/.$/, btnVal);
			}

			// decimalAdded = false;
		}

		else if(btnVal == '.'){
			console.log(decimalAdded);
			if(!decimalAdded){
				input.innerHTML += btnVal;
				decimalAdded = true;
				console.log(decimalAdded);
			}
		}
	}
}