document.addEventListener("DOMContentLoaded", function(){
	displayHome();
})

function displayHome () {
	var homeUrl = "snippets/home-snippet.html";
	fetch(homeUrl).then(response => {
		return response.text();
	}).then(dataString => {
		document.getElementById("main-content").innerHTML = dataString;
	});
}

function displayResume () {
	var resumeUrl = "snippets/resume-snippet.html";
	fetch(resumeUrl).then(response => {
		return response.text();
	}).then(dataString => {
	document.getElementById("main-content").innerHTML = dataString;
	})
}

function displayProjects () {
	var projectsUrl = "snippets/projects-snippet.html";
	fetch(projectsUrl).then(response => {
		return response.text();
	}).then(dataString => {
		document.getElementById("main-content").innerHTML = dataString;
	})
}

function displayContact () {
	var contactUrl = "snippets/contact-snippet.html";
	fetch(contactUrl).then(response => {
		return response.text();
	}).then(dataString => {
		document.getElementById("main-content").innerHTML = dataString;
	})
}