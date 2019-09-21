var variable1 = document.getElementById("demo1");
        function getlocation(){
                navigator.geolocation.getCurrentPosition(showLoc);
        }
        function showLoc(pos){
                variable1.innerHTML = "Latitude: " + pos.coords.latitude +
                "<br>Longitude: " + pos.coords.longitude;
            } 
