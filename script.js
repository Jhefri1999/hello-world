$(document).ready(function(){
    $("img").mouseenter(function(){
        $("img").fadeTo("slow", 1);
    });
    $("img").mouseleave(function(){
        $("img").fadeTo("slow", 0.5);
    });
    $('#button').click(function(){
        var toAdd = $('input[name=checkListItem]').val();
    })
})    
$(document).ready(function() {
    $('input').focus(function(){
        $(this).css('outline-color','#FF0000')
    });
});
$(document).ready(function() {
    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {

        case 37:
    $('img').animate({left: "-=10px"},'fast');
        break;
        case 38:
    $('img').animate({top: "-=10px"},'fast');
        break;
        case 39:
    $('img').animate({left: "+=10px"},'fast');
        break;
        case 40:
    $('img').animate({top: "+=10px"},'fast');
        break;
        };
    });
});