function deleteList(){
  var temp = 2;
  var name = "image_list1";
  var myList = document.getElementById(name);
  myList.innerHTML = '';
  while (temp <= thumbnailSetMaxNumber)
  {
    var name = "image_list" + temp;
    var myList = document.getElementById(name);
    myList.remove();
    temp++;
  }
}


function viewImage(path)
{
  document.getElementById("image_view").src = path;
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
  pictureDeselect.style.marginBottom = "20px";
  var pictureSelect = document.getElementById(index);
  pictureSelect.style.marginBottom = "30px";
  currentSelectedPicture = index;
  photoIndex = index;
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
  listRef.style.display = 'inline-block';
  var bfinished = false;
  var counter = 0;

  //View the first image in the gallery
  viewImage(filepath + filename + 1 + ".jpg");
  currentSelectedPicture = 1;
  //Load in pictures
  while(!bfinished)
  {
    if(++counter > maxphotos)
    {
      bfinished = true;
      continue;
    }
    var new_list_item = document.createElement("li");
    new_list_item.setAttribute('class', 'imageList');
    new_list_item.setAttribute('id', counter);
    var new_img = document.createElement("IMG");

    //Set Attributes
    new_img.setAttribute("src", filepath + filename + counter + ".jpg");
    new_img.setAttribute("height", height);
    new_img.setAttribute("width", width);
    new_img.setAttribute("display", "block");
    new_img.onclick = (function ()
    {
        var k = counter;
        new_img.addEventListener("click", function(){
        viewImage(this.src);
        toggleSelected(k);
        }, false);
    }());
    //Append image onto list item
    new_list_item.appendChild(new_img);

    //Append the list item onto the unordered list
    listRef.appendChild(new_list_item);

    if (counter % 7 == 0){ //create a new ul if u have more than 7 pictures
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
  toggleSelected(1);
  document.getElementById('thumbnailPages').innerHTML = thumbnailIndex + "/" + thumbnailSetMaxNumber;
}
function checkCorrectThumbnail()
{
    var currentPictureThumbnail;
    if (photoIndex % 7 == 0) currentPictureThumbnail = photoIndex / 7;
    else currentPictureThumbnail = parseInt(photoIndex / 7) + 1;
    if ((currentPictureThumbnail != thumbnailIndex))
    {
      document.getElementById("image_list" + thumbnailIndex).style.display = 'none';
      document.getElementById("image_list" + currentPictureThumbnail).style.display = 'inline-block';
      thumbnailIndex = currentPictureThumbnail;
      document.getElementById('thumbnailPages').innerHTML = thumbnailIndex + "/" + thumbnailSetMaxNumber;
    }
}
function prevImage()
{
    if (photoIndex % 7 == 1) prevThumbnailSet();
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
    checkCorrectThumbnail();
}

function prevThumbnailSet()
{
  if (thumbnailIndex - 1  >= 1)
  {
    document.getElementById("image_list" + thumbnailIndex).style.display = 'none';
    thumbnailIndex--;
    document.getElementById("image_list" + thumbnailIndex).style.display = 'inline-block';
  }
  else
  {
    document.getElementById("image_list" + thumbnailIndex).style.display = 'none';
    document.getElementById("image_list" + thumbnailSetMaxNumber).style.display = 'inline-block';
    thumbnailIndex = thumbnailSetMaxNumber;
  }
  document.getElementById('thumbnailPages').innerHTML = thumbnailIndex + "/" + thumbnailSetMaxNumber;
}

function nextThumbnailSet()
{
  if (thumbnailIndex + 1 <= thumbnailSetMaxNumber)
  {
    document.getElementById("image_list" + thumbnailIndex).style.display = 'none';
    thumbnailIndex++;
    document.getElementById("image_list" + thumbnailIndex).style.display = 'inline-block';
  }
  else
  {
    document.getElementById("image_list" + thumbnailIndex).style.display = 'none';
    document.getElementById("image_list1").style.display = 'inline-block';
    thumbnailIndex = 1;
  }
  document.getElementById('thumbnailPages').innerHTML = thumbnailIndex + "/" + thumbnailSetMaxNumber;

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
