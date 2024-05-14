const submitButton = document.getElementById('registerbutton')

submitButton.addEventListener('click', produto.adicionar())

class Produto {

    constructor () {

    }

    adicionar (){

        alert('Vamos adicionar um produto!');
        //...
    }
}

var produto = new Produto();

