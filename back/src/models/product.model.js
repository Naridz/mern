import mongoose, {Schema} from 'mongoose'


const ProductSchema = new Schema({
    product:{
        type:String,
        require:true,
    },
    company:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    }
});

export const ProductModel = mongoose.model('Product',ProductSchema)