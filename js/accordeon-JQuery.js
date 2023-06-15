$(document).ready(function(){
	$(".accordion-item > a").on("click", function(){
	  if($(this).hasClass('active')){
		$(this).removeClass("active");
		$(this).siblings('.content').slideUp(200);
		$(".accordion-item > a span").removeClass("minus").addClass("plus");
	  }else{
		$(".accordion-item > a span").removeClass("minus").addClass("plus");
		$(this).find("span").removeClass("plus").addClass("minus");
		$(".accordion-item > a").removeClass("active");
		$(this).addClass("active");
		$('.content').slideUp(200);
		$(this).siblings('.content').slideDown(200);
	  }    
	});
  });