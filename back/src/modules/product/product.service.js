import { ProductModel } from "../../models/product.model.js";

// Create product
export function createProduct(p){
    const newPro = new ProductModel(p);
    return newPro.save()
}
// Update by ID
export function updateProduct(id,p){
    return ProductModel.findByIdAndUpdate(id,p)
}
// Delete by ID
export function deleteProdectById(id){
    return ProductModel.findByIdAndDelete(id)
}
//Get all
export function getAllProduct(){
    return ProductModel.find({});
}
//Get By ID
export function getByID(id){
    return ProductModel.findById(id)
}