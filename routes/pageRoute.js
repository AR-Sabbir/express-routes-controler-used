const express=require('express')
const path = require('path')
const {showHomepage,showHomepage2,showBlogpage,showShoppage,showSingleblogpage} = require('../controllers/pageController')




// init routes

const router=express.Router()


// router

router.get('/',showHomepage)

// router

router.get('/home2',showHomepage2)
// router

router.get('/blog',showBlogpage)
// router

router.get('/shop',showShoppage)
// router

router.get('/singleblog',showSingleblogpage)


// export 

module.exports=router;