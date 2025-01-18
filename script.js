document.getElementById('openMaps').onclick = function() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
    if (/android/i.test(userAgent)) {
        window.open("https://maps.app.goo.gl/pmvy6sK2oqkyY1Du6", "_blank"); // For Android, Google Maps
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        window.open("https://maps.apple.com/?address=16%20Brookshire%20Ln,%20Penfield,%20NY%20%2014526,%20United%20States&ll=43.136511,-77.453613&q=Jackson%20Bees", "_blank"); // For iOS, Apple Maps
    } else {
        window.open("https://maps.app.goo.gl/pmvy6sK2oqkyY1Du6", "_blank"); // Default to Google Maps on other platforms
    }
};

// JavaScript to add class on scroll
window.onscroll = function() {
    var header = document.getElementById("header");
    if (document.documentElement.scrollTop > 50) {
        header.classList.add("shrink");
    } else {
        header.classList.remove("shrink");
    }
};