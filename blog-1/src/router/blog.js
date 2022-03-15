const {getList,getDatail,newBlog,updateBlog,delBlog} = require('../controller/blog')
const {SuccessModel,ErrorModel} = require('../model/resModel')
const handleBlogRouter = (req,res)=>{
    const method = req.method // GET POST
    const id = req.query.id
    console.log('quey',req.query)
    // 获取博客列表
    if(method === 'GET' && req.path === '/api/blog/list'){
        const author = req.query.author || ''
        const keyword = req.query.keyword || ''
        // const listData = getList(author,keyword)
        // return new SuccessModel(listData)
        const result = getList(author,keyword);
        return result.then(listData => {
            return new SuccessModel(listData)
        })
    }

    // 获取博客详情
    if(method === 'GET' && req.path === '/api/blog/detail'){

        const data = getDatail(id)
        return new SuccessModel(data)
    }

    // 新建一篇博客
    if(method === 'POST' && req.path === '/api/blog/new'){
        const data = newBlog(req.body)
        return new SuccessModel(data)
    }

    // 更新一篇博客
    if(method === 'POST' && req.path === '/api/blog/update'){
        const result = updateBlog(id,req.body)
        if(result){
            return new SuccessModel()
        } else {
            return new ErrorModel('更新博客失败')
        }
    }

    // 删除一篇博客
    if(method === 'POST' && req.path === '/api/blog/del'){
        const result = delBlog(id)
        if(result){
            return new SuccessModel()
        } else {
            return new ErrorModel('删除博客失败')
        }
    }    
}

module.exports = handleBlogRouter