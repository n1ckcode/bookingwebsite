//function that stores inputed data into the localstorage

function getinput(){



var first = document.getElementById('firstname').value;
var  last = document.getElementById('lastname').value;
var number = document.getElementById('phone').value;
var date = document.getElementById("dates").value;
var hours = document.getElementById("time").value;




var cut = document.getElementById('service');
var type= cut.options[cut.selectedIndex].text;
var option = document.getElementById('notes').value;
var insta = document.getElementById('gram').value;

    localStorage.setItem("textvalue", first);
    localStorage.setItem("textvalue2", last);
    localStorage.setItem("textvalue3", number);
    localStorage.setItem("textvalue5", date);
    localStorage.setItem("textvalue6", type);
    localStorage.setItem("textvalue7", option);
    localStorage.setItem("textvalue8", insta);
		localStorage.setItem("textvalue9", hours);



         submitkey();








    return false;
}


//function to send inputed form data to a email address using smtp

function sendEmail(){
var cut = document.getElementById('service');
var type= cut.options[cut.selectedIndex].text;
var email= document.getElementById('email');


A();

			Email.send({
				Host: "smtp.elasticemail.com",
				Username : "", // enter your smtp server email
				Password : "", // enter your smtp server password
				To : "topkidbarber@gmail.com",
				From : "tt00pingpong@gmail.com",
				Subject : "Booking Confirmation",
				Body : "<i>Appointment Request</i>"

                                + "<br><b> First Name:</b> " + document.getElementById('firstname').value

                                + "<br><b> Last Name:</b> " + document.getElementById('lastname').value
                                + "<br><b> Phone number:</b> " + document.getElementById('phone').value
                                + "<br><b> Service:</b> " + cut.options[cut.selectedIndex].text
																+ "<br><b> Instagram:</b> " + "@" + document.getElementById("gram").value
                                + "<br><b> Appointment date:</b> " + document.getElementById("dates").value
                                + "<br><b> Appointment time:</b> " + document.getElementById("time").value

+ "<br><b> Note to Barber:</b> " + document.getElementById('notes').value



			})
			.then(function(message){
				alert(message)
			});
			B();
		}

		function A() {


		}

		function B() {
			alert("Your appoinment has been received");

		}




B();
			Email.send({
				Host: "smtp.elasticemail.com",
				Username : "", // enter your smtp server email
				Password : "", // enter your smtp server password
				To : "topkidbarber@gmail.com",
				From : "tt00pingpong@gmail.com",
				Subject : "Booking Confirmation",
				Body : "<i>Appointment Request</i>"

                                + "<br><b> First Name:</b> " + document.getElementById('firstname').value

                                + "<br><b> Last Name:</b> " + document.getElementById('lastname').value
                                + "<br><b> Phone number:</b> " + document.getElementById('phone').value
                                + "<br><b> Service:</b> " + cut.options[cut.selectedIndex].text
				+ "<br><b> Instagram:</b> " + "@" + document.getElementById("gram").value
                                + "<br><b> Appointment date:</b> " + document.getElementById("dates").value
                                + "<br><b> Appointment time:</b> " + document.getElementById("time").value

+ "<br><b> Note to Barber:</b> " + document.getElementById('notes').value



			})
			.then(function(message){
				alert(message)
			});
			B();
		}

		function A() {


		}

		function B() {
			alert("Your appoinment has been received");

		}









//form validation






function submitkey() {
	var first = document.getElementById('firstname').value;
	var  last = document.getElementById('lastname').value;
	var number = document.getElementById('phone').value;
	var date = document.getElementById("dates").value;
	var insta = document.getElementById('gram').value;
  var hours = document.getElementById('time').value;

if (first == "" || last == "" || number == "" || date == "" || insta == "" || hours == ""){
//alert("don't send");
return
}
else{
sendEmail();

}
}
