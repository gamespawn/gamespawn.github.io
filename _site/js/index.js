// $(() => {
//     $('#hero-image').addClass('image-loaded');
//     console.log("Hi");
// });

window.onload = (event) => {
    console.log("YAARG");
    setTimeout(function(){
        console.log("yohooo");
        $('#preloader').velocity({
            opacity : 0.1,
            translateY: "-80px"
        }, {
            duration: 400,
            complete: function(){
            $('#hola').velocity({
            translateY : "-110%"
        }, {
            duration: 1000,
            easing: [0.7,0,0.3,1],
            complete: function(){
                console.log("Hi2");
                $('.indexEverything').addClass('animate-border divide');
                $('#hola').velocity({
                    translateY : "-150%"
                });
            }
        })  
            }
        })
    },1000)

};

