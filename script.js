
// window.addEventListener("mousemove", function (dets) {
//     let rect = document.querySelector("react")
//     let xval = gsap.utils.mapRange(
//         0,
//         window.innerWidth, 
//         200 + rect.getBoundingClientRect().width / 2, 
//         window.innerWidth - (200 + rect.getBoundingClientRect().width/2),

//         dets.clientX
// );


//     gsap.to("#react", {
//         left: xval + "px",
//         ease: Power3
//     });
// });


window.addEventListener("mousemove", function (event) {
    let rect = document.querySelector("#react"); // Corrected selector to match ID
    let xval = gsap.utils.mapRange(
        0,
        window.innerWidth,
        100 + rect.getBoundingClientRect().width / 2,
        window.innerWidth - (100 + rect.getBoundingClientRect().width / 2),
        event.clientX
        
    );

    gsap.to("#react", {
        left: xval + "px", // Added "px" to specify units
        ease: Power3 // Corrected ease function
    });
});
