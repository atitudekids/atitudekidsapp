function CriancasDAO (connection){
    this._connection = connection;
}

CriancasDAO.prototype.lista = function(callback){
    this._connection.query('select * from criancas', callback);
}

CriancasDAO.prototype.salva = function(criancas, callback){
    this._connection.query('insert into criancas set ?',criancas, callback);
}

module.exports = function(){
    return CriancasDAO;
}