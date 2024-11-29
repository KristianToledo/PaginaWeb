// Seleccionamos la imagen dentro del slider
const imagenSlider = document.getElementById("imagenSlider");

// Array con las URLs de las imágenes
const imagenes = [
  "https://rednew.es/wp-content/uploads/2021/07/vodafone-seguridad-digital-ciberseguridad-para-empresas-1280x720.jpg",
  "https://www.itdigitalsecurity.es/files/202305/bedisruptive-soc.jpg",
  "https://media.licdn.com/dms/image/C4E12AQFJX9d0aFF2YA/article-cover_image-shrink_720_1280/0/1544101564093?e=2147483647&v=beta&t=XnCH0FHXEXHaNAthg7KDzv7v_n3GJe0PAvv4iWeL6iQ"
];

let indice = 0; // Índice para llevar la cuenta de qué imagen mostrar

// Cambiar la imagen cada 3 segundos
setInterval(() => {
  indice = (indice + 1) % imagenes.length; 
  imagenSlider.src = imagenes[indice]; 
}, 3000); 
