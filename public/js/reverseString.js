
$(document).ready(function(){
    $("form").submit(function(e){
       e.preventDefault();
       var strToBeReversed = $('#string').val();
       var reversedString = reverseStringWord(strToBeReversed);
       $("#reversedString").text("" + reversedString);
    });

    $("#string").keypress(function(){
       var strToBeReversed = $('#string').val();
       var reversedString = reverseStringWord(strToBeReversed);
       $("#reversedString").text("" + reversedString);
    });

     $("#string").keyup(function(){
       var strToBeReversed = $('#string').val();
       var reversedString = reverseStringWord(strToBeReversed);
       $("#reversedString").text("" + reversedString);
    });
});
function reverseStringWord(str){
  // first we need to split the string into an array of it's component substrings

   str = str.split(" ");

  // initialise variable reverseString where the newly reversed string will be stored.

   var reversedString = " ";
   
   // looping through the array of substrings
   for( var i = str.length-1; i >=0 ; i--){
   	
   	// push the current substring into reversedString

      reversedString += str[i] + " ";
     
   }
   // return the newly reversed string
    return reversedString;
  
}

