var tagsMap = {};

function updateProjects() {
    var i;
    
    for (i = 0; i < start.liList.length; ++i) {
	var tags = start.liList[i].getElementsByClassName("projects-tags")[0].innerHTML.toString().split(", ");
	var j;
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
}

function toggleCheckbox(element) {
    if (element.checked) {
	tagsMap[element.id.toString()] = true;
    }
    else {
	tagsMap[element.id.toString()] = false;
    }

    updateProjects();

    for (var i in tagsMap) {
	if (tagsMap[i] == true) {
	    return;
	}
    }

    var i;
    for (i=0; i < start.liList.length; ++i) {
	start.liList[i].style.display = "";
    }
    
}

function start() {
    console.log("started");
    
    start.liList = document.getElementsByClassName("projects");
    start.liList = start.liList[0].getElementsByTagName("UL");
    start.liList = start.liList[0].getElementsByTagName("LI");
    
}
