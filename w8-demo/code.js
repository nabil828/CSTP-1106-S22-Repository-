function f1(){
    tmp = jQuery("#x").val()
    jQuery("#z").html(tmp)
}

function setup(){
    console.log("setup() got called!");
    jQuery("#y").click(f1)

}

$(document).ready(setup)