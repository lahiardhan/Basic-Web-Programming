window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	let navbar = document.getElementById("navbar");
	if (
		document.body.scrollTop > 20 ||
		document.documentElement.scrollTop > 20
	) {
		navbar.classList.add("shadow");
		navbar.classList.add("bg-green");
	} else {
		navbar.classList.remove("shadow");
		navbar.classList.remove("bg-green");
	}
}

let checkbtn = document.getElementById("check")
checkbtn.addEventListener("click", function () {
	document.getElementById("navbar").classList.add("bg-green");
});