const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
//for smooth scrooll
// 1-attach loco scroll CSS
// attach locomotive scrollminjs
// some code from github for js

function circle(){
    window.addEventListener("mousemove",function(dets){
    document.querySelector("#mini").style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
    })
}
circle();
//jab mouse move ho to hum skew kar paaye

function page1(){
    var t1=gsap.timeline();

    t1.from("#nav",{
        y:'-10',
        opacity:0,
        ease:Expo.easeInOut,
        duration:2
    }
    )
.to(".elem",{
    y:0,
    ease:Expo.easeInOut,
    duration:2,
    stragger:.2

})
}
//tino element ko select karo uske bad teeno par ek mousemove lagao jab mousemove ho to mouse ki x and y position ka pata karo 
//ab mouse ki x aur y ke badle us image ko show karo aur us image ko move karo fir rotate kro jaise jaise mouse tex waise hi
//rotation tez 
var rotate=0;
var diffrot=0



document.querySelectorAll("#plug").forEach(function(plug) {plug.addEventListener("mousemove",function(dets){
      var diff=(dets.clientY -plug.getBoundingClientRect());
      diffrot= dets.clientX - rotate;
       rotate =dets.clientX;
       plug.addEventListener("mouseleave",function(dets){
        gsap.to(plug.querySelector("img"),{
            opacity:0,
            ease:Power3,
            duration:0.5
    });
    });

        gsap.to(plug.querySelector("img"),{
            opacity:1,
            ease:Power3,
            top:diff,
      //  console.log(dets.clientX,dets.clientY),
        left:dets.clientX,
     rotate:gsap.utils.clamp(-20,20,diffrot*0.3)

        });
    });    
    });
        

page1();