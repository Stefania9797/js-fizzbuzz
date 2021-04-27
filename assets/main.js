//Scrivi un programma che stampi i numeri da 1 a 100,
for(var i=1; i<101; i++){
    if(i % 3 == 0){
        console.log("Fizz");
    }
    else if(i % 5 == 0){
        console.log("Buzz");
    }
        console.log(i);
    
}
//ma per i multipli di 3 stampi “Fizz” al posto del numero 
//e per i multipli di 5 stampi Buzz.
//Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.