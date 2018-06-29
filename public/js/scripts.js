//
// Functions run at loading of page
//
function setValidators()
{
	var userConf = document.getElementById("confUsername");
	userConf.addEventListener("input",function (event) {
		var username = document.getElementById("username");
		if(username.value == event.target.value)
		{
			event.target.style.outlineColor = "green";
			event.target.style.backgroundColor = "green";
		}
		else
		{
			event.target.style.outlineColor = "red";
			event.target.style.backgroundColor = "red";
		}
	});


	var passwordConf = document.getElementById("confPassword");
	passwordConf.addEventListener("input",function (event) {
		var password = document.getElementById("password");
		if(password.value == event.target.value)
		{
			event.target.style.outlineColor = "green";
			event.target.style.backgroundColor = "green";
		}
		else
		{
			event.target.style.outlineColor = "red";
			event.target.style.backgroundColor = "red";
		}
	});
}


function setClearClosedModals()
{
	$(".modal").on("hidden.bs.modal", function(){
    	$("#CreateAccountForm")[0].reset();
    	$("#LoginForm")[0].reset();

    	$("#confPassword").css("background-color",'white');
		$("#confUsername").css("background-color",'white');
	});
}


//
// Functions activated from interface
//
function createAccountPost()
{
	// $(".modal").modal('hide');
	
}