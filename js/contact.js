$(document).ready(function(){
	$("#nav ul li a:eq(4)").css("color","#f18624");
	$("#nav ul li a:eq(4)").text("联系");
	$("#nav ul li a").each(function(index){
		$(this).hover(function(){
			switch(index) {
				case 0: $(this).text('案例');
						  break;
				case 1: $(this).text('关于');
						  break;
				case 2: $(this).text('服务');
						  break;
				case 3: $(this).text('客户');
						  break;
				default: return;
			}}, function(){
			switch(index) {
				case 0: $(this).text('work');
						  break;
				case 1: $(this).text('about');
						  break;
				case 2: $(this).text('service');
						  break;
				case 3: $(this).text('clients');
						  break;
				default: return;
			}
		});
	});
	$(".route_icon:eq(0)").css("background-position", -74 + "px" + " " + 0 + "px");
	$(".route_content:eq(0)").css("display", "block");
	$(".route_content:eq(1)").css("display", "none");
	$(".route_icon").click(function(){
		var iconNum = $(this).index();
		$(".route_icon").each(function(index){
			$(this).css("background-position", (index * (-148)) + "px" + " " + 0 + "px");
		});
		$(".route_icon").eq(iconNum).css("background-position", (iconNum * (-148) - 74) + "px" + " " + 0 + "px");
		$(".route_content").eq(iconNum).siblings().css("display", "none");
		$(".route_content").eq(iconNum).fadeIn("normal");
	});	
	$('.input_info').focus(function () { 
		if($(this).val() == "Your Name" || $(this).val()=="Email Address" || $(this).val()=="Phone Number" || $(this).val()=="Your Message"){
			$(this).val('');			
		}
		$(this).css('background-color', '#e3e3e3');
		$(this).css('color', '#ffffff');
    });
	$('.input_info').blur(function () { 
		if($(this).val() == ''){
			if($(this).attr("id") == "name")
				$(this).val('Your Name');
			else if($(this).attr("id") == "email")
				$(this).val('Email Address');
			else if($(this).attr("id") == "phone")
				$(this).val('Phone Number');
			else 
				$(this).val('Your Message');
			$(this).css('background-color', '#f6f6f6');
			$(this).css('color', '#bdbdbd');	
		} else {
			$(this).css('background-color', '#f6f6f6');
			$(this).css('color', '#bdbdbd');
		}
    });
	$('#map').jMapping({
		  default_zoom_level: 18		 
	});
	$('#mapWrapper').click(function(){
		$('.google_map').eq(1).hide();
		$('#draw_map').hide();
		$('#route_info').css("margin-top","100px");
	});
	$('.google_map').eq(1).hover(function(){
		$('#mapWrapper').css("opacity","0.8");
	},function(){
		$('#mapWrapper').css("opacity","1");
	});
	$("#logo").click(function(){
		window.location.href = "index.html";
	});
});