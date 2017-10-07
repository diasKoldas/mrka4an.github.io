



$(document).ready(function(){
	var winPos;

	$(window).scroll(function() {
		winPos = $(window).scrollTop();
		// console.log(winPos);

		if ( winPos > 0 ) {
			$('nav').css("height", "70px");
			$('nav').css("box-shadow", "0px 7px 37px -3px #000");
		} else {
			$('nav').css("height", "100px");
			$('nav').css("box-shadow", "none");
		}
	});

	//tabs 
	var $wrapper = $('.tab-wrapper'),
	$allTabs = $wrapper.find('.tab-content > div'),
	$tabMenu = $wrapper.find('.tab-menu li')

	$allTabs.not(':first-of-type').hide();  
	$tabMenu.filter(':first-of-type').find(':first').width('100%')

	$tabMenu.each(function(i) {
		$(this).attr('data-tab', 'tab'+i);
	});

	$allTabs.each(function(i) {
		$(this).attr('data-tab', 'tab'+i);
	});

	$tabMenu.on('click', function() {

		var dataTab = $(this).data('tab'),
		$getWrapper = $(this).closest($wrapper);

		$getWrapper.find($tabMenu).removeClass('active');
		$(this).addClass('active');

		$getWrapper.find($allTabs).hide();
		$getWrapper.find($allTabs).filter('[data-tab='+dataTab+']').show();
	});

	// smooth scroll
	$("a").click(function () { 
          var elementClick = $(this).attr("href");
          var destination = $(elementClick).offset().top;
          $('html,body').animate( { scrollTop: destination }, 500 );
          return false;
        });

	// PROFRESS BAR
	$(window).scroll(function() {
		navPos = $('nav').offset().top;
		winPos = $(window).scrollTop();
		console.log(winPos);
	});

	$(".skills").click(function() {
		$('.first.circle').circleProgress({
	   	value: 0.90
	   	}).on('circle-animation-progress', function(event, progress) {
	   	$(this).find('p').html(Math.round(90 * progress) + '<div>%</div>');
	   });

	   	$('.second.circle').circleProgress({
	   	value: 0.96
	   	}).on('circle-animation-progress', function(event, progress) {
	   	$(this).find('p').html(Math.round(96 * progress) + '<div>%</div>');
	   });

	   	$('.third.circle').circleProgress({
	   	value: 0.85
	   	}).on('circle-animation-progress', function(event, progress) {
	   	$(this).find('p').html(Math.round(85 * progress) + '<div>%</div>');
	   });

	   	$('.fourth.circle').circleProgress({
	   	value: 0.94
	   	}).on('circle-animation-progress', function(event, progress) {
	   	$(this).find('p').html(Math.round(94 * progress) + '<div>%</div>');
	   });

	});

});
