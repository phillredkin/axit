// animation
new WOW().init();

// tabs
function displayContent(evt, contentNameID) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(contentNameID).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

//burger menu
$(document).ready(function () {
	$('.header_burger').click(function () {
		$('.header_burger,.navbar').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

// scrollUp
document.getElementById("scrollTop").onclick = function scrollUpFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;

}
window.onscroll = function() {
	scrollFunction()
}
function scrollFunction() {
	if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
		document.getElementById("scrollTop").style.display = "block";
	} else {
		document.getElementById("scrollTop").style.display = "none";
	}
}
// counter of numbers
$('.amount_number').each(function () {
	$(this).prop('Counter', 0).animate({
		Counter:$(this).text()
	}, {
		duration: 15000,
		easing: 'swing',
		step:function(now) {
			$(this).text(Math.ceil(now));
		}
	});
});