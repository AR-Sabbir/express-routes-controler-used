

const path=require('path')

// home page controler


const showHomepage=(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,'../public/index.html'))
    
    }
const showHomepage2=(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,'../public/index-2.html'))
    
    }
const showBlogpage=(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,'../public/blog.html'))
    
    }
const showShoppage=(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,'../public/shop.html'))
    
    }
const showSingleblogpage=(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,'../public/singleblog.html'))
    
    }

    




    module.exports={
        showHomepage,
        showHomepage2,
        showBlogpage,
        showShoppage,
        showSingleblogpage
    }