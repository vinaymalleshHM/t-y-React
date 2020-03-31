window.onload = search();
function search(){
    var x = document.querySelector('.search').value;
    var api = "https://api.openweathermap.org/data/2.5/weather?q="+x+"&units=metric&appid=af50bbd7309f973b6a2318253e78ad20";
    var img = "https://source.unsplash.com/900x1500/?nature";
    $.getJSON(img);
    document.querySelector('.bg').src = img;
    $.getJSON(api, response);
}
function response(data){
    var d = new Date();
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    document.querySelector('.place').innerHTML = data.name;
    document.querySelector('.temperature').innerHTML = data.main.temp+"°C";
    document.querySelector('.main').innerHTML = data.weather[0].main;
    document.querySelector('.maxmin_temp').innerHTML = data.main.temp_max+"°C / "+data.main.temp_min+"°C";
    document.querySelector('.date').innerHTML = days[d.getDay()]+", "+months[d.getMonth()]+" "+d.getDate()+", "+d.getFullYear();
}