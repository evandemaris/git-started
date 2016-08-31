"use strict";
document.getElementById("getdata").addEventListener("click", function(){
    var request = new XMLHttpRequest();
    request.addEventListener("load", callback);
    request.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=" 
    + document.getElementById("query").value 
    + "&appid=fe5f5d45ea1527dee5f0ecb59294eb7b&units=imperial");
    request.send();
    
    function callback(){
        var result = JSON.parse(request.responseText);
        var html = "<h3>It is currently ";
        html += result.main.temp;
        html += " degrees Fahrenheit in " + result.name + ", " + result.sys.country + ". </h3><br>This API doesn't offer State differentiation, so you're rolling the dice if you don't specify a State here."
        document.getElementById("results").innerHTML = html;
    }
});