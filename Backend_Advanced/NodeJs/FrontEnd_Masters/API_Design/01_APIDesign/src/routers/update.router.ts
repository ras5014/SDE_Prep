import {Router} from 'express';
const router = Router();

router.get("/update", ()=>{}) // Get All Products
router.get("/update/:id", ()=>{}) // Get Product By Id
router.put("/update/:id", ()=>{}) // Update Product By Id
router.post("/update", ()=>{}) // Create New Product
router.delete("/update/:id", ()=>{}) // Delete Product By Id

export default router;
