
var enelm = document.getElementById("view");


var opac = 0.1;
var opacup=true;
renderLoop();

      function renderLoop() {
        setTimeout(function() {
          if(opacup==true)
             {opac+=0.1;
              if(opac>=1)opacup=false;
             }
         if(opacup==false)
             {opac-=0.1;
              if(opac<=0.3) opacup=true;
             }
        vielm.style.opacity = opac;
       
     
          
        window.requestAnimationFrame(renderLoop); 
        },300);
      }