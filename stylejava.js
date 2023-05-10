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
function changeMode() {
    let mybody = document.body;
    mybody.classList.toggle('mydark');
}


// coupon pop up
window.addEventListener("load", function () {
    setTimeout(
        function open(event) {
            document.querySelector(".popup").style.display = "block";
        },
        2000
    )
});
document.querySelector("#close").addEventListener("click", function () {
    document.querySelector(".popup").style.display = "none";
});


// geolocation
let x = document.getElementById('out');
let y = document.getElementById('weather');
function geolocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition)
    } else {
        x.innerText = "Geo Not Supported"
    }
}

function showPosition(data) {
    console.log(data)
    let lat = data.coords.latitude
    let lon = data.coords.longitude
    // x.innerText = `Latitude is ${lat} and longitude is ${lon}`
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;
    //api calling
    fetch(url, { method: 'GET' })
        //return promise
        .then((res) => res.json())
        //resolve the promise
        .then((data) => {
            console.log(data)
            let cityName = data.city.name;
            let temp = data.list[0].temp.day + " °C"
            y.innerText = `${cityName} ${temp}`
        })
}