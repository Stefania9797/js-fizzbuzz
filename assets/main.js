//Scrivi un programma che stampi i numeri da 1 a 100,
for(var i=1; i<101; i++){
    //Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
    if(i% 3==0 && i% 5==0 ){
        console.log("FizzBuzz");
        document.getElementById("lista_numeri").innerHTML +='<li>' + 'FizzBuzz' + '</li>';
    }
    //ma per i multipli di 3 stampi “Fizz” al posto del numero 
    else if(i % 3 == 0){
        console.log("Fizz");
        document.getElementById("lista_numeri").innerHTML += '<li>' + 'Fizz' + '</li>';
    }
    //e per i multipli di 5 stampi Buzz.
    else if(i % 5 == 0){
        console.log("Buzz");
        document.getElementById("lista_numeri").innerHTML += '<li>' + 'Buzz' + '</li>';
    }
    else{
        console.log(i);
        document.getElementById("lista_numeri").innerHTML +=  '<li>' + i + '</li>';
    }
}