function redirect(content) {
    $("#pagecontent").load(content)
}

$(document).ready(function(){
    //define the scroll variable
    var scroll_pos = 0;
    $(document).scroll(function() {
        scroll_pos = $(this).scrollTop();
        // If the scroll is higher than 48, there is a shadow effect added
        if(scroll_pos > 48) {
            $("#navtitletitle").css('box-shadow', '0px 0px 10px black');
        } else {
            $("#navtitletitle").css('box-shadow', 'none');
        }
        console.log(scroll_pos)
    });
});