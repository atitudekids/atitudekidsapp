function SalasDAO (connection){
    this._connection = connection;
}

SalasDAO.prototype.lista = function(callback){
    this._connection.query('select * from salas', callback);
}

SalasDAO.prototype.salva = function(salas, callback){
    this._connection.query('insert into salas set ?',salas, callback);
}

module.exports = function(){
    return SalasDAO;
}