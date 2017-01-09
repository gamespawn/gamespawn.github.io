function deleteList(){
  var myList = document.getElementById('image_list');
  myList.innerHTML = '';
}
function viewImage(path){
  document.getElementById("image_view").src = path;
}

//Be sure to have your file names numbered. Everything has to have the same base file name.
//You can modify this function to take in a different directory instead.
function fillImages(filename, filepath, maxphotos, height, width, listID)
{
  //Clear the list of old pictures
  deleteList();

  var listRef = document.getElementById(listID);
  var bfinished = false;
  var counter = 1;

  //View the first image in the gallery
  viewImage(filepath + filename + counter + ".jpg");
  //Load in pictures
  while(!bfinished)
  {
    var new_list_item = document.createElement("li");
    var new_img = document.createElement("IMG");

    //Set Attributes
    new_img.setAttribute("src", filepath + filename + counter + ".jpg");
    new_img.setAttribute("height", height);
    new_img.setAttribute("width", width);
    new_img.setAttribute("display", "block");
    new_img.onclick = function(){
      viewImage(this.src);
    };
    //Append image onto list item
    new_list_item.appendChild(new_img);

    //Append the list item onto the unordered list
    listRef.appendChild(new_list_item);
    if(++counter == maxphotos) bfinished = true;
  }
}

//Toggles the dropdown content of a section whenever it is clicked.
//NOTE: For the html the section content NEEDS to have its own id.
function toggleContent(content)
{
    content.classList.toggle("show"); 
}
