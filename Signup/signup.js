 function copyToClipboard(element) {
  var $temp = $("<input>");
  var container = document.getElementById("CopyText");
  container.innerHTML = "Email copied onto clipboard.";
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}
