window.alert("hi");
//checksrc("test");

fillImages("test");

//Be sure to have your file names numbered. Everything has to have the same base file name.
//You can modify this function to take in a different directory instead.
function fillImages(filename)
{
  window.alert("Weeee");
  var bfinished = false;
  var counter = 0;
  while(!bfinished)
  {
    var new_img = document.createElement("IMG");
    new_img.setAttribute("src", "Images/" + filename + counter + ".jpg");
    new_img.setAttribute("height", "500px");
    new_img.setAttribute("width", "500px");
    document.getElementById("image_container").appendChild(new_img);
    //counter++;
    if(++counter == 3)
    {
      bfinished = true;
    }
  }
}

//Use  this piece of code to makes thing work
function checksrc(filename)
{
    var bfinished = false;
    var counter = 0;
    while(!bfinished)
    {
      var img = new Image();
      img.onload = function ()
      {
          document.getElementById("image_container").appendChild(img);
      };
      img.onerror = function()
      {
        window.alert("Error: Invalid path.");
        return;
      }
      img.src = "Images/" + filename + counter + ".jpg";
      img.setAttribute("height", "500px");
      img.setAttribute("width", "500px");
      counter++;
      if(counter == 3)
      {
        bfinished = true;
      }
    }

}
