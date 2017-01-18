/**
 * file: main.js
 */


    require("../sass/app.scss");
    
document.addEventListener("DOMContentLoaded", function (dclEvent) {

    var fontReq = new XMLHttpRequest();

    fontReq.addEventListener("load", function(loadEvent) {
        
        /* Add the css content to the page */
        var styleElem = document.createElement("style")
        styleElem.type = "text/css";
        styleElem.textContent = this.responseText;
        document.head.appendChild(styleElem);

        document.body.className = "fadeIn";
        document.body.style.opacity = 1;
    });

    fontReq.open("GET", "https://fonts.googleapis.com/css?family=Comfortaa|Roboto", true);
    fontReq.send();

});