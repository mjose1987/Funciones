function factorial() {
    var n = parseInt(prompt("ingresa un numero"));
    var f = 1;
    for (var i = 1; i <= n; i++) {
        f *= i;

    }
    document.write("el factorial es " + f);
}
function fechaActual() {
    //declarar variable
    var fecha = new Date();
    document.write("Hoy es " + fecha.getDate() + '/' + (fecha.getMonth() + 1) + '/' + fecha.getFullYear());

}
function mostrar(){
    alert("la variable se incremento,0")
    

}
function mostrar1(){
    var nom=document.getElementById('nombre').value;
    var ed=document.getElementById('edad').value;
    alert("ingreso el nombre: "+nom);
    alert("y la edad: "+ed);
}

function menu(){
    document.write("1.- Suma <br> 2.- Factorial<br>3.- Fecha actual");

}
function casos(){
    var op=parseInt(document.getElementById("txtOp").value);
    alert("Selecciono la opcion:"+op);
    switch(op){
        case 1:
            factorial();
            break;
            case 2:
                fechaActual();
                break;
                case 3:
                    mostrar1();
                    break;
    }
}