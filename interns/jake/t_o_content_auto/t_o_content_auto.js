var keyCode = new Array();
var elem_num = 0;

jQuery.fn.rand_inv = function() {
  //  var invTrue = Math.floor(Math.random()*2); (essentially the same?)
    var invTrue = Math.round(Math.random());
//    console.log(invTrue);     //for debug
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

changes = function() {
    $('#one').rand_inv();
    $('#two').rand_inv();
    $('#three').rand_inv();
    $('#four').rand_inv();
    $('#five').rand_inv();
    $('#six').rand_inv();
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
    var randomize=setInterval("changes()",500);
    $("button").click(function() {
        clearInterval(randomize);
    });
});