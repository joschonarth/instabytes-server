import express from 'express';
import { listarPosts } from '../controller/posts-controller.js';

const routes = (app) => {
    app.use(express.json());
    
    app.get("/posts", listarPosts);
}

export default routes;