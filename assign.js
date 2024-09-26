
function getalert(){
	

	const uname = document.getElementById('uname').value;
	const pass = document.getElementById('pwd').value;

	alert(uname.length<5?"User name should be minimum of length 5":(pass.length<9)?"password length should greater than 9":`Login sucessful ,Welcome : ${uname}`);

	
}
