var keyCode = new Array();
var elem_num = 0;

jQuery.fn.rand_inv = function() {
  //  var invTrue = Math.floor(Math.random()*2); (essentially the same?)
    var invTrue = Math.round(Math.random());
    console.log(invTrue);
    $(this).toggleClass(function() {
        if(invTrue) {
            return "inv";
        }
        //to prevent the display from getting stuck in a two-phase pattern
        else {
            return "vis";
        }
    });
};

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
    $("#popup_link").click(function() {
        var auto_w = window.open("../t_o_content_auto/t_o_content_auto.html","Automatic Content!"/*,"type=fullWindow,fullscreen"*/);
        auto_w.focus(); //just in case!
    });
    $('button').click(function() {
        $('#one').rand_inv();
        $('#two').rand_inv();
        $('#three').rand_inv();
        $('#four').rand_inv();
        $('#five').rand_inv();
        $('#six').rand_inv();
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