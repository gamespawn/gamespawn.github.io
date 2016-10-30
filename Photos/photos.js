fillImages("");

//Be sure to have your file names numbered. Everything has to have the same base file name.
//You can modify this function to take in a different directory instead.
function fillImages(filename)
{
  var tableRef = document.getElementById("image_table");
  var row;
  var cell;
      row =  tableRef.insertRow();
  window.alert("Weeee");
  var bfinished = false;
  var counter = 1;
  while(!bfinished)
  {
    cell = row.insertCell();
    //cell.innerHTML="New Cell";
    var new_img = document.createElement("IMG");
    //window.alert(filename + counter);
    new_img.setAttribute("src", "HN/" + filename + counter + ".jpg");
    new_img.setAttribute("height", "5%");
    new_img.setAttribute("width", "auto");
    //document.getElementById("image_container").appendChild(new_img);
    cell.appendChild(new_img);
    //counter++;
    if(++counter == 8)
    {
      bfinished = true;
    }
  }
}
