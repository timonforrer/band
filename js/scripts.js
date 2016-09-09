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
	$('.tabs1').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.tabs1').removeClass('current');
		$('.tab-content1').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})
})

// Tabs nr. 2

$(document).ready(function(){
$('ul.tabs').each(function(){
  // For each set of tabs, we want to keep track of
  // which tab is active and its associated content
  var $active, $content, $links = $(this).find('a');

  // If the location.hash matches one of the links, use that as the active tab.
  // If no match is found, use the first link as the initial active tab.
  $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
  $active.addClass('active');

  $content = $($active[0].hash);

  // Hide the remaining content
  $links.not($active).each(function () {
    $(this.hash).hide();
  });

  // Bind the click event handler
  $(this).on('click', 'a', function(e){
    // Make the old tab inactive.
    $active.removeClass('active');
    $content.hide();

    // Update the variables with the new link and content
    $active = $(this);
    $content = $(this.hash);

    // Make the tab active.
    $active.addClass('active');
    $content.fadeIn();

    // Prevent the anchor's default click action
    e.preventDefault();
	});
});
});

// everything in its right place
