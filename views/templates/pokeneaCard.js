const generatePokeneaPhilosophy = (pokenea, containerId) => {
  return `
    <div style="max-width: 400px; margin: 20px auto; padding: 20px; border: 1px solid #ccc; border-radius: 8px; font-family: Arial, sans-serif; text-align: center;">
      <img src="${pokenea.imagen}" alt="${pokenea.nombre}" style="width: 200px; margin: 20px 0; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
      <p style="font-style: italic; color: #555; font-size: 1.1em; line-height: 1.6; margin: 20px 0; padding: 15px; background-color: #f8f9fa; border-radius: 6px;">
        "${pokenea.fraseFilosofica}"
      </p>
      <p style="margin-top: 20px; font-size: 0.9em; color: #666; padding: 10px; background-color: #e9ecef; border-radius: 4px;">
        ID del Contenedor: ${containerId}
      </p>
    </div>
  `;
};

module.exports = { generatePokeneaPhilosophy };