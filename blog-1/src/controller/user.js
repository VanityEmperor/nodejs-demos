const { exec,escape } = require('../db/mysql')
const { genPassword } = require('../utils/cryp')
const login = (username,password)=>{
    username = escape(username)


    // 生成加密密码
    password = genPassword(password)
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