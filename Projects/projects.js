var tagsMap = {};
var PageNumber = 1;

var PAGESIZE = 5; // Number of project items in a page
var DESC_CHAR = 250; // Character limit of project description


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
	var show = true;
	// For all checked tags
	for (var j in tagsMap) {
	    if (tagsMap[j] == true) {
		for (var l = 0; l < tags.length; ++l) {
		    if (tags[l].trim() == j) {
			// Current project contains checked tag
			break;
		    }
		    if (l == tags.length-1) {
			// Current project doesn't contain checked tag
			// Don't show this project
			show = false;
		    }
		}
	    }
	    if (show == false) {
		break;
	    }
	}
	
	if (show == true) {
	    start.curProjectList.push(i);    
	}
    }
}

// Makes all the items in start.curProjectList visible
// Makes all the items in start.ProjectList invisible
function showPages() {
    var i;

    // Hide no-results text. If there are no results later we will show it
    document.getElementById("no-results").style.display = "none";
    
    // Hides all the projects; will show the correct ones later
    for (i = 0; i < start.projectList.length; ++i) {
	start.projectList[i].style.display = "none";
    }

    // If the tags map is empty then show the projects on the current page
    if (updateTagsMap.emptyMap == true) {
	for (i = (PageNumber-1) * PAGESIZE; i < start.projectList.length && i < PageNumber * PAGESIZE ; ++i) {
	    start.projectList[i].style.display = "";
	    readmore(i);
	}
    }
    // else show the pages on the current projects list
    else {
	// if there are no current projects to display then show 'No results found'
	if (start.curProjectList.length == 0) {
	    document.getElementById("no-results").style.display = "";
	}
	for (i = (PageNumber-1) * PAGESIZE; i < start.curProjectList.length && i < PageNumber * PAGESIZE; ++i) {
	    start.projectList[start.curProjectList[i]].style.display = "";
	    readmore(i);
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
    changePage(1);
    createPageButtons();
}

function changePage(number) {
    if (number < 1 || number > createPageButtons.nPages) {
	return;
    }
    var pageNumButtons = document.getElementsByClassName("pagenumbuttons");

    // Check if there are page buttons
    // Change color to singfy current page
    if (pageNumButtons.length > 0) {
	pageNumButtons[PageNumber-1].style.color = "#0a2129";
	PageNumber = number;
	pageNumButtons[PageNumber-1].style.color = "#1F657C";
    }

    showPages();
}

// Creates a forward and backward button to navigate pages
// Also lists the page numbers
//TODO add better description
function createPageButtons() {
    var pageButtons = document.getElementsByClassName("pagebuttons");

    // Remove old buttons
    while (pageButtons[0].hasChildNodes()) {
	pageButtons[0].removeChild(pageButtons[0].childNodes[0]);
    }

    // If there are too few items then there is no need for page buttons
    if (updateTagsMap.emptyMap == false && start.curProjectList.length <= PAGESIZE) {
	return;
    }
    
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
    forwardButton.style.color = "#0a2129";
    backwardButton.style.color = "#0a2129";

    createPageButtons.nPages = Math.ceil(start.projectList.length / PAGESIZE);

    pageButtons[0].appendChild(backwardButton);
    for (var i = 1; i <= createPageButtons.nPages; ++i) {
	const value = i;
	var button = document.createElement('a');
	button.href = "#";
	button.onclick = function() {changePage(value)};
	button.innerHTML = i + "    ";
	button.style.textDecoration = "none";
	button.style.color = "#0a2129";
	button.className = "pagenumbuttons";
	pageButtons[0].appendChild(button);
    }
    pageButtons[0].appendChild(forwardButton);

    // This is called to update color of current page number
    changePage(PageNumber);
}


function readmore(projnum) {
    var string = start.originalProjectText[projnum];
    
    start.projectText[projnum].innerHTML = string;
    // Limit the number of characters to DESC_CHAR
    string = string.substr(0, DESC_CHAR);
    // Get rid of a cut-off word
    string = string.substr(0, string.lastIndexOf(' ')+1);
    start.projectText[projnum].innerHTML = string;

    // Create the read-more button at the end of the text
    var button = document.createElement('a');
    button.href = "#";
    button.onclick = function()
    {
	start.projectText[projnum].innerHTML = start.originalProjectText[projnum]
    };
    button.innerHTML = "show more"
    button.style.textDecoration = "underline";
    button.style.color = "lightblue";
    button.className = "readmore";
    start.projectText[projnum].appendChild(button);
    /*
    var height = document.getElementsByClassName("projects-image")[projnum].height + 50;
    // add 50 for margins
    // TODO: Bug fix with small window sizes
    while (start.projectList[projnum].offsetHeight > height) {
	string = string.substr(0, string.length - 5);
	start.projectText[projnum].innerHTML = string;
    }
    */

}

function resize() {
    console.log("resize")
    showPages();
}

function start() {
    // Get every project list item
    start.height = window.innerHeight;
    start.projectList = document.getElementsByClassName("projects");
    start.projectList = start.projectList[0].getElementsByTagName("UL");
    start.projectList = start.projectList[0].getElementsByTagName("LI");
    start.projectText = document.getElementsByClassName("projects-text");
    start.originalProjectText = [];
    for (var i = 0; i < start.projectText.length; ++i) {
	start.originalProjectText.push(start.projectText[i].innerHTML);
    }
    
    start.curProjectList = [];

    // Get every input item and uncheck it
    // TODO: Make sure we only get checkboxes
    var checkboxes = document.getElementsByTagName("INPUT");
    for (var i in checkboxes) {
	checkboxes[i].checked = false;
    }

    updateTagsMap();
    updateCurrentProjectList();
    createPageButtons();
}
