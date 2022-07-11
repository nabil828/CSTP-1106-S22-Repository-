function f1() {
    tmp1 = jQuery("#op1").val()
    tmp2 = jQuery("#op2").val()
    tmp1 = Number(tmp1)
    tmp2 = Number(tmp2)
    jQuery("#result").html("Result: " + tmp1 + " + " + tmp2 + " = " + (tmp1 + tmp2))
    $("#history").append(
        "<span class='add_class'>" +
        tmp1 +
        " + " +
        tmp2 +
        " = " +
        (tmp1 + tmp2) +
        "<span>" +
        "<br>"
        )
}
function f2() {
    tmp1 = jQuery("#op1").val()
    tmp2 = jQuery("#op2").val()
    tmp1 = Number(tmp1)
    tmp2 = Number(tmp2)
    jQuery("#result").html("Result: " + tmp1 + " + " + tmp2 + " = " + (tmp1 - tmp2))
    $("#history").append(`<span class='sub_class'>  ${tmp1} - ${tmp2}  =  ${(tmp1 - tmp2)}  <span> <br>`)
}
function f3() {
    tmp1 = jQuery("#op1").val()
    tmp2 = jQuery("#op2").val()
    tmp1 = Number(tmp1)
    tmp2 = Number(tmp2)
    jQuery("#result").html("Result: " + tmp1 + " + " + tmp2 + " = " + (tmp1 * tmp2))
    $("#history").append("<span class='mul_class'>" + tmp1 + " + " + tmp2 + " = " + (tmp1 * tmp2) + "<span>" + "<br>")
}
function f4() {
    tmp1 = jQuery("#op1").val()
    tmp2 = jQuery("#op2").val()
    tmp1 = Number(tmp1)
    tmp2 = Number(tmp2)
    jQuery("#result").html("Result: " + tmp1 + " + " + tmp2 + " = " + (tmp1 / tmp2))
    $("#history").append("<span class='div_class'>" + tmp1 + " + " + tmp2 + " = " + (tmp1 / tmp2) + "<span>" + "<br>")
}


function setup() {
    console.log("setup() got called!");
    jQuery("#add").click(f1)
    jQuery("#sub").click(f2)
    jQuery("#mul").click(f3)
    jQuery("#div").click(f4)

}

$(document).ready(setup)