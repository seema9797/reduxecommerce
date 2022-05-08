export const addCart =(product)=>{
    return {
        type: "ADDITME",
        payload:product
    }
}

export const deletCart=(product)=>{
    return{
        type:"DELETEITME",
        payload:product
    }
}