var rect = document.querySelector("#box");
rect.addEventListener("mousemove", function(details){
   var rectloc =  rect.getBoundingClientRect();
   var insiderect = details.clientX - rectloc.left;
//    console.log(details.clientX - rectloc.left);
if(insiderect < rectloc.width){
    console.log("hi");
    var ops = gsap.utils.mapRange(0,rectloc.width, 0, 1, details.clientX);
};
gsap.to(rect,{
    opacity: ops
   
})
}); 
