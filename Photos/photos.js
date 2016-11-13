

function deleteRow(){
  document.getElementById("image_table").deleteRow(0);
}

//Be sure to have your file names numbered. Everything has to have the same base file name.
//You can modify this function to take in a different directory instead.
function fillImages(filename, filepath, maxphotos, height, width, tableID)
{
  deleteRow();
  var tableRef = document.getElementById(tableID);
  var row;
  var cell;
      row =  tableRef.insertRow();
  var bfinished = false;
  var counter = 1;
  while(!bfinished)
  {
    cell = row.insertCell();
    //cell.innerHTML="New Cell";
    var new_img = document.createElement("IMG");
    //window.alert(filename + counter);
    new_img.setAttribute("src", filepath + filename + counter + ".jpg");
    new_img.setAttribute("height", height);
    new_img.setAttribute("width", width);
    new_img.setAttribute("display", "block");
    //document.getElementById("image_container").appendChild(new_img);
    cell.appendChild(new_img);
    //counter++;
    if(++counter == maxphotos)
      bfinished = true;
  }
}
