var milista = ['Tomate','Lechuga'];
var lista = document.getElementById('lista');
var input = document.getElementById('input');
var btnAgregar = document.getElementById('agregar');

const agregarElemento = () =>{
    lista.innerHTML = '';
    var nombre = input.value;
    for(var i = 0;i < milista.length;i++)
    {
        if(milista[i] == nombre)
        {
            alert('Ya se encuentra ese elemento');
            break;
        }
        else if(milista[i] != nombre && i == milista.length-1)
        {
            milista.push(nombre); 
            break;  
        }
    }   
    if(milista.length == 0)
    {
        milista.push(nombre); 
    }      
    dibujarLista(milista);
    input.value = '';
}
const editarElemento = (elemento) => {
    var nuevo = prompt('Ingrese nuevo to-do:'); 
    if(nuevo != null)
    {
        for(var i = 0;i < milista.length;i++)
        {
            if(milista[i] == elemento.id)
            {
                for(var x = 0;x < milista.length;x++)
                {
                    if(milista[x] == nuevo)
                    {
                        alert('Este to-do ya existe, pruebe con otro!')
                        nuevo = prompt('Ingrese nuevo to-do:');
                        milista[i] = nuevo;
                        break;
                    }
                    else if(milista[x] != nuevo && x == milista.length-1)
                    {
                        milista[i] = nuevo;
                        break;
                    }
                }
            }
        }
        lista.innerHTML = '';
        dibujarLista(milista); 
    } 
    else{
        alert('No se ingreso nada!');
    }
}

const eliminarElemento = (boton) => {
    var nuevoArray = removerDelArray(boton.id);
    lista.innerHTML = '';
    dibujarLista(nuevoArray);
    milista = nuevoArray;
}

const removerDelArray = (item) =>{
    return milista.filter(e => e != item);
}

const dibujarLista = (array) => {
    array.forEach(x => {
        var liElemento = document.createElement('li');
        var btnEditar = document.createElement('button');
        var btnEliminar = document.createElement('button');
        liElemento.innerText = x;
        btnEliminar.id = x;
        btnEditar.id = x;
        btnEditar.innerText = 'Editar';
        btnEliminar.innerText = 'Eliminar';
        btnEditar.setAttribute('onclick','editarElemento(this)');
        btnEliminar.setAttribute('onclick','eliminarElemento(this)');
        liElemento.classList.add('list-group-item');
        btnEditar.type = 'button';
        btnEliminar.type = 'button';
        btnEditar.classList.add("btn","btn-warning","btn-sm","position-absolute","top-0","end-0");
        btnEliminar.classList.add("btn","btn-danger","btn-sm","position-absolute","top-0","end-0");
        liElemento.append(btnEditar,btnEliminar);
        lista.append(liElemento);
    });
}