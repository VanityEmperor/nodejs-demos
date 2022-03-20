const {getList,getDatail,newBlog,updateBlog,delBlog} = require('../controller/blog')
const {SuccessModel,ErrorModel} = require('../model/resModel')

// 统一的登录验证函数
const loginCheck = (req) =>{
    if(!req.session.username){
        return Promise.resolve(new ErrorModel('尚未登录'))
    }

}

const handleBlogRouter = (req,res)=>{
    const method = req.method // GET POST
    const id = req.query.id
    console.log('quey',req.query)
    // 获取博客列表
    if(method === 'GET' && req.path === '/api/blog/list'){
        let author = req.query.author || ''
        let keyword = req.query.keyword || ''
        // const listData = getList(author,keyword)
        // return new SuccessModel(listData)
        if(req.query.isadmin){
            // 管理员界面
            const loginCheckResult = loginCheck(req)
            if (loginCheckResult) {
                return loginCheckResult
            }
            // 强制查询自己的博客
            author = req.session.username
        }
        const result = getList(author,keyword);
        return result.then(listData => {
            return new SuccessModel(listData)
        })
    }

    // 获取博客详情
    if(method === 'GET' && req.path === '/api/blog/detail'){
        // const data = getDatail(id)
        // return new SuccessModel(data)
        const result = getDatail(id)
        return result.then(data =>{
            return new SuccessModel(data)
        })
    }

    // 新建一篇博客
    if(method === 'POST' && req.path === '/api/blog/new'){
        const loginCheckResult = loginCheck(req)
        if (loginCheckResult) {
            return loginCheckResult
        }

        // const data = newBlog(req.body)
        // return new SuccessModel(data)
        req.body.author = req.session.username // 假数据，待开放登录时。再改成真实数据
        const result = newBlog(req.body)
        return result.then(data =>{
            return new SuccessModel(data)
        })
    }

    // 更新一篇博客
    if(method === 'POST' && req.path === '/api/blog/update'){
        const loginCheckResult = loginCheck(req)
        if (loginCheckResult) {
            return loginCheckResult
        }
        // const result = updateBlog(id,req.body)
        // if(result){
        //     return new SuccessModel()
        // } else {
        //     return new ErrorModel('更新博客失败')
        // }
        const result = updateBlog(id,req.body)
        return result.then(val =>{
            if(val){
                return new SuccessModel()
            } else {
                return new ErrorModel('更新博客失败')
            }
        })

    }

    // 删除一篇博客
    if(method === 'POST' && req.path === '/api/blog/del'){
        const loginCheckResult = loginCheck(req)
        if (loginCheckResult) {
            return loginCheckResult
        }
        // const result = delBlog(id)
        // if(result){
        //     return new SuccessModel()
        // } else {
        //     return new ErrorModel('删除博客失败')
        // }
        const author = req.session.username // 假数据，待开放登录时。再改成真实数据
        const result = delBlog(id,author)
        return result.then(val =>{
            if(val){
                return new SuccessModel()
            } else {
                return new ErrorModel('更新博客失败')
            }
        })
    }    
}

module.exports = handleBlogRouter