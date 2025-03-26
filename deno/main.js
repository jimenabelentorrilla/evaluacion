const multiplicar = (x, y) => x * y ;

function calcularMultiplicacion(a, b, multiplicar) {
    let resultado = multiplicar(a, b);

    console.log("Resultado de la multiplicación:", resultado);
}

calcularMultiplicacion(3, 7, multiplicar);