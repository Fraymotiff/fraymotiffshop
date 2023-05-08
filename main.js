

let search = document.getElementById('user').onclick = () =>{
    search.classList.toggle('userbx.active');
}



let user = document.getElementById('#user').onclick = () =>{
    search.classList.toggle('active');
}




let contador = 1;

setInterval( function(){
    document.getElementById('slide' + contador).checked = true;
    contador++;

    if(counter > 5 ) {
        contador = 1;
    }
}, 3000 );


