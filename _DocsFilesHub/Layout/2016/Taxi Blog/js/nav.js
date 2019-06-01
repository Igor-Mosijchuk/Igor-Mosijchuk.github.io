$(document).ready(function () {
	$('header nav button').click(toggleMenu);
	function toggleMenu() {
		$('header nav ul').toggle().addClass('adaptiveMenu');
		$('header nav ul li').addClass('adaptiveMenuLi');
	};
});