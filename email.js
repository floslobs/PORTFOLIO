document.addEventListener('DOMContentLoaded', function() {
    // Inicializa EmailJS con tu Clave Pública
    emailjs.init("10iiouzcrxPlC4cqX");
    
    // Maneja el envío del formulario
    document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
    
      // Envía el formulario usando EmailJS
      emailjs.sendForm('service_80ybvgi', 'template_7knz8e9', this)
        .then(function(response) {
          alert('Correo enviado correctamente');
        }, function(error) {
          console.error('Error al enviar el correo:', error);
          alert('Error al enviar el correo. Verifica la consola para detalles.');
        });
    });
  });