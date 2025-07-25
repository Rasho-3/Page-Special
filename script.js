const form = document.getElementById('specialForm');

const datosCorrectos = {
  name: ["jennifer", "gustavo"],
  ageByName: {
    jennifer: 19,
    gustavo: 18
  },
  placeMet: ["2022"],
  whereStartedKeyword: "galera"
};

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Ocultar todos los mensajes de error antes de validar
  document.querySelectorAll('.error').forEach(el => el.style.display = 'none');

  let valid = true;

  // Nombre ingresado en minúsculas y sin espacios extra
  const nombreIngresado = form.name.value.trim().toLowerCase();

  // Validar nombre
  if (!datosCorrectos.name.includes(nombreIngresado)) {
    document.getElementById('nameError').style.display = 'block';
    valid = false;
  }

  // Validar edad según el nombre:
  // Solo si el nombre es válido comprobamos la edad para evitar errores
  if (datosCorrectos.ageByName.hasOwnProperty(nombreIngresado)) {
    const edadIngresada = parseInt(form.age.value, 10);
    const edadValida = datosCorrectos.ageByName[nombreIngresado];
    if (edadIngresada !== edadValida) {
      document.getElementById('ageError').style.display = 'block';
      valid = false;
    }
  } else {
    // Si el nombre no está en el objeto edadPorNombre (nombre inválido),
    // igual mostramos error para edad (opcional)
    document.getElementById('ageError').style.display = 'block';
    valid = false;
  }

  // Validar lugar donde se conocieron (acepta varios lugares, aquí "2022")
  if (!datosCorrectos.placeMet.includes(form.placeMet.value.trim().toLowerCase())) {
    document.getElementById('placeMetError').style.display = 'block';
    valid = false;
  }

  // Validar palabra clave en dónde empezó la relación
  if (!form.whereStarted.value.trim().toLowerCase().includes(datosCorrectos.whereStartedKeyword)) {
    document.getElementById('whereStartedError').style.display = 'block';
    valid = false;
  }

  if (valid) {
    alert("Todos los datos son correctos, Bienvenida señorita berrinchuda jsja");
    
    form.reset();

    window.location.href = 'juegos.html';
  } else {
    alert("Algún dato es incorrecto, por favor revise.");
  }
});
