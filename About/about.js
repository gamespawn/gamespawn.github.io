var acc = document.getElementsByClassName("accordion");
var i;
var scrollSpeed = 1;
var stopTimer = 300;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
            panel.style.maxHeight = null;
        } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        //Scrolls to the credits view based on its scroll speed. Use small numbers for a smooth transition.
        var scroller = setInterval(scrollToBottom, scrollSpeed);
        //The above function happens every millisecond. Although it doesn't seem to impact performance, this is here to shut down the function after the stopTimer's duration (in ms). However, do note that you must stop the function AFTER the transition animation ends (See .css file for time of transition.)
        setTimeout(function( ) { clearInterval( scroller ); }, stopTimer);
        } 


    }
}

function scrollToBottom ()
{
   document.getElementById("Credits").scrollIntoView();
}


