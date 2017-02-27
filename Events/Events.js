fillImages("test", "Images/", 8, "300px", "300px");
//fillUnorderedImages("test", "Images/", 3, "20px", "20px");

/*
Fills images based on these parameters:
filename: The base name of the set of photos.
filepath: The existing path of the photos.
maxphotos: Maximum amount of photos to display (Don't go over the amount that's in the folder)
height: Height of each photo.
width: Width of each photo.

How this works is that it'll create a new image and set its source to be the filename + some counter
starting from 0. It'll keep doing it until it reaches the max amount of photos to be displayed.
*/
//Note: You need to make a table on your html file with an id of "image_table".
//Note: I would keep a folder of active images and only use that folder and replace them whenever needed. It'll make things easier to manage your photos/text.
function fillImages(filename, filepath, maxphotos, height, width)
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
        
        //Add it onto the div.
        new_div.appendChild(new_img);
        
        //We'll create a new caption for each image and constrain it to the width of it.
        //This div will have the text filled out.
        var figCap = document.createElement('div');
        figCap.style.width = width;
        figCap.style.display = 'table-caption';
        figCap.innerHTML = fillText(counter) + "</br>"; //The </br> tag is used to force a new line 
                                                        //for the button.
        
        //Create a new button under each text.
        var next_btn = document.createElement("IMG");
        next_btn.setAttribute("src", "Assets/ViewMoreButton.png");
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


/*
Returns some string based on an id. We use this to populate our second column for our descriptions.
Note: Try to keep the text length about the same for all the pictures. It'll look weird on the page for obvious reasons, so keep it consistent.
*/
function fillText(id)
{
    if(id == 0)
    {
        return "What is Gamespawn? Well, let me tell you. Gamespawn is a game development club that focuses on making video games. We have a series of workshops that will help teach you how to become a video game developer. You don't need any experience to do this. I am going to keep adding more text because  this div height isn't going any further than I would like it. Oh just kidding. Looks like adding a bunch of exclamation marks somehow just ruins the expansion.";
    }
    else if(id == 1)
    {
        return "Woo!What is Gamespawn? Well, let me tell you. Gamespawn is a game development club that focuses on making video games. We have a series of workshops that will help teach you how to become a video game developer. You don't need any experience to do this. I am going to keep adding more text because  this div height isn't going any further than I would like it. Oh just kidding. Looks like adding a bunch of exclamation marks somehow just ruins the expansion.Woo!What is Gamespawn? Well, let me tell you. Gamespawn is a game development club that focuses on making video games. We have a series of workshops that will help teach you how to become a video game developer. You don't need any experience to do this. I am going to keep adding more text because  this div height isn't going any further than I would like it. Oh just kidding. Looks like adding a bunch of exclamation marks somehow just ruins the expansion.";
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
