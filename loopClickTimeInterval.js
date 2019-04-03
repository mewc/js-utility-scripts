var i = 1;                    
var maxCount = 100;
var objectToClick = $('a.btn.btn-icon.pull-right');

function refreshLoop () {           
   setTimeout(function () {    
      console.log('clicked');     
      objectToClick.click();     
      i++;                     
      if (i < maxCount) {            
        refreshLoop();             
      }                       
   }, 10000)
}

refreshLoop();