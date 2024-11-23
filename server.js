import express from 'express';
import routes from "./src/routes/posts-routes.js";

const app = express();
routes(app)

app.listen(3000, () => {
    console.log("Servidor escutando...");
});