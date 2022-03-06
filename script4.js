function search3(num){
	let str=num.toString();
	if (str.indexOf('3')!==-1){
		return 'yes'
	}
	return 'no'
}
function search5(num){
	let str=num.toString();
	if (str.indexOf('5')==-1){
		return 'yes'
	}
	return 'no'
}
function searchAscending(num){
	let str=num.toString();
	for(let i=0;i<str.length-1;i++){
		if (str[i]>=str[i+1]){
			return 'no'
		}
	}
	return 'yes'
}
console.log(search3(1256))						//a
console.log(search5(34658))						//b
console.log(searchAscending(123459))			//c
