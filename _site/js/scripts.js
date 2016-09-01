// *** Loader Scripts *** //

// hide the "slow internet" comment
$('#description').hide(); 
// show the comment
$('#description').delay(4000).fadeIn('slow');

// fade out loading screen after page finished loading
$(window).load(function () {
	$(".loading").fadeOut("slow");
})


// *** Animate Scroll Script *** //

// simply smooth out "page jumps"
$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') ==  this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 500);
                return false;
            }
        }
    });
});


// *** Mobile Navigation Scripts *** //

// full width of navigation
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
// navigation hidden
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
// no idea what this is..
/*
function addActive(elem) {
    var a = document.getElementsByIdName('mobileAnchor')
    for (i = 0; i < mobileAnchor.length; i++) {
        mobileAnchor[i].classList.remove('active')
    }
    elem.classList.add('active');
}*/


// *** Accordion Script *** //

// expand div onClick
$(function() {
	$('.overview').on('click',function() {
		$('.detailview').slideUp('medium');
		$(this).next('.detailview').slideDown('medium');
	});
});


// *** Tabs Scripts *** //

// Show tab-content when tab-button is clicked
$(document).ready(function(){
	// everything tabOne
	$('.tabs1').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.tabs1').removeClass('current');
		$('.tab-content1').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})
    // everythin tabTwo
    $('.tabs2').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.tabs2').removeClass('current');
		$('.tab-content2').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})
})

// everything in its right place
