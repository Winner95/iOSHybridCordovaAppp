var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        var targetUrl = "**URL**";

        if(window.plugins) {
            window.plugins.webviewcolor.change('#7000e2');
        }
 
        window.location.replace(targetUrl);
    }
};

app.initialize();