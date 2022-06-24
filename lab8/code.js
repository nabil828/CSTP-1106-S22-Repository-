function calc(operation) { 
  // operation = this.id;
  // console.log("operation:" + event.data.operation)
  // operation = event.data.operation;
  first_op = jQuery('#operand_1').val();
  second_op = jQuery('#operand_2').val()
  first_op_int = parseInt(first_op);
  second_op_int = parseInt(second_op);
  hide_button = "<button class='hide'>Hide this</button>"
  switch (operation){
    case "add_":
      result = first_op_int + second_op_int;
      text = first_op + " +  " + second_op + " = ";
      
      styled_result = "<div id='addStyle'>" + text + result + hide_button + "</div>"; 
      break;
    case "sub_":
      result = first_op_int - second_op_int;
      text = first_op + " - " + second_op + " = ";
      styled_result = "<div id='subStyle'>" + text + result + hide_button + "</div>"; 
      break;
    case "mul_":
      result = first_op_int * second_op_int;
      text = first_op + " * " + second_op + " = ";
      styled_result = "<div id='mulStyle'>" + text + result + hide_button + "</div>"; 
      break;
    case "div_":
      result = first_op_int / second_op_int;
      text = first_op + " / " + second_op + " = ";
      styled_result = "<div id='divStyle'>" + text + result + hide_button +  "</div>"; 
      break;
    default:
      console.log("Something bad happened!");

  }
  // console.log("add function was called")
  
  result = text + result;
  jQuery('#result').html(result);


  
  old_div_content = jQuery('#history').html();
  new_div_content = old_div_content + styled_result ; //+ '<br>';
  jQuery('#history').html(new_div_content); // or use
  //  jQuery('#history').append(styled_result + '<br>');
  // append will add the new content without overwriting
  // the old one
  
}

function hide_(){
  $(this).parent().remove();
}
setup = function() {
  
  jQuery('.button_').click(function (){
    calc(this.id);
  });
  // jQuery('#add_').click({"operation": "add_"},calc);
  
  // jQuery('.button_').on("click",{"operation": this.id},calc);

  // jQuery('.button_').on('click', {"operation": () => {this.id}}, calc);
  // jQuery('.button_').on('click', btn => { $(this).attr('id') }, calc);
  

  jQuery('body').on("click", ".hide", hide_);
  

}

jQuery(document).ready(setup);