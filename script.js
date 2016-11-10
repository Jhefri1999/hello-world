$(document).ready(function(){
    $("img").mouseenter(function(){
        $("img").fadeTo("slow", 1);
    });
    $("img").mouseleave(function(){
        $("img").fadeTo("fast", 0.5);
    });
});    