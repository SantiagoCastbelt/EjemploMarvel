function createToElement(nombreTag){
    return document.createElement(nombreTag);
}




function crearElementoConTexto(nombreTag, texto){
        var elemento = createToElement(nombreTag);
        var textoElemento = document.createTextNode(texto);
        elemento.appendChild(textoElemento);
        return elemento;
}

function adiccionarHijo(padre, hijo){

    padre.appendChild(hijo);

}
function adiccionarABody(hijo){

    adiccionarHijo(document.body,hijo);

}
function crearImagen(urlImagen){

    var img = createToElement("img");
    img.src = urlImagen;
    return img;



}