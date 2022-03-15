const { exec } = require('../db/mysql')
const getList = (author,keyword)=>{
    let sql = `select * from blogs where 1=1 `
    if (author){
        sql += `and author='${author}' `
    }
    if (keyword){
        sql += `and title like '%${keyword}%' `
    }
    sql += `order by createtime desc;`

    // 返回 promise
    return exec(sql)
}


const getDatail = (id)=>{
    // 先返回假数据
    return {
        id:1,
        title:'标题A',
        content:'内容A',
        createTime:1646833060625,
        author:'zhangsan'
    }
}

const newBlog = (blogData = {}) =>{
    // blogData 是一个博客对象，包含 title content 属性
    console.log('newBlog data'+blogData)
    return{
        id: 3 //表示新建博客，插入到数据表里面的id
    }
}

const updateBlog = (id,blogData = {}) =>{
    // id就是更新博客的id
    // blogData 是一个博客对象，包含 title content 属性
    console.log('updateBlog data',id,blogData)
    return true
}

const delBlog = (id)=>{
    // id 就是要删除博客的id
    return true
}

module.exports = {
    getList,
    getDatail,
    newBlog,
    updateBlog,
    delBlog
}