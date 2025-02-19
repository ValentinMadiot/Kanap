const express = require("express");
const path = require("path");

const productRoutes = require("./routes/product");

const app = express();

// Configuration du CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

// Gestion des fichiers statiques (images)
app.use("/images", express.static(path.join(__dirname, "images")));
app.use(express.static("images"));

// Middleware pour parser les requêtes
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes API
app.use("/api/products", productRoutes);

// Définition du port (important pour Render et Railway)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Serveur en ligne sur le port ${PORT}`);
});

module.exports = app;
