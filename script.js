function showNavigatorInfo() {
    var info = 'Navigator:\n';
    info += 'appName: ' + navigator.appName + '\n';
    info += 'product: ' + navigator.product + '\n';
    info += 'appVersion: ' + navigator.appVersion + '\n';
    info += 'userAgent: ' + navigator.userAgent + '\n';
    info += 'platform: ' + navigator.platform + '\n';
    info += 'language: ' + navigator.language;
    alert(info);
}

function showWindowInfo() {
    var info = 'Window:\n';
    info += 'innerHeight: ' + window.innerHeight + '\n';
    info += 'innerWidth: ' + window.innerHeight;
    alert(info);
}

function showScreenInfo() {
    var info = 'Screen:\n';
    info += 'width: ' + screen.width + '\n';
    info += 'height: ' + screen.height + '\n';
    info += 'availWidth: ' + screen.availWidth + '\n';
    info += 'availHeight: ' + screen.availHeight + '\n';
    info += 'colorDepth: ' + screen.colorDepth + '\n';
    info += 'pixelDepth: ' + screen.pixelDepth;
    alert(info);
}

function showLocationInfo() {
    var info = 'Location:\n';
    info += 'href: ' + location.href + '\n';
    info += 'hostname: ' + location.hostname + '\n';
    info += 'pathname: ' + location.pathname + '\n';
    info += 'protocol: ' + location.protocol;
    alert(info);
}

function showGeolocationInfo() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var info = 'Geolocation:\n';
            info += 'Latitude: ' + position.coords.latitude + '\n';
            info += 'Longitude: ' + position.coords.longitude;
            alert(info);
        }, function(error) {
            alert('Geolocation error: ' + error.message);
        });
    } else {
        alert('Geolocation is not supported by your browser.');
    }
}