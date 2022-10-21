$(document).ready(function () {
    //Pagina navegacion
    var i = $(".i");
    var s = $(".s");
    var t = $(".t");
    var c = $(".c");
    var boton = $("#id");
    let barra = $("#barra");
    let x = $('#x');
    let men = $('#men');
  
    //lista de navegacion
    var b_i = $("#b-i");
    var b_s = $("#b-s");
    var b_t = $("#b-t");
    var b_c = $("#b-c");

    //Paginas cuerpo
    var inicio = $("#cuerpo");
    var sobre = $("#mic");
    var trabajo = $("#grid-p");
    var contacto = $("#redes");
    //Acordion 

    //Inicio 
   
    i.click(() => {
        inicio.show("slow");
        sobre.hide("scale");
        trabajo.hide("fast");
        contacto.hide("explode");
        men.hide('fast');
        x.hide('fast');
        barra.show('fast');
    });

    //Sobre mi
    s.click(() => {
        inicio.hide("explode");
        sobre.show("scale");
        trabajo.hide("fast");
        contacto.hide("slow");
        men.hide('fast');
        x.hide('fast');
        barra.show('fast');
    });
    //Trabajos
    t.click(() => {
        inicio.hide("explode");
        sobre.hide("sclae");
        trabajo.show("fast");
        contacto.hide("slow");
        men.hide('fast');
        x.hide('fast');
        barra.show('fast');
    });
    //Contacto
    c.click(() => {
        inicio.hide("explode");
        sobre.hide("sclae");
        trabajo.hide("fast");
        contacto.show("slow");
        men.hide('fast');
        x.hide('fast');
        barra.show('fast');
    });
    //Trabajos boton
    boton.click(() => {
        inicio.hide("explode");
        sobre.hide("scale");
        trabajo.show("fast");
        contacto.hide("slow");
        men.hide('fast');
        x.hide('fast');
        barra.show('fast');
    });

    //Barra de navegacion
    barra.click(() => {
        men.show('fast');
        barra.hide('fast');
        x.show('fast');
    });

    x.click(()=>{
        men.hide('fast');
        barra.show('fast');
        x.hide('fast');
    });

})