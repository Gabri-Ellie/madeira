function isEmpty(str) {

    return (!str || str.length === 0);
    
} 

function enviar() {

    var a = parseInt(document.getElementById("num1").value);
    var b = parseInt(document.getElementById("num2").value);
    var c = parseInt(document.getElementById("base").value);

    if (
        isEmpty(a) ||
        isEmpty(b) ||
        isEmpty(c)
    ) {
        window.alert("insira valores válidos");
        return;
    }
    if ((a >= b + c) || (b >= a + c) || (c >= a + b)) {
        window.alert('não é um triângulo');
    } else if (a != b && b != c && a != c) {
        window.alert('é um triângulo escaleno');
    } else if (a == b && b == c && a == c) {
        window.alert('é um triângulo equilátero');
    } else if ((a == b && a != c) || (b == c && b != a) || (a == c && a != b)) {
        window.alert('é um triângulo isósceles');
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
    tri.style.borderLeft = `${parseFloat(d)}cm solid transparent`;
    tri.style.borderRight = `${parseFloat(e)}cm solid transparent`;
    tri.style.borderBottom = `${parseFloat(h)}cm solid darkblue`;

}
function limpar() {

    document.getElementById("num1").value = '';
    document.getElementById("num2").value = '';
    document.getElementById("base").value = '';
}