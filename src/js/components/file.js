var fileInput  = document.querySelector( ".input-file" ),  
    button     = document.querySelector( ".input-file-trigger" ),
    buttontxt     = document.querySelector( ".input-file-trigger-txt" );
      
button.addEventListener( "keydown", function( event ) {  
    if ( event.keyCode == 13 || event.keyCode == 32 ) {  
        fileInput.focus();  
    }  
});
button.addEventListener( "click", function( event ) {
   fileInput.focus();
   return false;
});  
fileInput.addEventListener( "change", function( event ) {  
    buttontxt.innerHTML = this.value;  
});  