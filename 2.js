
window.addEventListener("mousemove",function(details){
    var rect = document.querySelector("#rect");
    var rectloc = rect.getBoundingClientRect();
    var finalrect = gsap.utils.mapRange(0,window.innerWidth,100+rectloc.width/2 ,window.innerWidth-(100+rectloc.width/2), details.clientX );
    gsap.to("#rect",{
        left: finalrect,
        ease: Power3,
    });
});