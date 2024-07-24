//* detección de obejtos 
export const drawRect = (detections, ctx) =>{
  // Loop through each prediction
  detections.forEach(prediction => {

    // Extract boxes and classes
    const [x, y, width, height] = prediction['bbox']; 
    const text = prediction['class']; 

    // Set styling
    const color = Math.floor(Math.random()*16777215).toString(16);
    ctx.strokeStyle = '#' + color
    ctx.font = '18px Arial';

    // Draw rectangles and text
    ctx.beginPath();   
    ctx.fillStyle = '#' + color
    ctx.fillText(text, x, y);
    ctx.rect(x, y, width, height); 
    ctx.stroke();
  });
}

//* deteccion de tarjeta

// export const drawRect = (detections, ctx, videoWidth, videoHeight) => {
//   // Dibuja un recuadro fijo en el centro del canvas
//   const guideBox = {
//     x: videoWidth * 0.15, // Centrar ajustando el inicio en X
//     y: videoHeight * 0.15, // Centrar ajustando el inicio en Y
//     width: videoWidth * 0.7, // Hacer el recuadro más ancho
//     height: videoHeight * 0.7, // Hacer el recuadro más alto
//   };
//   ctx.strokeStyle = 'pink';
//   ctx.lineWidth = 4;
//   ctx.rect(guideBox.x, guideBox.y, guideBox.width, guideBox.height);
//   ctx.stroke();

//   // Verifica cada detección
//   detections.forEach(prediction => {
//     const [x, y, width, height] = prediction['bbox'];
//     const text = prediction['class'];

//     // Si la detección es un documento de identidad (o cualquier objeto de interés)
//     if (text !== 'person') { // Asumiendo que tienes una clase 'id_card'
//       // Verifica si el documento está dentro del recuadro fijo
//       const isInside = x >= guideBox.x && y >= guideBox.y &&
//                        (x + width) <= (guideBox.x + guideBox.width) &&
//                        (y + height) <= (guideBox.y + guideBox.height);

//       // Cambia el color del recuadro según si el documento está correctamente posicionado
//       ctx.strokeStyle = isInside ? 'green' : 'red';
//       ctx.lineWidth = 6;
//       ctx.rect(x, y, width, height);
//       ctx.stroke();

//       // Aquí podrías habilitar/deshabilitar el botón de captura basado en `isInside`
//     }
//   });
// }