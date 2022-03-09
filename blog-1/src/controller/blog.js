const getList = (author,keyword)=>{
    // 先返回假数据（格式是正确的）
    return [
        {
            id:1,
            title:'标题A',
            content:'内容A',
            createTime:1646833060625,
            author:'zhangsan'
        },
        {
            id:2,
            title:'标题B',
            content:'内容B',
            createTime:1646833100232,
            author:'lisi'
        },

    ]
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
module.exports = {
    getList,
    getDatail,
    newBlog,
    updateBlog 
}