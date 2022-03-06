function search(num){
	let str=num.toString();
	for(let i=0;i<str.length-1;i++){
		if (str[i]>=str[i+1]){
			return 'no'
		}
	}
	return 'yes'
}
console.log(search(134679))