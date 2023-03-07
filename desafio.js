var inputA = document.getElementById("num1");
var inputB = document.getElementById("num2");
var inputC = document.getElementById("base");
var t1 = document.getElementById("texto1");
var t2 = document.getElementById("texto2")
var Base = document.getElementById("quadl1");
var Altura = document.getElementById("quadl2");
function isEmpty(str) {

    return (!str || str.length === 0);

}
function hidequad() {
    document.getElementById("tra").style.display = "flex";
    document.getElementById("quad").style.display = "none";
}
function hidetrig() {
    document.getElementById("tra").style.display = "none";
    document.getElementById("quad").style.display = "flex";
}


function trig() {

    var a = parseInt(inputA.value);
    var b = parseInt(inputB.value);
    var c = parseInt(inputC.value);

    if (
        isEmpty(a) ||
        isEmpty(b) ||
        isEmpty(c)
    ) {
        t1.textContent = "insira valores válidos";

        return;
    }
    if ((a >= b + c) || (b >= a + c) || (c >= a + b)) {
        t1.textContent = 'não é um triângulo';
    } else if (a != b && b != c && a != c) {
        t1.textContent = 'é um triângulo escaleno';
    } else if (a == b && b == c && a == c) {
        t1.textContent = 'é um triângulo equilátero';
    } else if ((a == b && a != c) || (b == c && b != a) || (a == c && a != b)) {
        t1.textContent = 'é um triângulo isósceles';
    } else {
        t1.textContent = 'Erro';
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
    tri.style.borderLeft = `${parseFloat(d)}cm solid transparent`;
    tri.style.borderRight = `${parseFloat(e)}cm solid transparent`;
    tri.style.borderBottom = `${parseFloat(h)}cm solid darkblue`;

}
function quad() {
    var ba = parseFloat(Base.value);
    var al = parseFloat(Altura.value);

    if (
        isEmpty(ba) ||
        isEmpty(al)
    ) {
        t2.textContent = "Insira valores válidos";

        return;
    } else if (ba == al) {
        t2.textContent = "É um quadrado";
    } else {
        t2.textContent = "É um retângulo";
    }
    const qua = document.querySelector('.square');
    qua.style.width = `${ba}cm `;
    qua.style.height = `${al}cm`;
    qua.style.backgroundColor = "#7a297a";
}
function limpar() {

    document.getElementById("texto1").textContent = "";
    document.getElementById("texto2").textContent = "";

    inputA.value = '';
    inputB.value = '';
    inputC.value = '';
    Base.value = '';
    Altura.value = '';


    document.querySelector('.arrow-up').style = "none";
    document.querySelector('.square').style = "none";


}
