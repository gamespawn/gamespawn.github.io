FillImages("flyer", "Images/", 7, "306px", "396px");
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
        return "Network with fellow game developers at Gamespawn! Have fun while making new friends. Snacks will be provided. This event will happen after the first general meeting.";
    }
    else if(id == 1)
    {
        return "Meet and greet with Obsidian Entertainment's Game Developer, Roby Atadero, a UCR almunus. Learn how he became successful and what goes on inside a game development company. We will be giving away copies of Pillars of Eternity ($45 value) as prizes for trivia and a raffle (while supplies last).";
    }
    else if(id == 2)
    {
        return "We provide the minecraft accounts, you play around and make/play through spooky levels! We will all hang out, have fun, and snacks WILL be provided!";
    }
    else if(id == 3)
    {
        return "Take a break from studying and come play super smash brothers with other Gamespawn and Highlander Gaming Students! All the consoles, games and snacks will be provided.";
    }
    else if(id == 4)
    {
        return "Come listen to a guest speaker from Blizzard and learn how it is to work in one of the biggest video game developers right here in L.A. County. This is your chance to meet and find out how to you can work there too!"
    }
    else if(id == 5)
    {
        return "Come join Gamespawn and IEEE at our official Thanksgiving potluck. Feel free to bring your favorite dish! Make sure to show up to the Blizzard Tech talk on the same day!"
    }
    else if(id == 6)
    {
        return "Relieve finals stress at the Round 1 Arcade! If you need a ride, our drivers will meet up at Bytes (in WCH) by 7 PM before heading to Round 1 in Moreno Valley Mall. Bring your own $. All you need is $10 to play unlimited arcade games for 1 hour! For those that are in need of carpool, please sign up in the link below: https://docs.google.com/forms/d/e/1FAIpQLSeIo6SC_WMYANQt7SHI4dMY9Y0DZNhN_YiT58OiuQ7l2BRLUw/viewform?usp=sf_link"
    }
}

/*Fills the inner modal text in case the outer text has too many words to say. If anything, you can just copy and paste the outer text into the inner text. */
function FillInnerText(index)
{
  if(index == '0')
  {
      
      modalHeader.innerHTML = "Board Game Social"
      
      modalText.innerHTML = "Network with fellow game developers at Gamespawn! Have fun while making new friends. Snacks will be provided. This event will happen after the first general meeting.";
  }
  else if(index == '1')
  {
      modalHeader.innerHTML = "Obsidian Tech Talk"
      modalText.innerHTML = "Meet and greet with Obsidian Entertainment's Game Developer, Roby Atadero, a UCR almunus. Learn how he became successful and what goes on inside a game development company. We will be giving away copies of Pillars of Eternity ($45 value) as prizes for trivia and a raffle (while supplies last).";
  }
  else if(index == '2')
  {
      modalHeader.innerHTML = "Minecraft Halloween Social"
      modalText.innerHTML = "We provide the minecraft accounts, you play around and make/play through spooky levels! We will all hang out, have fun, and snacks WILL be provided!";
  }
  else if(index == '3')
  {
      modalHeader.innerHTML = "Smash Social"
      modalText.innerHTML = "Take a break from studying and come play super smash brothers with other Gamespawn and Highlander Gaming Students! All the consoles, games and snacks will be provided.";
  }
  else if(index == '4')
  {
      modalHeader.innerHTML = "Blizzard Tech Talk"
      modalText.innerHTML = "Come listen to a guest speaker from Blizzard and learn how it is to work in one of the biggest video game developers right here in L.A. County. This is your chance to meet and find out how to you can work there too!";
  }
  else if(index == '5')
  {
      modalHeader.innerHTML = "Thanksgiving Potluck"
      modalText.innerHTML = "Please Sign up with what you are bringing here: https://docs.google.com/spreadsheets/d/1B_nlXPrx1qSZTlHZ4fMZ_IkQ3vsnuFKaIsQzGkWW75M/edit#gid=0";
  }
  else if(index == '6')
  {
      modalHeader.innerHTML = "Round 1 Social"
      modalText.innerHTML = "For those that are in need of carpool, please sign up in the link below: https://docs.google.com/forms/d/e/1FAIpQLSeIo6SC_WMYANQt7SHI4dMY9Y0DZNhN_YiT58OiuQ7l2BRLUw/viewform?usp=sf_link";
  }
}
