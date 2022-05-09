const mysql = require('mysql2/promise')

async function conectarBD()
{
    if (global.connection && global.connection.state !== 'disconnected')
    {
        return global.connection
    }

    const connection = await mysql.createConnection(
        {
            host     : 'localhost',
            port     : 5432,
            user     : 'root',
            password : '',
            database : 'applications'
        }
    );

    global.connection = connection
    return global.connection
}

//module.exports = {}