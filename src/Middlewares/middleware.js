//Meu middleWare Global
exports.middlewareGlobal = (req,res,next)=>{
    res.locals.umaVariavelLocal = 'Está é uma variavel local'
    next()
}

//Meu MiddleWare de erro do CSRF
exports.checkCsrfError = (err,req,res,next) => {
    if(err && 'EBADCSRFTOKEN' === err.code) {
        console.log(err.code)
        return res.render('404')
    }
    next()       
}
//Criador de Token do CSRF
exports.csrfCriaToken = (req,res,next) => {
    res.locals.csrfToken = req.csrfToken()
    next()
}
