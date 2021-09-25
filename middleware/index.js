module.exports = (req, res, next) =>{
    return res.status(200).json({code: 1, menssage: "Bienvenido al Pokédex"});
}