const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', { title: 'Escola de Programação' });
});

app.get('/cursos', (req, res) => {
    res.render('cursos', { title: 'Nossos Cursos' });
});

app.get('/contato', (req, res) => {
    res.render('contato', { title: 'Contato' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});