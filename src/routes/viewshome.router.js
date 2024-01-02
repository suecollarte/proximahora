import {Router} from 'express';

const router = Router();

router.get('/', async(req,res)=>{
    
    res.render('index-home')
})
router.get('/politicas', async(req,res)=>{
    
    res.render('politicas')
})
router.get('/pagos', async(req,res)=>{
    
    res.render('pagos')
})



export default router;