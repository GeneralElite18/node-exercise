import query from "../db/utils";

async function findOne(id){
    return await query("SELECT * FROM products WHERE productID = ?",[id]);
}

async function findAll(){
    return await query("SELECT * FROM products");
}

async function addProduct(newProduct){
    return await query("INSERT INTO products SET ?", [newProduct])
};

async function updateProduct(id, updatedProduct){
    return await query("UPDATE products SET ? WHERE productID = ?", [updatedProduct, id])
};

async function removeOne(id){
    return await query("DELETE FROM procuts WHERE productID = ?", [id]);
};

export default{
    findOne,
    findAll,
    addProduct,
    updateProduct,
    removeOne
}