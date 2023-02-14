const button =querySelector('button');
button.addEventListener('click', () => {
        function Enviar(){
        var lado1= parseFloat(document.querySelector("#num1").value);
        var lado2= parseFloat(document.querySelector("#num2").value);
        var lado3= parseFloat(document.querySelector("#base").value);
        if((lado1 >= lado2 + lado3) || (lado2 >= lado1 + lado3 )|| (lado3 >= lado1 + lado2)){
            window.alert('não é um triângulo')
        }
    else if (lado1 == lado2&& lado2 == lado3){
        window.alert('é um triângulo equilátero')
    }else if ((lado1 == lado2 && lado1 != lado3)|| (lado2 == lado3 && lado2 != lado1)||( lado1 == lado3 && lado1 != lado2)){
        window.alert('é um triângulo isósceles')
    }else if( lado1 != lado2 && lado2 != lado3 ){
        window.alert('é um triângulo escaleno')
}else{
    window.alert('Erro')
} 

S = (lado1+lado2+lado3)/2
h = Math.sqrt(S*(S-lado1)*(S-lado2)*(S-base))* base/2
d = Math.sqrt(Math.pow(h, 2) + Math.pow(lado1, 2))
e = Math.sqrt(Math.pow(h, 2) + Math.pow(lado2, 2))


    const tri = document.querySelector('.arrow-up');
    tri.style.borderLeftWidth = d;
    tri.style.borderRightWidth = e;
    tri.style.borderBottomWidth = h;
}

})