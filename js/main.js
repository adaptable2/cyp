document.addEventListener("DOMContentLoaded", function(event) {
  function iniciarCuentaRegresiva(fechaObjetivo) {
    const diasElemento = document.querySelector('.dias span');
    const horasElemento = document.querySelector('.horas span');
    const minutosElemento = document.querySelector('.minutos span');
    const segundosElemento = document.querySelector('.segundos span');
  
    function actualizarCuentaRegresiva() {
      const ahora = new Date().getTime();
      const diferencia = fechaObjetivo - ahora;
  
      if (diferencia <= 0) {
        clearInterval(intervalo);
        diasElemento.textContent = '00';
        horasElemento.textContent = '00';
        minutosElemento.textContent = '00';
        segundosElemento.textContent = '00';
        return;
      }
  
      const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
      const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
  
      diasElemento.textContent = formatearTiempo(dias);
      horasElemento.textContent = formatearTiempo(horas);
      minutosElemento.textContent = formatearTiempo(minutos);
      segundosElemento.textContent = formatearTiempo(segundos);
    }
  
    function formatearTiempo(tiempo) {
      return tiempo < 10 ? `0${tiempo}` : tiempo;
    }
  
    actualizarCuentaRegresiva();
    const intervalo = setInterval(actualizarCuentaRegresiva, 1000);
  }
  
  // Fecha objetivo: 2 de agosto de 2025
  const fechaObjetivo = new Date(2025, 7, 2).getTime(); // (año, mes - 1, día)
  
  iniciarCuentaRegresiva(fechaObjetivo);
  
  gsap.registerPlugin(ScrollTrigger); // Registra el plugin ScrollTrigger

  gsap.utils.toArray(".seccion").forEach(seccion => { // Recorre cada sección
    gsap.from(seccion.querySelectorAll(".elemento"), { // Selecciona los elementos dentro de la sección
      y: 100, // Los elementos entran desde 100 píxeles abajo
      opacity: 0, // Los elementos entran con opacidad 0
      stagger: 0.2, // Aplica un escalonamiento de 0.2 segundos entre los elementos
      duration: 1, // Duración de la animación de entrada
      scrollTrigger: {
        trigger: seccion, // El trigger es la sección
        start: "top 80%", // La animación comienza cuando el top de la sección alcanza el 80% de la ventana
        end: "bottom 20%", // La animación termina cuando el bottom de la sección alcanza el 20% de la ventana
        scrub: true, // Permite que la animación se controle con el scroll
        markers: false, // Muestra marcadores visuales (opcional)
      },
      yoyo: true, // Permite que la animación se repita en reversa al hacer scroll hacia arriba
    });
    gsap.from(seccion.querySelectorAll(".leftItem"), { // Selecciona los elementos dentro de la sección
      x: -100, // Los elementos entran desde 100 píxeles abajo
      opacity: 0.5, // Los elementos entran con opacidad 0
      stagger: 0.2, // Aplica un escalonamiento de 0.2 segundos entre los elementos
      duration: 1, // Duración de la animación de entrada
      scrollTrigger: {
        trigger: seccion, // El trigger es la sección
        start: "top 100%", // La animación comienza cuando el top de la sección alcanza el 80% de la ventana
        end: "bottom 50%", // La animación termina cuando el bottom de la sección alcanza el 20% de la ventana
        scrub: true, // Permite que la animación se controle con el scroll
        markers: false, // Muestra marcadores visuales (opcional)
      },
      yoyo: true, // Permite que la animación se repita en reversa al hacer scroll hacia arriba
    });
    gsap.from(seccion.querySelectorAll(".rightItem"), { // Selecciona los elementos dentro de la sección
      x: 100, // Los elementos entran desde 100 píxeles abajo
      opacity: 0, // Los elementos entran con opacidad 0
      stagger: 0.2, // Aplica un escalonamiento de 0.2 segundos entre los elementos
      duration: 1, // Duración de la animación de entrada
      scrollTrigger: {
        trigger: seccion, // El trigger es la sección
        start: "top 100%", // La animación comienza cuando el top de la sección alcanza el 80% de la ventana
        end: "bottom 20%", // La animación termina cuando el bottom de la sección alcanza el 20% de la ventana
        scrub: true, // Permite que la animación se controle con el scroll
        markers: false, // Muestra marcadores visuales (opcional)
      },
      yoyo: true, // Permite que la animación se repita en reversa al hacer scroll hacia arriba
    });
  });

  const items = gsap.utils.toArray(".item");

  items.forEach((item, index) => {
    gsap.to(item, {
      opacity: 1,
      x: 10, // Mueve el elemento a su posición original
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: item,
        start: "top 100%", // La animación comienza cuando el top del elemento alcanza el 80% de la ventana
        end: "top 20%", // La animación termina cuando el top del elemento alcanza el 20% de la ventana
        markers: false, // Puedes cambiar a true para ver los marcadores
        toggleActions: "play none none reverse", // Acciones al entrar y salir del trigger
        scrub: true,
      },
      delay: index * 0.2, // Retraso para que aparezcan uno tras otro
    });
  });

});
