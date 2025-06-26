import express from 'express';

import { getProducts,addNewProduct, deleteProduct,updateProduct } from '../controllers/product.controller.js';

const router = express.Router();

router.use(express.json());


router.post("",addNewProduct);

router.delete("/:id",deleteProduct); 

router.get("",getProducts)

router.put("/:id",updateProduct); 


export default router;