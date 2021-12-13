var joke_url = "http://api.icndb.com/jokes/";
var joke_arr = [];

function getJoke(){

var request = new XMLHttpRequest();

request.open('GET', joke_url, true);

request.onload = function(){

    var data = JSON.parse(this.response);

    if(request.status >= 200 && request.status < 400){

        data.value.forEach(value =>{

            //stored the jokes retreived from the api in an array
            joke_arr.push(value.joke);

            //Manipulate the DOM
            var joke_text = document.getElementById('joke-txt');
            joke_text.innerHTML = joke_arr[randomNumber()];
           
        });
    }

}

request.send();

}

function randomNumber(){

    //generating a random number 
    return Math.floor(Math.random() * 600)+1;
    
}