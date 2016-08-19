// navbar
		$(document).ready(function(){       
		   var scroll_start = 0;
		   var startchange = $('#startchange');
		   var offset = startchange.offset();
		    if (startchange.length){
		   $(document).scroll(function() { 
		      scroll_start = $(this).scrollTop();
		      if(scroll_start > offset.top) {
		          $(".navbar-default").css('background-color', 'rgba(0,0,0,0.5)');
		          $(".top-tab li a").css('font-size', '15px');
		          $(".top-tab li a").css('transition', 'all 300ms');
		          $(".top-tab").css('margin-right', '100px');
		          $(".top-tab").css('transition', 'all 300ms');
		          $(".navbar-default").css('transition', 'all 300ms');
		          $(".navbar-brand").css('display', 'block');
		       } else {
		          $('.navbar-default').css('background-color', 'transparent');
		          $(".top-tab li a").css('font-size', '15px');
		          $(".top-tab li a").css('transition', 'all 300ms');
		          $(".top-tab").css('margin-right', '100px');
		          $(".top-tab").css('transition', 'all 300ms');
		          $(".navbar-default").css('transition', 'all 300ms');
		          $(".navbar-brand").css('display', 'none');
		          $(".navbar-brand-img").css('margin-left', '20px');
		       }
		   });
		    }
		});

		// fadetoggle
		$(document).ready(function(){
			$('#hover1').hover(function(){
				$('#show1').fadeToggle('slow');
			});
			$('#hover2').hover(function(){
				$('#show2').fadeToggle('slow');
			});
			$('#hover3').hover(function(){
				$('#show3').fadeToggle('slow');
			});
			$('#hover4').hover(function(){
				$('#show4').fadeToggle('slow');
			});
		});

		// smooth scroll
		$(function() {
		  $('a[href*="#"]:not([href="#"])').click(function() {
		    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		      var target = $(this.hash);
		      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		      if (target.length) {
		        $('html, body').animate({
		          scrollTop: target.offset().top
		        }, 1000);
		        $(".top-tab li a").css('background-color', 'transparent');
		        return false;
		      }
		    }
		  });
		});