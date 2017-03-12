function deleteList(){
  var temp = 1;
  while (temp <= thumbnailSetMaxNumber)
  {
    var name = "image_list" + temp;
    var myList = document.getElementById(name);
    myList.innerHTML = '';
    temp++;
  }
}


function viewImage(path){
  document.getElementById("image_view").src = path;
  // var parent = document.getElementById("image_container");
  // var descendants = parent.getElementsByTagName("LI");
  // var i = 0;
  // while (i < descendants.length){
  //   if (descendants[i].getElementsByTagName('img')[0].getAttribute("src") == path){
  //     descendants[i].style.border = "medium solid yellow";
  //   }
  //   else descendants[i].style.border = "none";
  //   i++;
  // }
}

var currFileName;
var currFilePath;
var ssPhotoNum;
var photoIndex;
var thumbnailIndex;
var thumbnailSetMaxNumber;
var currentSelectedPicture;
function toggleSelected(index)
{
  var pictureDeselect = document.getElementById(currentSelectedPicture);
  pictureDeselect.style.border = "none";
  var pictureSelect = document.getElementById(index);
  pictureSelect.style.border = "medium solid yellow";
  currentSelectedPicture = index;
}
//Be sure to have your file names numbered. Everything has to have the same base file name.
//You can modify this function to take in a different directory instead.
function fillImages(filename, filepath, maxphotos, height, width, listID)
{
  //Clear the list of old pictures
  deleteList();

  //Set parameters for the current slideshow
  currFileName = filename;
  currFilePath = filepath;
  ssPhotoNum = maxphotos;
  photoIndex = 1;
  thumbnailIndex = 1;
  thumbnailSetMaxNumber = 1;
  var listRef = document.getElementById(listID);
  var bfinished = false;
  var counter = 1;

  //View the first image in the gallery
  viewImage(filepath + filename + counter + ".jpg");
  currentSelectedPicture = counter;
  //Load in pictures
  while(!bfinished)
  {
    var new_list_item = document.createElement("li");
    new_list_item.setAttribute('class', 'imageList');
    new_list_item.setAttribute('id', counter);
    var new_img = document.createElement("IMG");

    //Set Attributes
    new_img.setAttribute("src", filepath + filename + counter + ".jpg");
    new_img.setAttribute("height", height);
    new_img.setAttribute("width", width);
    new_img.setAttribute("display", "block");
    new_img.onclick = function(){
      viewImage(this.src);
      toggleSelected(counter);
    };
    //Append image onto list item
    new_list_item.appendChild(new_img);

    //Append the list item onto the unordered list
    listRef.appendChild(new_list_item);
    if(++counter == maxphotos) bfinished = true;
    if (counter % 8 == 0){ //create a new ul if u have more than 7 pictures
      thumbnailSetMaxNumber++;
      var divContainer = document.getElementById("image_container");
      var tempListRef = document.createElement('ul');
      tempListRef.setAttribute('id', 'image_list' + thumbnailSetMaxNumber);
      tempListRef.style.display = 'none';
      divContainer.appendChild(tempListRef);
      var test = "image_list" + thumbnailSetMaxNumber;
      listRef = document.getElementById(test);
    }
  }

}

function prevImage()
{
    photoIndex--;
    if(photoIndex < 1)
    {
        photoIndex = ssPhotoNum;
    }
    viewImage(currFilePath + currFileName + photoIndex + ".jpg");
    toggleSelected(photoIndex);
}

function nextImage()
{
    photoIndex++;
    if(photoIndex > ssPhotoNum)
    {
        photoIndex = 1;
    }
    viewImage(currFilePath + currFileName + photoIndex + ".jpg");
    toggleSelected(photoIndex);
}

function prevThumbnailSet()
{
  if (thumbnailIndex - 1  >= 1){
    document.getElementById("image_list" + thumbnailIndex).style.display = 'none';
    thumbnailIndex--;
    document.getElementById("image_list" + thumbnailIndex).style.display = 'inline-block';
  }
  else {
    document.getElementById("image_list" + thumbnailIndex).style.display = 'none';
    document.getElementById("image_list" + thumbnailSetMaxNumber).style.display = 'inline-block';
    thumbnailIndex = thumbnailSetMaxNumber;
  }
}
function nextThumbnailSet()
{
  if (thumbnailIndex + 1 <= thumbnailSetMaxNumber){
    document.getElementById("image_list" + thumbnailIndex).style.display = 'none';
    thumbnailIndex++;
    document.getElementById("image_list" + thumbnailIndex).style.display = 'inline-block';
  }
  else {
    document.getElementById("image_list" + thumbnailIndex).style.display = 'none';
    document.getElementById("image_list1").style.display = 'inline-block';
    thumbnailIndex = 1;
  }
}

//Toggles the dropdown content of a section whenever it is clicked.
//NOTE: For the html the section content NEEDS to have its own id.
function toggleContent(content)
{
    content.classList.toggle("show");
}

var content;

function swapContent()
{
    if(content)
    {
        content.classList.toggle("show");
    }
    content = document.getElementById(document.getElementById("SelectBox").value);
    content.classList.toggle("show");
}
