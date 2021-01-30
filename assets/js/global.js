function openNav() {
	document.getElementById("mySidebar").style.width = "250px";
	document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
	document.getElementById("mySidebar").style.width = "0";
	document.getElementById("main").style.marginLeft= "0";
}

function pageTitleSorter() {
	var url = window.location.href;

	let splitUrl = url.split('/'),
		composedUrl = splitUrl[splitUrl.length - 1].split('.')[0];
	composedUrl = composedUrl.replace('%20', ' ');

	$('.sidebar .list-group').find('.list-group-item:contains(' + composedUrl + ')').addClass('active');
	$('.navbar-nav .nav-item').find('.nav-link:contains(' + composedUrl + ')').addClass('active');
}

$(() => {
	pageTitleSorter();
})
