import express from 'express';

const posts = [
    {
        id: 1,
        descricao: "Gato curioso observando a janela",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 2,
        descricao: "Gatinho dormindo em uma caixa de papelão",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 3,
        descricao: "Gato brincando com um novelo de lã",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 4,
        descricao: "Gato preto fazendo pose para a foto",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 5,
        descricao: "Dois gatos brincando",
        imagem: "https://placecats.com/millie/300/150"
    }
];

const app = express();
app.use(express.json())

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function buscarPostPorID(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id);
    });
};

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorID(req.params.id);
    res.status(200).json(posts[index]);
});