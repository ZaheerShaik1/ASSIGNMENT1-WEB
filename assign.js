// <button onclick="getResult()"> Get Results</button>
//defining a function for finding a student grade
function getalert(){
	

	const uname = document.getElementById('uname').value;
	const pass = document.getElementById('pwd').value;

	if(uname==null ){
		alert("User name should not be empty");
	}
	else if(pass==null || pass.length < 6){
		alert("Password required");
	}
	else{
		alert("Login sucessful");
		alert(`username : ${uname}`);

	}
	
		// pw=+pw.value;
	
}
