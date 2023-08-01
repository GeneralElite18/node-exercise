import express  from "express";
import products from "../controllers/controller";

const productsRouter = express.Router();

productsRouter.get("/:id?", async (req,res, next) => {
    const { id } = req.params;
    
    let data;

    try{
        if(id){
            data = await products.findOne(id);
        }
        else {
            data = await products.findAll();
        }
    
        res.status(200);
        res.json(data);
    }
    catch(err){
        next(err);
    }

});

productsRouter.post("/", async (req, res, next) => {
    const newProduct = req.body;

    try{
        const result = await products.addProduct(newProduct);

        res.status(200);
        res.json(result);
    }
    catch(err){
        next(err);
    }

});

productsRouter.put("/:id", async (req, res, next) => {
    const { id } = req.params;
    const updatedProduct = req.body;

    try{
        const result = await products.updateProduct(id, updatedProduct);
        res.status(200);
        res.json(result);
    }
    catch(err){
        next(err);
    }
});

productsRouter.delete("/:id", async (req, res, next) => {
    const { id } = req.params;

    try{
        const result = await products.removeOne(id);
        res.status(200);
        res.json(result);
    }
    catch(err){
        next(err);
    }
});

export default productsRouter;