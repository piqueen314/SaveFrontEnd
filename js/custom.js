$( document).ready(function(){
    //get rid of unwanted

    //$("div.headerBody").find("a").removeClass("ui-button");
   // $("div.headerBody").closest("a").removeClass("ui-widget");
    //$("div.headerBody").find("h1").addClass("test");
    $("div.headerBody").find("a").removeClass("ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only");
    $("button").remove();
    $("div.headerBody").closest("a").removeAttr("button");
    //$(".ui-widget").removeClass(".ui-widget");
    //(#element").className = $("#element").className.replace(/\bui-.*?\b/g, '');
    //java script for tags
    $(function() {
        $( "#tabs" ).tabs();
    });
    $(function() {
        $( "input[type=submit], a, button" )
            .button()
            .click(function( event ) {
                event.preventDefault();
            });
    });


	
})


