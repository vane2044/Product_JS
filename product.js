function addValue(){
    // get the operands value
    var operand1 = document.getElementById("inp1").value;
    var operand2 = document.getElementById("inp2").value;

   // parse to float
   val1 = parseFloat(operand1, 10);
   val2 = parseFloat(operand2, 10);

    // perform operation
    var result = val1 + val2;
    
    document.getElementById("product").value = document.getElementById("inp1").value + " + " + document.getElementById("inp2").value + " = " + result;

}
function productValue(){
    // get the operands value
    var operand1 = document.getElementById("inp1").value;
    var operand2 = document.getElementById("inp2").value;

     // parse to float
     val1 = parseFloat(operand1, 10);
     val2 = parseFloat(operand2, 10);
 

     // perform operation
     var result = val1 * val2;
     document.getElementById("product").value = document.getElementById("inp1").value + " X " + document.getElementById("inp2").value + " = " + result;


}

function divisionValue(){
    // get the operands value
    var operand1 = document.getElementById("inp1").value;
    var operand2 = document.getElementById("inp2").value;

     // parse to float
     val1 = parseFloat(operand1, 10);
     val2 = parseFloat(operand2, 10);
 
 

     // perform operation
     var result = val1 / val2;
     document.getElementById("product").value = document.getElementById("inp1").value + " / " + document.getElementById("inp2").value + " = " + result;

}


