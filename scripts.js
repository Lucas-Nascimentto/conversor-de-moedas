const button = document.querySelector("button");

function convert(){
    const firstSelect = document.getElementById("first-select").value;
    const secondSelected = document.getElementById("second-selected").value;
    const input = document.querySelector("input").value;
    const finalNameCurrency = document.getElementById("final-currency-name");
    const finalImageCurrency = document.getElementById("final-image-currency");
    const initialImageCurrency = document.getElementById("initial-image-currency");
    const initialNameCurrency = document.getElementById("initial-currency-name")
    const dolar = 5.87;
    const euro = 6.27; 
    const libra = 7.31;
    const bitcoin = 604631.48; 

    switch(firstSelect){
        case "real":
            if(firstSelect && secondSelected === "real"){
                document.getElementById("result-money").innerHTML = new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(input);
                document.getElementById("starting-currency").innerHTML = new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(input);
                finalNameCurrency.innerHTML = "Real"
                finalImageCurrency.src = "./assets/brasil 2.png" 
                initialImageCurrency.src= "./assets/brasil 2.png"
                initialNameCurrency.innerHTML = "Real";
           }
        
           if(firstSelect && secondSelected === "dolar"){
                document.getElementById("result-money").innerHTML = new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'USD'}).format(input/dolar);
                document.getElementById("starting-currency").innerHTML = new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(input);
                finalNameCurrency.innerHTML = "Dólar"
                finalImageCurrency.src = "./assets/estados-unidos (1) 1.png" 
                initialImageCurrency.src= "./assets/brasil 2.png"
                initialNameCurrency.innerHTML = "Real";
            }
        
            if(firstSelect && secondSelected === "euro"){
                document.getElementById("result-money").innerHTML = new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'EUR'}).format(input/euro);
                document.getElementById("starting-currency").innerHTML = new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(input);
                finalNameCurrency.innerHTML = "Euro"
                finalImageCurrency.src = "./assets/euro.png" 
                initialImageCurrency.src= "./assets/brasil 2.png"
                initialNameCurrency.innerHTML = "Real";
            }
        
            if(firstSelect && secondSelected === "libra"){
                document.getElementById("result-money").innerHTML = new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'GBP'}).format(input/libra);
                document.getElementById("starting-currency").innerHTML = new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(input);
                finalNameCurrency.innerHTML = "Libra"
                finalImageCurrency.src = "./assets/libra 1.png" 
                initialImageCurrency.src= "./assets/brasil 2.png"
                initialNameCurrency.innerHTML = "Real";
            }
            if(firstSelect && secondSelected === "bitcoin"){
                document.getElementById("result-money").innerHTML = new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BTC'}).format(input/bitcoin);
                document.getElementById("starting-currency").innerHTML = new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(input);
                finalNameCurrency.innerHTML = "Bitcoin"
                finalImageCurrency.src = "./assets/bitcoin 1.png" 
                initialImageCurrency.src= "./assets/brasil 2.png"
                initialNameCurrency.innerHTML = "Real";
            }
        break;  

        case "dolar":
            if(firstSelect && secondSelected === "real"){
                document.getElementById("result-money").innerHTML = new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(input * dolar);
                document.getElementById("starting-currency").innerHTML = new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'USD'}).format(input);
                finalNameCurrency.innerHTML = "Real"
                finalImageCurrency.src = "./assets/brasil 2.png" 
                initialImageCurrency.src= "./assets/estados-unidos (1) 1.png"
                initialNameCurrency.innerHTML = "Dólar";
           }
        
           if(firstSelect && secondSelected === "dolar"){
                document.getElementById("result-money").innerHTML = new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'USD'}).format(input);
                document.getElementById("starting-currency").innerHTML = new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'USD'}).format(input);
                finalNameCurrency.innerHTML = "Dólar"
                finalImageCurrency.src = "./assets/estados-unidos (1) 1.png" 
                initialImageCurrency.src= "./assets/estados-unidos (1) 1.png"
                initialNameCurrency.innerHTML = "Dólar";
            }
        
            if(firstSelect && secondSelected === "euro"){
                document.getElementById("result-money").innerHTML = new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'EUR'}).format(input * 0.936);
                document.getElementById("starting-currency").innerHTML = new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'USD'}).format(input);
                finalNameCurrency.innerHTML = "Euro"
                finalImageCurrency.src = "./assets/euro.png" 
                initialImageCurrency.src= "./assets/estados-unidos (1) 1.png"
                initialNameCurrency.innerHTML = "Dólar";
            }
        
            if(firstSelect && secondSelected === "libra"){
                document.getElementById("result-money").innerHTML = new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'GBP'}).format(input * 0.803);
                document.getElementById("starting-currency").innerHTML = new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'USD'}).format(input);
                finalNameCurrency.innerHTML = "Libra"
                finalImageCurrency.src = "./assets/libra 1.png" 
                initialImageCurrency.src= "./assets/estados-unidos (1) 1.png"
                initialNameCurrency.innerHTML = "Dólar";
            }
            if(firstSelect && secondSelected === "bitcoin"){
                document.getElementById("result-money").innerHTML = new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BTC'}).format(input * 0.0000097);
                document.getElementById("starting-currency").innerHTML = new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'USD'}).format(input);
                finalNameCurrency.innerHTML = "Bitcoin"
                finalImageCurrency.src = "./assets/bitcoin 1.png" 
                initialImageCurrency.src= "./assets/estados-unidos (1) 1.png"
                initialNameCurrency.innerHTML = "Dólar";
            }
        break;  

        case "euro":
            if(firstSelect && secondSelected === "real"){
                document.getElementById("result-money").innerHTML = new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(input * euro);
                document.getElementById("starting-currency").innerHTML = new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'EUR'}).format(input);
                finalNameCurrency.innerHTML = "Real"
                finalImageCurrency.src = "./assets/brasil 2.png" 
                initialImageCurrency.src= "./assets/euro.png"
                initialNameCurrency.innerHTML = "Euro";
           }
        
           if(firstSelect && secondSelected === "dolar"){
                document.getElementById("result-money").innerHTML = new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'USD'}).format(input * 1.07);
                document.getElementById("starting-currency").innerHTML = new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'EUR'}).format(input);
                finalNameCurrency.innerHTML = "Dólar"
                finalImageCurrency.src = "./assets/estados-unidos (1) 1.png" 
                initialImageCurrency.src= "./assets/euro.png"
                initialNameCurrency.innerHTML = "Euro";
            }
        
            if(firstSelect && secondSelected === "euro"){
                document.getElementById("result-money").innerHTML = new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'EUR'}).format(input);
                document.getElementById("starting-currency").innerHTML = new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'EUR'}).format(input);
                finalNameCurrency.innerHTML = "Euro"
                finalImageCurrency.src = "./assets/euro.png" 
                initialImageCurrency.src= "./assets/euro.png"
                initialNameCurrency.innerHTML = "Euro";
            }
        
            if(firstSelect && secondSelected === "libra"){
                document.getElementById("result-money").innerHTML = new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'GBP'}).format(input * 0.858);
                document.getElementById("starting-currency").innerHTML = new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'EUR'}).format(input);
                finalNameCurrency.innerHTML = "Libra"
                finalImageCurrency.src = "./assets/libra 1.png" 
                initialImageCurrency.src= "./assets/euro.png"
                initialNameCurrency.innerHTML = "Euro";
            }
            if(firstSelect && secondSelected === "bitcoin"){
                document.getElementById("result-money").innerHTML = new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BTC'}).format(input * 0.0000104);
                document.getElementById("starting-currency").innerHTML = new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'EUR'}).format(input);
                finalNameCurrency.innerHTML = "Bitcoin"
                finalImageCurrency.src = "./assets/bitcoin 1.png" 
                initialImageCurrency.src= "./assets/euro.png"
                initialNameCurrency.innerHTML = "Euro";
            }
        break;  

        case "libra":
            if(firstSelect && secondSelected === "real"){
                document.getElementById("result-money").innerHTML = new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(input * libra);
                document.getElementById("starting-currency").innerHTML = new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'GBP'}).format(input);
                finalNameCurrency.innerHTML = "Real"
                finalImageCurrency.src = "./assets/brasil 2.png" 
                initialImageCurrency.src= "./assets/libra 1.png"
                initialNameCurrency.innerHTML = "Libra";
           }
        
           if(firstSelect && secondSelected === "dolar"){
                document.getElementById("result-money").innerHTML = new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'USD'}).format(input * 1.24);
                document.getElementById("starting-currency").innerHTML = new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'GBP'}).format(input);
                finalNameCurrency.innerHTML = "Dólar"
                finalImageCurrency.src = "./assets/estados-unidos (1) 1.png" 
                initialImageCurrency.src= "./assets/libra 1.png"
                initialNameCurrency.innerHTML = "Libra";
            }
        
            if(firstSelect && secondSelected === "euro"){
                document.getElementById("result-money").innerHTML = new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'EUR'}).format(input * 1.17);
                document.getElementById("starting-currency").innerHTML = new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'GBP'}).format(input);
                finalNameCurrency.innerHTML = "Euro"
                finalImageCurrency.src = "./assets/euro.png" 
                initialImageCurrency.src= "./assets/libra 1.png"
                initialNameCurrency.innerHTML = "Libra";
            }
        
            if(firstSelect && secondSelected === "libra"){
                document.getElementById("result-money").innerHTML = new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'GBP'}).format(input);
                document.getElementById("starting-currency").innerHTML = new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'GBP'}).format(input);
                finalNameCurrency.innerHTML = "Libra"
                finalImageCurrency.src = "./assets/libra 1.png" 
                initialImageCurrency.src= "./assets/libra 1.png"
                initialNameCurrency.innerHTML = "Libra";
            }
            if(firstSelect && secondSelected === "bitcoin"){
                document.getElementById("result-money").innerHTML = new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BTC'}).format(input * 0.0000121);
                document.getElementById("starting-currency").innerHTML = new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'GBP'}).format(input);
                finalNameCurrency.innerHTML = "Bitcoin"
                finalImageCurrency.src = "./assets/bitcoin 1.png" 
                initialImageCurrency.src= "./assets/libra 1.png"
                initialNameCurrency.innerHTML = "Libra";
            }
        break;  

        case "bitcoin":
            if(firstSelect && secondSelected === "real"){
                document.getElementById("result-money").innerHTML = new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(input * bitcoin);
                document.getElementById("starting-currency").innerHTML = new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BTC'}).format(input);
                finalNameCurrency.innerHTML = "Real"
                finalImageCurrency.src = "./assets/brasil 2.png" 
                initialImageCurrency.src= "./assets/bitcoin 1.png"
                initialNameCurrency.innerHTML = "Bitcoin";
           }
        
           if(firstSelect && secondSelected === "dolar"){
                document.getElementById("result-money").innerHTML = new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'USD'}).format(input * 103030.63);
                document.getElementById("starting-currency").innerHTML = new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BTC'}).format(input);
                finalNameCurrency.innerHTML = "Dólar"
                finalImageCurrency.src = "./assets/estados-unidos (1) 1.png" 
                initialImageCurrency.src= "./assets/bitcoin 1.png"
                initialNameCurrency.innerHTML = "Bitcoin";
            }
        
            if(firstSelect && secondSelected === "euro"){
                document.getElementById("result-money").innerHTML = new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'EUR'}).format(input * 96363.53);
                document.getElementById("starting-currency").innerHTML = new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BTC'}).format(input);
                finalNameCurrency.innerHTML = "Euro"
                finalImageCurrency.src = "./assets/euro.png" 
                initialImageCurrency.src= "./assets/bitcoin 1.png"
                initialNameCurrency.innerHTML = "Bitcoin";
            }
        
            if(firstSelect && secondSelected === "libra"){
                document.getElementById("result-money").innerHTML = new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'GBP'}).format(input *  82623.46);
                document.getElementById("starting-currency").innerHTML = new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BTC'}).format(input);
                finalNameCurrency.innerHTML = "Libra"
                finalImageCurrency.src = "./assets/libra 1.png" 
                initialImageCurrency.src= "./assets/bitcoin 1.png"
                initialNameCurrency.innerHTML = "Bitcoin";
            }
            if(firstSelect && secondSelected === "bitcoin"){
                document.getElementById("result-money").innerHTML = new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BTC'}).format(input);
                document.getElementById("starting-currency").innerHTML = new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BTC'}).format(input);
                finalNameCurrency.innerHTML = "Bitcoin"
                finalImageCurrency.src = "./assets/bitcoin 1.png" 
                initialImageCurrency.src= "./assets/bitcoin 1.png"
                initialNameCurrency.innerHTML = "Bitcoin";
            }
        break;  

            

    }
}

button.addEventListener("click", convert);