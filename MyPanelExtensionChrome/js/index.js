/*comprobar que el documento esté listo*/
$(document).ready(function(){
	/*clin en el boton llamado entre parentesis*/
	$("#btn").click(function(){
		/*usando los tab's de chrome*/
		chrome.tabs.create({url:'https://www.google.com/'});
	});
	$("#gmail").click(function(){
		/*usando los tab's de chrome*/
		chrome.tabs.create({url:'https://mail.google.com/'});
	});
	$("#linkdin").click(function(){
		/*usando los tab's de chrome*/
		chrome.tabs.create({url:'https://www.linkedin.com/'});
	});
	$("#infojobs").click(function(){
		/*usando los tab's de chrome*/
		chrome.tabs.create({url:'https://www.infojobs.net/'});
	});
	$("#github").click(function(){
		/*usando los tab's de chrome*/
		chrome.tabs.create({url:'https://github.com/'});
	});
});
