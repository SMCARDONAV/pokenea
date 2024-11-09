const { app, port } = require('./config/express');
const pokeneaRoutes = require('./routes/pokeneaRoutes');

app.use('/pokenea', pokeneaRoutes);

app.listen(port, () => {
  console.log(`Servidor Pokenea ejecutándose en el puerto ${port}`);
  console.log(`Rutas disponibles:`);
  console.log(`- http://localhost:${port}/pokenea/info`);
  console.log(`- http://localhost:${port}/pokenea/filosofia`);
});