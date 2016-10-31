

fillImages("test", "Images/", 3, "500px", "500px");

/*
Fills images based on these parameters:
filename: The base name of the set of photos.
filepath: The existing path of the photos.
container: ID of the element that is going to house all the photos
maxphotos: Maximum amount of photos to display (Don't go over the amount that's in the folder)
height: Height of each photo.
width: Width of each photo.

How this works is that it'll create a new image and set its source to be the filename + some counter
starting from 0. It'll keep doing it until it reaches the max amount of photos to be displayed.
*/

//Note: I would keep a folder of active images and only use that folder and replace them whenever needed. It'll make things easier to manage your photos/text.
function fillImages(filename, filepath, maxphotos, height, width)
{
    var tableRef = document.getElementById("image_table");
    var row;
    var cell;
    var bfinished = false;
    counter = 0;
    
    while(!bfinished)
    {
        row = tableRef.insertRow();
        cell = row.insertCell();
        var new_img = document.createElement("IMG");
        new_img.setAttribute("src", filepath + filename + counter + ".jpg");
        new_img.setAttribute("height", height);
        new_img.setAttribute("width", width);
        cell.appendChild(new_img);
        //This is for the text
        cell = row.insertCell();
        cell.innerHTML = fillText(counter);
        cell.setAttribute("valign","top");
        
        
        if(++counter == maxphotos)
        {
            bfinished = true;
        }
    }
}

/*
Returns some string based on an id. We use this to populate our second column for our descriptions.
*/
function fillText(id)
{
    if(id == 0)
    {
        return "What is Gamespawn? Well, let me tell you. Gamespawn is a game development club that focuses on making video games. We have a series of workshops that will help teach you how to become a video game developer. You don't need any experience to do this.  And best of all, it's free!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!";
    }
    else if(id == 1)
    {
        return "Woo!";
    }
    else if(id == 2)
    {
        return "Meep meep!";
    }
    else if(id == 3)
    {
        return "Wow we got 3.";
    }
    
    
}
