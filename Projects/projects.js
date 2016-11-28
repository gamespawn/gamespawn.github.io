var MAX_PTEXT_LENGTH = 1250;


function start() {
    // list of all the project-text items
    var projects_text_list = document.getElementsByClassName("projects-text");

    // lists containing cut and original versions of project-text text
    var long_content = [];
    var short_content = [];

    
    // Split every paragraph with class name projects-text if it exceeds max length
    var i;
    for (i = 0; i < projects_text_list.length; i++) {
	var paragraphs = projects_text_list[i].getElementsByTagName('p');
	var current_text = paragraphs[0].innerHTML;
	long_content.push(current_text);
	short_content.push(current_text);

	if (current_text.length > MAX_PTEXT_LENGTH) {
	    // Cut off paragraph at the end of a sentence.
	    var j;
	    for (j = MAX_PTEXT_LENGTH; j < current_text.length; j++) {
		if (current_text.charAt(j) == '.') {
		    short_content[i] = current_text.substr(0, j+1);
		    break;
		    // TODO: handle when no period is found
		}
	    }
	    // Set the content of the paragraph	    
	    paragraphs[0].innerHTML = short_content[i];


	    // Add a read more button
	    var button = document.createElement("button");
	    button.name = i;
	    button.innerHTML = "Read More";
	    button.className = "read_more_less";
	    button.onclick = function() {
		if (this.innerHTML == "Show Less") {
		    projects_text_list[this.name].getElementsByTagName('p')[0].innerHTML =
			short_content[this.name];
		    this.innerHTML = "Read More";

		    // Scroll so the top of the list item is at the top of the screen
		    var liTop = this.parentElement.parentElement.offsetTop;
		    var h1Height = this.parentElement.parentElement.parentElement.getElementsByTagName('h1')[0].offsetHeight;
		    var navBarHeight = document.getElementById("navBar").offsetHeight;
		    
		    window.scrollTo(0, liTop - h1Height - navBarHeight - 50);
		}
		else {
		    projects_text_list[this.name].getElementsByTagName('p')[0].innerHTML =
			long_content[this.name];
		    this.innerHTML = "Show Less";
		}
	    };
	    projects_text_list[i].appendChild(button)
	    
							 
	}
    }
    
}
