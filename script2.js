let num1=246;
let str=num1.toString();
let num2=Number(str[str.length-1]+str.slice(1,str.length-1)+str[0]);
console.log(num2);