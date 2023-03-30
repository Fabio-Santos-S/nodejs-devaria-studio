import routes from 'express/Router'

routes.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

routes.get('/', (req, res) => {
    return res.json({ hello: 'pagina inicial logo será implementada' })
});

app.get('/transacao', (req, res) => {
    return res.status(201).json({
        msg: "Retornou o get"
    })
})

module.exports = routes;