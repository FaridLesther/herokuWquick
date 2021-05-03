alertas = document.getElementsByClassName('alerta');
for (let i = 0; i < alertas.length; i++) {
    alertas[i].click();
}

nombre = document.getElementById('id_nombre');
nombre.value = fNombre;

apellido = document.getElementById('id_apellido');
apellido.value = fApellido;

descripcion = document.getElementById('txt-descripcion');
descripcion.value = fDescripcion;
descripcion.style = 'max-width: 100%; border: 1px dotted #848484; height: 120px;'

telefono = document.getElementById('id_telefono');
telefono.value = fTelefono;

correo = document.getElementById('id_correo');
correo.value = fCorreo;

profesion = document.getElementById('id_profesion');
profesion.value = fProfesion;

xp = document.getElementById('id_xp');
xp.value = fXp;

guardarEditar = document.getElementById('btn-guardar')
guardarEditar.onclick = (evento) => {
    evento.preventDefault();
    var listaIdiomas = document.getElementById('id_idiomas').options;
    for (let i = 0; i < listaIdiomas.length; i++) {
        listaIdiomas[i].selected = false;
    }
    idiomas = document.querySelectorAll('input[type="checkbox"]');
    idiomas.forEach(chk_idioma => {
        if (chk_idioma.checked) {
            listaIdiomas[chk_idioma.value].selected = true;
        }
    });

    document.getElementById('frm-editarfreelancer').submit();
}