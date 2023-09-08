function firstNonRepeatedChar(str) {
 // Write your code here
let c=0;
let ch='';
for(int i=0;i<str.length()-1;i++){
	let ct=0;
	for(int j=i+1;j<str.length();j++){
		if(str.charAt(i)==str.charAt(j)){
			ct++;
			continue;
		}
		if(ct==0){
			c++;
			ch=str.charAt(i);
		}
		i=j;
		
	}
}
if(c==1){
	console.log(ch);
}
else{
	console.log("null");
}
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
