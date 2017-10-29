FillImages("flyer", "Images/", 4, "396px", "306px");
AttachInfoModals();
fillUnorderedImages("test", "Images/", 3, "20px", "20px");

/*
Fills images based on these parameters:
filename: The base name of the set of photos.
filepath: The existing path of the photos.
maxphotos: Maximum amount of photos to display (Don't go over the amount that's in the folder)
height: Height of each photo.
width: Width of each photo.

How this works is that it'll create a new image and set its source to be the filename + some counter
starting from 0. It'll keep doing it until it reaches the max amount of photos to be displayed.

NOTE: MAKE SURE YOUR FILE EXTENSIONS ARE .JPG. Want to use a different file type? Change the part with the .jpg with the desired file type. But be warned, all photos still need to be of that file type.
*/
/*Note: You need to make a table on your html file with an id of "image_table".
Note: I would keep a folder of active images and only use that folder and replace them whenever needed. It'll make things easier to manage your photos/text.*/
function FillImages(filename, filepath, maxphotos, height, width)
{
    var row;
    var cell;
    var bfinished = false;
    counter = 0;
    var image_div = document.getElementById("image_div");
    while(!bfinished)
    {
        //Create a new div and set its attributes here.
        var new_div = document.createElement('div');
        new_div.style.margin = '30px';
        new_div.style.display = 'inline-block';
        
        //Create a new image. We'll set the source/height/width here.
        var new_img = document.createElement("IMG");
        new_img.setAttribute("src", filepath + filename + counter + ".jpg");
        new_img.setAttribute("height", height);
        new_img.setAttribute("width", width);
        AttachImageModal(new_img);
        
        //Add it onto the div.
        new_div.appendChild(new_img);
        
        //We'll create a new caption for each image and constrain it to the width of it.
        //This div will have the text filled out.
        var figCap = document.createElement('div');
        figCap.style.width = width;
        figCap.style.display = 'table-caption';
        figCap.innerHTML = FillOuterText(counter) + "</br>"; //The </br> tag is used to force a new line 
                                                        //for the button.
        
        //Create a new button under each text.
        var next_btn = document.createElement("IMG");
        next_btn.setAttribute("src", "Assets/ViewMoreButton.png");
        next_btn.setAttribute("class", "next_button");
        figCap.appendChild(next_btn);
        
        //Add the text onto the image div and add that to the image folder.
        new_div.appendChild(figCap);
        image_div.appendChild(new_div);
        if(++counter == maxphotos)
        {
            bfinished = true;
        }
    }
}

//Does the same thing as fillImages except for the Unordered List. See above for more info.
function fillUnorderedImages(filename, filepath, maxphotos, height, width)
{
    var listRef = document.getElementById("image_list");
    var bfinished = false;
    counter = 0;
    
    while(!bfinished)
    {
        var new_list_item = document.createElement("li");
        var new_img = document.createElement("IMG");

        //Generate Image
        new_img.setAttribute("src", filepath + filename + counter + ".jpg");
        new_img.setAttribute("height", height);
        new_img.setAttribute("width", width);
        
        //Append the image onto the list item
        new_list_item.appendChild(new_img);
        
        //Append the list item onto the unordered list
        listRef.appendChild(new_list_item);
        if(++counter == maxphotos)
        {
            bfinished = true;
        }
    }
    
}


/* Modal Functions Here */

var imageModal = document.getElementById("ImageModal");
var modalImg = document.getElementById("modalimg");
function AttachImageModal(input_img)
{
    (function ()
    {
        input_img.addEventListener("click", function(){
        FadeIn(imageModal);
        modalImg.src = this.src;
        }, false);
    }());
}


//Get the modal
var modal = document.getElementById("InfoModal");
var modalHeader = document.getElementById("Modal_Header");
var modalText = document.getElementById("Modal_Description");

