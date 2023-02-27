function enviar(event) {
    //event.preventDefault();
    var a = parseInt(document.querySelector("#num1").value);
    var b = parseInt(document.querySelector("#num2").value);
    var c = parseInt(document.querySelector("#base").value);
    if ((a >= b + c) || (b >= a + c) || (c >= a + b)) {
        window.alert('não é um triângulo');
    }
    else if (a == b && b == c) {
        window.alert('é um triângulo equilátero');
    } else if ((a == b && a != c) || (b == c && b != a) || (a == c && a != b)) {
        window.alert('é um triângulo isósceles');
    } else if (a != b && b != c) {
        window.alert('é um triângulo escaleno');
    } else {
        window.alert('Erro');
    }
    s = (a + b + c) / 2;
    console.log(s);
    h = Math.sqrt(s * (s - a) * (s - b) * (s - c)) / (c / 2);
    console.log(h);
    d = Math.sqrt(Math.pow(a, 2) - Math.pow(h, 2));
    console.log(d);
    e = Math.sqrt(Math.pow(b, 2) - Math.pow(h, 2));
    console.log(e);

    const tri = document.querySelector('.arrow-up');
    tri.style.borderLeft = `${parseInt(d)}cm solid transparent`;
    tri.style.borderRight = `${parseInt(e)}cm solid transparent`;
    tri.style.borderBottom = `${parseInt(h)}cm solid pink`;

}
function limpar(event) {

    l1= document.getElementById("num1").value='';
    l2= document.getElementById("num2").value='';
    l3= document.getElementById("base").value='';

}