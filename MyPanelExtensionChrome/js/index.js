/*comprobar que el documento esté listo*/
$(document).ready(function(){
	/*clin en el boton llamado entre parentesis*/
	$("#HHD").click(function(){
		/*usando los tab's de chrome*/
		chrome.tabs.create({url:'https://www.hiphopdescargas.com/'});
	});
	$("#gmail").click(function(){
		/*usando los tab's de chrome*/
		chrome.tabs.create({url:'https://mail.google.com/'});
	});
	$("#linkdin").click(function(){
		/*usando los tab's de chrome*/
		chrome.tabs.create({url:'https://www.linkedin.com/in/rufo/'});
	});
	$("#infojobs").click(function(){
		/*usando los tab's de chrome*/
		chrome.tabs.create({url:'https://www.infojobs.net/'});
	});
});