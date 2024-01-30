import express from 'express' 
import { createProduct, deleteProdectById, 
    getAllProduct, getByID, updateProduct } from './product.service.js'

export const router = express.Router()

// Create product
router.post('/products',async(req,res)=>{
    try {
        if(!req.body.product 
            || !req.body.company || !req.body.price){
                return res.status(404).send('all fields is required')
            }
        const newPro = await createProduct(req.body)
        res.send(newPro)    
    } catch (error) {
        res.status(500).send(error)
    }
});

// Update product
router.put('/products/:id',async(req,res)=>{
    try {
        if(!req.body.product 
        || !req.body.company || !req.body.price){
            return res.status(404).send('all fields is required')
        }
        const updated = await updateProduct(req.params.id,req.body)
        if(!updated){
            return res.status(404).send('Product not found')
        }
        res.status(200).send({message:'Product updated successfully'})
    } catch (error) {
        res.status(500).send(error)
    }
});

// delete product
router.delete('/products/:id',async(req,res)=>{
    try {
        const deleted = await deleteProdectById(req.params.id)
        if(!deleted){
            return res.status(404).send('Product not found')
        }
        res.status(200).send({
            message:'product deleted successfully'})
    } catch (error) {
        res.status(500).send(error)
    }
})
//get all product
router.get('/products',async (req,res)=>{
    try {
        const products = await getAllProduct()

        res.status(200).send(products)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
});
//get by ID
router.get('/products/:id',async(req,res)=>{
    try {
        const product = await getByID(req.params.id)
        return res.status(200).send(product)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
});