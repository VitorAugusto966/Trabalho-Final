function scrollPara(id) {
    
    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, 800, function () {
      window.location.hash = id;
    });

}
function gerenciarAltoContraste(){
    console.log("funcao gerenciar alto contraste");
    
    var corAtual, elementoBody;

   
    elementoBody = document.getElementsByTagName("body")[0]; 
    
    corAtual = elementoBody.style.backgroundColor;      
    console.log("cor atual: " + corAtual);
    
    if(corAtual == "black"){ 
        elementoBody.style.backgroundColor = "white"; 
        elementoBody.style.color = "black";
               
    } else {
        elementoBody.style.backgroundColor = "black";    
        elementoBody.style.color = "white";    
       

    }
    
    
}
function minhascores(){
    console.log("funcao gerenciar alto contraste");
    
    var corAtual, elementoBody;

    
    elementoBody = document.getElementsByTagName("body")[0]; 
    
    corAtual = elementoBody.style.backgroundColor;         
    console.log("cor atual: " + corAtual);
    
    if(corAtual == "white"){
        elementoBody.style.backgroundColor = "lightpink"; 
        elementoBody.style.color = "white";  
        
    } else {
        elementoBody.style.backgroundColor = "white";    
        elementoBody.style.color = "black";
                 
    }
}






window.onload = function(){ 

    console.log("documento carregado..");

    
    $("#irParaSecao0").on("click", function () {
        console.log("funcao ir para secao 0 acionada..");
        scrollPara("#secao0");
    });

    $("#irParaSecao1").on("click", function () {
        console.log("funcao ir para secao 1 acionada..");
        scrollPara("#secao1");
    });

    $("#irParaSecao2").on("click", function () {
        console.log("funcao ir para secao 2 acionada..");
        scrollPara("#secao2");
    });
    $("#irParaSecao3").on("click", function () {
        console.log("funcao ir para secao 3 acionada..");
        scrollPara("#secao3");
    });
    $("#irParaSecao3").on("click", function () {
        console.log("funcao ir para secao 4 acionada..");
        scrollPara("#secao4");
    });
    $("#irParaSecao5").on("click", function () {
        console.log("funcao ir para secao 5 acionada..");
        scrollPara("#secao5");
    });
    $("#irParaSecao6").on("click", function () {
        console.log("funcao ir para secao 6 acionada..");
        scrollPara("#secao6");
    });
    $("#irParaSecao7").on("click", function () {
        console.log("funcao ir para secao 7 acionada..");
        scrollPara("#secao7");
    });
    document.getElementById("opAltoContraste").addEventListener("click", gerenciarAltoContraste);
    document.getElementById("opMinhasCores").addEventListener("click", minhascores);


}