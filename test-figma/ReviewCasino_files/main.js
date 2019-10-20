$(document).ready(function(){
	// add img input
		$('.add-img .img input').change(function(event){
			var $photo = URL.createObjectURL(event.target.files[0]);
				$('.add-img img').attr("src",$photo);
		});
	// add img input_end


	// slider
		$('#slippry').slippry();
	// 
	$('.confirm .close').click(function(){
		$('.confirm').remove();
	})
	// ZozoTabs
		
		if($(window).width() < 480){
			// ZozoTabs
			$("#tabbed-nav").zozoTabs({
				theme: "silver",
				orientation: "horizontal",
				position: "top-left",
				size: "medium",
				responsive: true,
				animation: {
					easing: "easeInQuad",
					duration: 600,
					effects: " slideH",
					type: "jQuery"
				}
			});
			//
		} else{
			$("#tabbed-nav").zozoTabs({
				theme: "silver",
				orientation: "horizontal",
				position: "top-left",
				size: "medium",
				responsive: false,
				animation: {
					easing: "easeInQuad",
					duration: 600,
					effects: " slideH",
					type: "jQuery"
				}
			});
		}
	//
	



	// main slider
	$('.main-slider').slick({
	 	speed: 1500,
		autoplay: true,
	 	slidesToShow: 1,
		slidesToScroll: 1,
		autoplaySpeed: 3000,
		fade: true,
		responsive: [
			{
		      	breakpoint: 9999,
		      	settings: {
					dots: true,
					arrows: true,
					prevArrow: '<div class="nav-prev-main"></div>',
					nextArrow: '<div class="nav-next-main"></div>',
	      		}
		    },
		    {
		      	breakpoint: 1024,
		      	settings: {
		      		dots: true,
					arrows: true,
		      	}
	    	}	
	    ]
	 });
	$('#filter').slick({
	 	speed: 1500,
		autoplay: false,
	 	slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true
	 });


	// Lcompl-slider
		$('.Lcompl-slider').slick({
		 	speed: 1500,
			//autoplay: true,
			autoplaySpeed: 3000,
			responsive: [
				{
			      	breakpoint: 9999,
			      	settings: {
				        slidesToShow: 4,
						slidesToScroll: 1,
						dots: false,
						arrows: true,
						prevArrow: '<div class="nav-prev"></div>',
						nextArrow: '<div class="nav-next"></div>',
		      		}
			    },
				{
			      	breakpoint: 1280,
			      	settings: {
				       slidesToShow: 3,
						slidesToScroll: 1,
						dots: false,
						arrows: true,
						prevArrow: '<div class="nav-prev"></div>',
						nextArrow: '<div class="nav-next"></div>',
		      		}
			    },
			    {
			      	breakpoint: 992,
			      	settings: {
				        slidesToShow: 2,
						slidesToScroll: 1,
						dots: false,
						arrows: true,
						prevArrow: '<div class="nav-prev"></div>',
						nextArrow: '<div class="nav-next"></div>',
			      	}
		    	},
			    {
			      	breakpoint: 768,
			      	settings: {
				        slidesToShow: 1,
						slidesToScroll: 1,
						dots: false,
						arrows: true,
						prevArrow: '<div class="nav-prev"></div>',
						nextArrow: '<div class="nav-next"></div>',
			      	}
		    	},
			    {
			      	breakpoint: 480,
			      	settings: {
				        slidesToShow: 1,
						slidesToScroll: 1,
						dots: false,
						arrows: true,
			      	}
		    	}		
		    ]
		});
	//



//Фиксированный хедер при скроле
// function changeHeader() {
// 		if ($(window).width() < 769) {
// 			$('.mainmenu-wrapper').removeClass('scrolled,');;
// 		} else {
// 			if ($(window).scrollTop() > 30) {
// 				$('.mainmenu-wrapper').addClass('scrolled');
// 			} else {
// 				$('.mainmenu-wrapper').removeClass('scrolled');;
// 			}
// 		}
// 	};
// changeHeader();
	function dropdownFilter() {
		if ($(window).width() < 768) {
			$('.filter-title').click(function(){
				    $('.dropdown-filter').toggleClass( "open");
			  	}
			);
		}
	};
	dropdownFilter();
	
	$(window).scroll(function() {
		// changeHeader();
	});
	$(window).resize(function() {
		// changeHeader();
	});


	// dropdown-main-info-rating
		$('.rank-button').on('click', function(){
			$('.casino-main-info table').toggleClass( "open");
		});
	//
});

