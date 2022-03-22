const { exec,escape } = require('../db/mysql')
const login = (username,password)=>{
    username = escape(username)
    password = escape(password)
    let sql = `
        select username,password from users where username=${username} and password=${password}
    `
    // select username,realname from users where username='zhangsan' -- ' and password='123'
    console.log('sql',sql)
    return exec(sql).then(rows =>{
        return rows[0] || {}
    })
}

module.exports = {
    login
}