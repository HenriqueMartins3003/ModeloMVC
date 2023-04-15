exports.paginaInicial = (req, res) => {
    res.render('index')
    return
}

exports.formEnviado = (req,res) => {
    console.log(req.body)
    res.send(req.body)
}
