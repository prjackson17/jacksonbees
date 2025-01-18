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
    var logo = document.getElementById("logo");
    var h2 = header.querySelectorAll("h2");
    var scrollTop = document.documentElement.scrollTop;

    // Calculate the scale factor based on scroll position
    var scaleFactor = Math.max(0.5, 1 - scrollTop / 200);

    // Apply the scale factor to the header elements
    header.style.padding = `${10 * scaleFactor}px 0`;
    logo.style.width = scaleFactor === 0.5 ? '120px' : `${100 * scaleFactor}px`;
    logo.style.height = "auto";
    h2.forEach(function(h2) {
        h2.style.fontSize = `${1 * scaleFactor}rem`;
        h2.style.opacity = scaleFactor === 0.5 ? '0' : '1';
    });

    // Add or remove the 'center-logo' class based on the scale factor
    if (scaleFactor === 0.5) {
        header.classList.add('center-logo');
    } else {
        header.classList.remove('center-logo');
    }
};