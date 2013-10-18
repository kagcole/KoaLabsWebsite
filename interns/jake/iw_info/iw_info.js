var keyCode = new Array();
var elem_num = 0;

$(document).ready(function(){
    $(document).keydown(function(key) {
        console.log(key.which);
        keyCode[elem_num] = parseInt(key.which,10);
    //    if(keyCode.length===10) {
        if(keyCode.length>=10) {
            console.log(keyCode.toString());
            //if(keyCode.toString()==="38,38,40,40,37,39,37,39,66,65") {
            if((keyCode.toString()).search("38,38,40,40,37,39,37,39,66,65")!=-1) {
                alert("Here, have a rabbit:\n    ()  ()\n   (=\'.\'=)\n c(\")_(\")");
                keyCode.length=0;
                elem_num=0;
            }
            if(keyCode.length>75) {
                window.location.reload();
            }
            //keyCode.length=0;
            //elem_num=0;
        }
       // else {
            elem_num++;
    //    }
    });
    $("#useless_button").click(function() {
        confirm("Do you really want to click the useless button?");
    });
    $("ul.subnav").parent().append("<span></span>"); //Only shows drop down trigger when js is enabled (Adds empty span tag after ul.subnav*)
	
	//    $("ul.topnav li span").click(function() { //When trigger is clicked...
$("ul.topnav li span").hover(function() {
		
		//Following events are applied to the subnav itself (moving subnav up and down)
		$(this).parent().find("ul.subnav").slideDown('fast').show(); //Drop down the subnav on click

		$(this).parent().hover(function() {
		}, function(){	
			$(this).parent().find("ul.subnav").slideUp('slow'); //When the mouse hovers out of the subnav, move it back up
		});

		//Following events are applied to the trigger (Hover events for the trigger)
		}).hover(function() { 
			$(this).addClass("subhover"); //On hover over, add class "subhover"
		}, function(){	//On Hover Out
			$(this).removeClass("subhover"); //On hover out, remove class "subhover"
	});

});