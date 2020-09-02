const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// dentro do meu req.params existem os meu parâmentros de url.     //geralmente usa-se para filtros.
// dentro do meu req.query existem os meus parâmmentros de url.    //geralmente usa-se para busca.
// dentro do meu req.body existe o corpo da minha requisição.      //geralmente usa-se para mandar dados, ou multimídia, {criar, editar}.

// /Victoria/24/true
app.get('/:user/:age/:isActive', (req, res) => {
    
    const { user, age, isActive } = req.params;

    res.json({
        user,
        age,
        isActive,
    });
 
});

// /?user=Victoria&age=24&isActive=true
app.get('/', (req, res) => {
    
    const { user, age, isActive } = req.query;

    res.json({
        user,
        age,
        isActive,
    });
 
});

// /
app.post('/', (req, res) => {
    
    const { user, age, isActive } = req.body;

    res.json({
        user,
        age,
        isActive,
    });
 
});

app.listen(3000, () => {
    console.log('Servidor iniciado...');
});