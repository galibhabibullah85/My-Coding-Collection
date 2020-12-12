$(document).ready(function(){
	var typedJs=new Typed(".type",{
		strings:["a freelancer","a web-developer","a graphics-designer","also a student"],
		typeSpeed: 40,
		loop: true,
		backSpeed: 35
	});

	$("#header-section").mousemove(function(event){
		var posX=event.pageX/2;
		var posY=event.pageY/2;

		$("#greet").css("color",`rgb(${posX},${posY},00)`);
		
	});

	$("#devider-section").mousemove(function(event){
		var posX= event.pageX/2;
		var posY= event.pageY/2;

		$(".thought").css("color",`rgb(${posX},${posY},00)`);
		
	});
});