var tagsMap = {};
var PageNumber = 1;

function updateProjects() {
    var i;
    for (i = 0; i < start.liList.length; ++i) {
	var tags = start.liList[i].getElementsByClassName("projects-tags")[0].innerHTML.toString().split(", ");
	var j;

	// Check if the item has a tag that is checked
	for (j = 0; j < tags.length; ++j) {
	    if (tagsMap[tags[j].trim()] == true) {
		start.liList[i].style.display = "";
		break;
	    }
	    else {
		start.liList[i].style.display = "none";
	    }
	}

    }

    // Stores if all the checkboxes are unchecked
    var emptyMap = true;
    for (var i in tagsMap) {
	if (tagsMap[i] == true) {
	    emptyMap = false;
	    break;
	}
    }

    // Since we have an empty map, display all the items
    if (emptyMap == true) {
	console.log("All checkboxes unchecked");
	for (i=0; i < start.liList.length; ++i) {
	    start.liList[i].style.display = "";
	}
    }

    // Check to see if the items are off the screen
    // and hide them if they are
    for (i = 0; i < start.liList.length; ++i) {
	var bottom = start.liList[i].offsetTop + start.liList[i].offsetHeight;
	if (bottom > start.height) {
	    console.log("cutting " + bottom + " " + start.height);
	    start.liList[i].style.display = "none";
	}
    }
}


function toggleCheckbox(element) {
    if (element.checked) {
	tagsMap[element.id.toString()] = true;
    }
    else {
	tagsMap[element.id.toString()] = false;
    }

    updateProjects();
}

function changePage(number) {
    console.log("hi from changepage");
    
}

// Creates a forward and backward button to navigate pages
// Also lists the page numbers
//TODO add better description
function createPageButtons() {
    var mainText = document.getElementsByClassName("projects");
    var forwardButton = document.createElement('a');
    forwardButton.href = "#";
    forwardButton.innerHTML = "&#9658";
    forwardButton.onClick() = changePage(PageNumber);

    console.log(forwardButton);
    

    mainText[0].appendChild(forwardButton);
}

function start() {
    console.log("started");

    // Get every project list item
    start.height = window.innerHeight;
    start.liList = document.getElementsByClassName("projects");
    start.liList = start.liList[0].getElementsByTagName("UL");
    start.liList = start.liList[0].getElementsByTagName("LI");

    // Get every input item and uncheck it
    // TODO: Make sure we only get checkboxes
    var checkboxes = document.getElementsByTagName("INPUT");
    for (var i in checkboxes) {
	checkboxes[i].checked = false;
    }

    createPageButtons();
    
    updateProjects();
}
