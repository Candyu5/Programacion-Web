/* la estructura mas reciente que debo usar siempre para funciones*/
/* funciones anonimas de tipo flecha */

const sumar = () => {
    let n1 = document.getElementById("txtn1").value
    let n2 = document.getElementById("txtn2").value
    let s = parseFloat(n1) + parseFloat(n2)
    document.getElementById("resultado_suma").innerHTML=" la suma es de: " + s
    /* console.log ("la suma es de: " + s) */ /* para mostrar por consola */
    /* alert (" la suma es de: " + s) */ /* para mostrar por alerta */

}

const restar = () => {
    let n1 = document.getElementById("txtn1").value
    let n2 = document.getElementById("txtn2").value
    let s = parseFloat(n1) - parseFloat(n2)
    document.getElementById("resultado_resta").innerHTML=" la resta es de: " + s
}

const multiplicar = () => {
    let n1 = document.getElementById("txtn1").value
    let n2 = document.getElementById("txtn2").value
    let s = parseFloat(n1) * parseFloat(n2)
    document.getElementById("resultado_multiplicar").innerHTML=" la multiplicacion es de: " + s
}

const dividir = () => {
    let n1 = document.getElementById("txtn1").value
    let n2 = document.getElementById("txtn2").value
    let s = parseFloat(n1) / parseFloat(n2)
    document.getElementById("resultado_dividir").innerHTML=" la divicion es de: " + s
}

const limpiar = () => {
    /* esto es para que cuando se le de al boton de limpiar */
    /* agrege una cadena vacia para borrar el contenido */
    
    document.getElementById("resultado_suma").innerHTML=""
    document.getElementById("resultado_resta").innerHTML=""
    document.getElementById("resultado_multiplicar").innerHTML=""
    document.getElementById("resultado_dividir").innerHTML=""
}