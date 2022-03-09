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



module.exports = {
    getList,
    getDatail
}