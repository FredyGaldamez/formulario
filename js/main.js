$(document).ready(function() {

    $('#btnSend').click(function(){

   var validar =" ";

   if ($('#nombre').val() ==''){
   validar += '<p>Escriba su nombre</p>'
   }
   if ($('#apellido').val() ==''){
   validar += '<p>Escriba su apellido</p>'
   }
   if ($('#rut').val() ==''){
   validar += '<p>Escriba su rut</p>'
    }


    if (validar===""==false) {
        var mensajeModal = '<div class="modal_wrap">'+
        '<div class="mensaje_modal">'+
        '<h3>Falta de Información</h3>'+
        validar+
        '<span id="btnClose">Cerrar</span>'
       '</div>'+
        '</div>'
        $('body').append(mensajeModal)
    }
    $('#btnClose').click(function(){
        $('.modal_wrap').remove();
    });

});
    
});