function AttachInfoModals()
{
    var buttons = document.getElementsByClassName("next_button");
    
    for(var i = 0; i < buttons.length; i++)
    {
        (function ()
        {
            var k = i;
            buttons[i].addEventListener("click", function(){
            FadeIn(modal);
            FillInnerText(k);
            }, false);
        }());
    }
}

//If the user clicks outside of any modal window, close it.
window.onclick = function(event)
{
  if(event.target == modal)
  {
      FadeOut(modal);
  }
  else if(event.target == imageModal)
  {
      FadeOut(imageModal);
  }
}

function FadeIn(element)
{
  var op = 0.1;
  element.style.display = 'block';
  var timer = setInterval(function () {
    if (op >= 1){
      clearInterval(timer);
    }
    element.style.opacity = op;
    op += op * 0.5;
  }, 30);
}

function FadeOut(element)
{
  var op = 1;
  var timer = setInterval(function () {
    if (op <= 0.1){
      clearInterval(timer);
      element.style.display = 'none';
    }
    element.style.opacity = op;
    op -= op * 0.3;
  }, 30);
}

/*
Returns some string based on an id. We use this to populate our second column for our descriptions.
Note: Try to keep the text length about the same for all the pictures. Less text is fine, but don't have one box have a large length of text. It'll look weird on the page for obvious reasons, so keep it consistent.

Html Tip: <br> = new line
*/
function FillOuterText(id)
{
    if(id == 0)
    {
        return "Come see the amazine new events we have planned! Join a project and/or start your own. Snacks and pizza WILL be provided.";
    }
    else if(id == 1)
    {
        return "We provide the minecraft accounts, you play around and make/play through spooky levels! We will all hang out, have fun, and snacks WILL be provided!";
    }
    else if(id == 2)
    {
        return "Meep meep!What is Gamespawn? Well, let me tell you. Gamespawn is a game development club that focuses on making video games. We have a series of workshops that will help teach you how to become a video game developer. You don't need any experience to do this. I am going to keep adding more text because  this div height isn't going any further than I would like it. Oh just kidding. Looks like adding a bunch of exclamation marks somehow just ruins the expansion.";
    }
    else if(id == 3)
    {
        return "Wow we got 4What is Gamespawn? Well, let me tell you. Gamespawn is a game development club that focuses on making video games. We have a series of workshops that will help teach you how to become a video game developer. You don't need any experience to do this. I am going to keep adding more text because  this div height isn't going any further than I would like it. Oh just kidding. Looks like adding a bunch of exclamation marks somehow just ruins the expansion..";
    }
    else if(id == 4)
    {
        return "What is Gamespawn? Well, let me tell you. Gamespawn is a game development club that focuses on making video games. We have a series of workshops that will help teach you how to become a video game developer. You don't need any experience to do this. I am going to keep adding more text because  this div height isn't going any further than I would like it. Oh just kidding. Looks like adding a bunch of exclamation marks somehow just ruins the expansion."
    }
}

/*Fills the inner modal text in case the outer text has too many words to say. If anything, you can just copy and paste the outer text into the inner text. */
function FillInnerText(index)
{
  if(index == '0')
  {
      
      modalHeader.innerHTML = "Second General Meeting"
      
      modalText.innerHTML = "Come see the amazine new events we have planned! Join a project and/or start your own. Snacks and pizza WILL be provided.";
  }
  else if(index == '1')
  {
      modalHeader.innerHTML = "Minecraft Halloween Social"
      modalText.innerHTML = "We provide the minecraft accounts, you play around and make/play through spooky levels! We will all hang out, have fun, and snacks WILL be provided!";
  }
  else if(index == '2')
  {
      modalHeader.innerHTML = "Mineblock Theater FunTime!"
      modalText.innerHTML = "AHHH";
  }
  else if(index == '3')
  {
      modalHeader.innerHTML = "Kyaa-athon at BournsA265!"
      modalText.innerHTML = "Blah blah blah";
  }
  else if(index == '4')
  {
      modalHeader.innerHTML = "Finals studying event thing"
      modalText.innerHTML = "OMGOMG";
  }
}
