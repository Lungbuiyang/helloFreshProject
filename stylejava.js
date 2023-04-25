// owl carousel
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})

// dark mode
// var icon = document.getElementById("moonIcon");
//     icon.onclick = function(){
//         document.body.classList.toggle("dark-theme");
//         if(document.body.classList.contains("dark-theme")){
//             icon.src = "sun.png";
//         }else{
//             icon.src = "moon.png";
//         }
//     }

function changeMode(){
    let mybody = document.body;
    mybody.classList.toggle('mydark');
}
