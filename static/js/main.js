  $(function() {
        
        //side dot menu functions
       
        $('body').scrollspy({
            target: '#dotted-nav',
            offset: 300
        });

        //animate menu scrolling
         $('#dotted-nav a,.bottom-right a, #main-nav a').on('click',function (e) {
          e.preventDefault()
           var $target = $(this)[0].hash;
             console.log($target);
            //   thisAnchor = thisHREF.hash.substring(1);
           $('html,body').animate({scrollTop:$($target).offset().top}, 700, 'easeOutCubic',function(){
             window.location.hash = $target;
           });
        })
         
        function adjustElements() {
            var active = $('#dotted-nav').find(".active > a").attr('href');
            if (active == "#about" || active == "#artist-statement" || active == "#store") {
                $('#dotted-nav').removeClass('light').addClass('dark');
                $('#overgrowth-image').removeClass('light').addClass('dark');
                $('#toggle-mobile-menu').removeClass('light').addClass('dark');
            } else {
                $('#dotted-nav').removeClass('dark').addClass('light');
                $('#overgrowth-image').removeClass('dark').addClass('light');
                $('#toggle-mobile-menu').removeClass('dark').addClass('light');
            }
            if (active == "#store" || active == "#kickstarter") {
                $('#overgrowth-image').css('opacity', 0);
            } else {
                $('#overgrowth-image').css('opacity', 1);
            }
        }

        $('#dotted-nav').on('activate.bs.scrollspy', function(event) {
            adjustElements();
        });

        $('.swipebox').swipebox();

        $('#main-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            removalDelay: 0,
            mainClass: 'mfp-fade',
            showCloseBtn: false,
            gallery: {
                enabled: true,
                arrowMarkup: '<a class="gallery-arrow gallery-arrow-%dir% hug"></a>'
            },
            preloader: true,
            tLoading: '<div class="loading"></div>',
            callbacks: {
                change: function() {
                    if (this.isOpen) {
                        this.wrap.addClass('mfp-open');
                    }
                },
                open: function() {
                    $('#open-gallery-button').css('opacity', '0');
                },
                close: function() {
                    $('#open-gallery-button').css('opacity', '1');
                },
            },
        });


        $('.gallery').each(function() { // the containers for all your galleries
            $(this).magnificPopup({
                delegate: 'a', // the selector for gallery item
                type: 'image',
                mainClass: 'mfp-fade',
                preloader: true,
                tLoading: '<div class="loading"></div>',
                gallery: {
                  enabled:true,
                  arrowMarkup: '<a class="gallery-arrow gallery-arrow-%dir% hug"></a>'
                },
                callbacks: {},
            });
        });


        $('#main-nav, #dotted-nav, #welcome, #overgrowth-fixed').css('opacity', '1.00');


        $('.purchase-overlay').click(function() {
            $('.checkout-overlay').fadeIn();
            return false;
        });

        $('#continue-shopping, .checkout-overlay').click(function() {
            $('.checkout-overlay').fadeOut();
            return false;
        });

        $('#toggle-mobile-menu').click(function() {
            // $('#mobile-nav').show();
            // console.log($(this).attr('data-open'));
            if ($(this).attr('data-open') === "false") {
               // console.log('slidedown');
                $('#mobile-nav').slideDown();
                $(this).attr('data-open', "true");
            } else {
              //  console.log('slideup');
                $('#mobile-nav').slideUp();
                $(this).attr('data-open', "false");
            }
            return false;
        });

        $('#mobile-nav a').click(function() {
            $('#mobile-nav').slideUp();
            $('#toggle-mobile-menu').attr('data-open', "false");
        });

       


        });
        
        
   //skrollr
        
        ( function( $ ) {
	
	// Setup variables
	$window = $(window);
	$slide = $('section');
	$body = $('body');
	
  
	function adjustWindow(){

	    // Get window size
	   winH = $window.height();
	    winW = $window.width();
        
        if (winH < 775) {
                $('#store-items').addClass('short-screen');
            }

	    // Keep minimum height 550
	    if(winH <= 500) {
	        winH = 500;
	    }

	    // Init Skrollr for 768 and up
	    if( winW >= 768) {
          
	        // Init Skrollr
	         var s = skrollr.init({
            
            smoothScrolling: false
        });

	        // Resize our slides
	        $slide.height(winH);

	        s.refresh($('section'));
          
            setTimeout(scrolltoanchorauto, 1000)
	    } else {

	        // Init Skrollr
	         var s = skrollr.init({
           
        });
	        s.destroy();
	    }
	
		// Check for touch
	   	if(Modernizr.touch) {

			// Init Skrollr
			var s = skrollr.init();
			s.destroy();
	   	}

	}
	
	function initAdjustWindow() {
	    return {
	        match : function() {
	            adjustWindow();
	        },
	        unmatch : function() {
	            adjustWindow();
	        }
	    };
	}
    
   
    //turn off skrollr for mobile
	enquire.register("screen and (min-width : 768px)", initAdjustWindow(), false)     
    
    
   
    	if(! Modernizr.touch) { 
            //desktop
            var doit;
            function resizedw(){
              
               thisAnchor = window.location.hash.substring(1); 
                var str = "!/";
                newAnchor = thisAnchor.replace(str, "");
                window.location.hash = newAnchor;
              
                adjustWindow();
                scrollToAnchor(newAnchor);
            }
            $( window ).resize(function()  {
                clearTimeout(doit);
                doit = setTimeout(function() {
                    resizedw();
                }, 100);
            });
            
        
        }else{
            //mobile
            
            $(function (){
                   $(".bg-div-landing").fadeOut(2000, function() {
                    $("#landing").css("z-index","1");
                    scrolltoanchorauto();
                   });
                $(".hide-mobile").hide();
                  $(".show-mobile").show();
                
              })
            
            
            
            
            
             $( window ).resize(function() {
                  winH = $window.height() + 60;
                 $slide = $('section');
                  $slide.height(winH);
               //  console.log(winH);
                  thisAnchor = window.location.hash.substring(1); 
                var str = "!/";
                newAnchor = thisAnchor.replace(str, "");
                window.location.hash = newAnchor;
              
               
                scrollToAnchor(newAnchor);
                 
                
             })
        }
            
            
        
		
} )( jQuery );
        
        //end skrollr
        
        
      
        
  //vid script
        
        if(! Modernizr.touch) { 
        
        videojs("main_video").ready(function(){
            var vidPlayer = this;
            $('#play-video').on('click', function(e){
               vidPlayer.play();

            vidPlayer.on('pause', function() {
                setTimeout(function(){
                    if( vidPlayer.paused() )  {
                        $('.pause-overlay').addClass('is-visible');
                    }
                }, 200);
            });

		vidPlayer.on('play', function(){
			$('.pause-overlay').removeClass('is-visible');
            	
		});

		$('#video-resume').on('click', function(e){
			vidPlayer.play();
		});
            
        $('#video-close').on('click', function(e){
				$('.pause-overlay').removeClass('is-visible');
             $('#myModal').fadeOut(function(){ $('#myModal').modal('hide'); }); 
           
            
            })

		
               
           })

        }) 
        }; 
        
        
        
       
   //end vid script
    
        
  
    //scroll to anchor functions
        
      function scrolltoanchorauto(){
          thisAnchor = window.location.hash.substring(1);
            console.log(thisAnchor + ' -auto');
            if(thisAnchor != ""){
                var str = "!/";
                newAnchor = thisAnchor.replace(str, "");
                window.location.hash = newAnchor;
              
              //  adjustWindow();
                scrollToAnchor(newAnchor);
            }
        }
        
    function scrollToAnchor(aid){
        var aTag = $("section[id='"+ aid +"']");
       // console.log(aTag);
        try {
        $('html,body').animate({scrollTop: aTag.offset().top},0);
        }
        catch (err) {
            console.log(err);
        }

    }    
    
    
 
        //cart stuff
        Snipcart.execute('bind', 'cart.ready', function (data) {
           
            if ($("span.snipcart-total-items").text() > 0) {
                $(".snipcart-summary").addClass("show");
            }
         });
        
        Snipcart.execute('bind', 'item.added', function (item) {
             if ($("span.snipcart-total-items").text() > 0) {
                $(".snipcart-summary").addClass("show");
            }
        });
        
        Snipcart.execute('bind', 'item.removed', function (item) {
           if ($("span.snipcart-total-items").text() == 0) {
                $(".snipcart-summary").removeClass("show");
            }
        });
        
        Snipcart.execute('bind', 'cart.closed', function() {
            
          
            
         if ($("span.snipcart-total-items").text() == 0) {
                $(".snipcart-summary").removeClass("show");
  
            }
        });
