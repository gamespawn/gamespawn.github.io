var tagsMap = {};
var PageNumber = 1;

var PAGESIZE = 5; // Number of project items in a page


// Contains the variable emptyMap which is true if no checkboxes are checked
function updateTagsMap() {
    updateTagsMap.emptyMap = true;
    // If an element in tagsMap is true set empty map to false
    for (var i in tagsMap) {
	if (tagsMap[i] == true) {
	    updateTagsMap.emptyMap = false;
	    break;
	}
    }
}

// Clears start.curProjectList
// Adds all the items in start.projectList with the correct tags
// to start.curProjectList.
function updateCurrentProjectList() {
    start.curProjectList.length = 0;
    
    var i;
    for (i = 0; i < start.projectList.length; ++i) {
	// Get the tags of the current project item
	var tags = start.projectList[i].getElementsByClassName("projects-tags")[0].innerHTML.toString().split(", ");

	// If the tags map isn't empty
	// Check if the project item has a currently checked tag
	if (updateTagsMap.emptyMap == false) {
	    var j;
	    for (j = 0; j < tags.length; ++j) {
		if (tagsMap[tags[j].trim()] == true) {
		    start.curProjectList.push(i);
		    break;
		}
	    }
	}

    }
}

// Makes all the items in start.curProjectList visible
// Makes all the items in start.ProjectList invisible
function showPages() {
    var i;

    // Hides all the projects; will show the correct ones later
    for (i = 0; i < start.projectList.length; ++i) {
	start.projectList[i].style.display = "none";
    }

    // If the tags tamp is empty then show the projects on the current page
    if (updateTagsMap.emptyMap == true) {
	for (i = (PageNumber-1) * PAGESIZE; i < start.projectList.length && i < PageNumber * PAGESIZE ; ++i) {
	    start.projectList[i].style.display = "";
	}
    }
    // else show the pages on the current projects list
    else {
	for (i = (PageNumber-1) * PAGESIZE; i < start.curProjectList.length && i < PageNumber * PAGESIZE; ++i) {
	    start.projectList[start.curProjectList[i]].style.display = "";
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

    updateTagsMap();
    updateCurrentProjectList();
    showPages();
    changePage(1);
}

function changePage(number) {
    if (number < 1 || number > createPageButtons.nPages) { // TODO upperbounds
	return;
    }
    var pageNumButtons = document.getElementsByClassName("pagenumbuttons");
    console.log("Old Page Number: " + PageNumber);
    pageNumButtons[PageNumber-1].style.color = "white";
    PageNumber = number;
    console.log("Page Number: " + PageNumber);
    pageNumButtons[PageNumber-1].style.color = "#0a2129";


    showPages();
}

// Creates a forward and backward button to navigate pages
// Also lists the page numbers
//TODO add better description
function createPageButtons() {
    var pageButtons = document.getElementsByClassName("pagebuttons");
    var forwardButton = document.createElement('a');
    var backwardButton = document.createElement('a');
    forwardButton.href = "#";
    forwardButton.onclick = function() {changePage(PageNumber + 1)};
    forwardButton.innerHTML = "&#10095    ";
    backwardButton.href = "#";
    backwardButton.onclick = function() {changePage(PageNumber - 1)};
    backwardButton.innerHTML = "&#10094    ";
    forwardButton.style.textDecoration = "none";
    backwardButton.style.textDecoration = "none";
    forwardButton.style.color = "white";
    backwardButton.style.color = "white";

    createPageButtons.nPages = Math.ceil(start.projectList.length / PAGESIZE);
    console.log("Number of Pages: " + createPageButtons.nPages);

    pageButtons[0].appendChild(backwardButton);
    for (var i = 1; i <= createPageButtons.nPages; ++i) {
	const value = i;
	var button = document.createElement('a');
	button.href = "#";
	button.onclick = function() {changePage(value)};
	button.innerHTML = i + "    ";
	button.style.textDecoration = "none";
	button.style.color = "white";
	button.className = "pagenumbuttons";
	pageButtons[0].appendChild(button);
    }
    pageButtons[0].appendChild(forwardButton);

    // This is called to update color of current page number
    changePage(PageNumber);
}

function start() {
    console.log("started");

    // Get every project list item
    start.height = window.innerHeight;
    start.projectList = document.getElementsByClassName("projects");
    start.projectList = start.projectList[0].getElementsByTagName("UL");
    start.projectList = start.projectList[0].getElementsByTagName("LI");

    start.curProjectList = [];

    // Get every input item and uncheck it
    // TODO: Make sure we only get checkboxes
    var checkboxes = document.getElementsByTagName("INPUT");
    for (var i in checkboxes) {
	checkboxes[i].checked = false;
    }

    updateTagsMap();
    updateCurrentProjectList();
    showPages();
    createPageButtons();
    
    
}
