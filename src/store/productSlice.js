import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

// const initialState = []
export const STATUSES = Object.freeze({
    IDLE:"idle",
    ERROR:"error",
    LOADING:"loading"
})

const productSlice = createSlice({
    name:"product",
    initialState:{
        data:[],
        status:STATUSES.IDLE,
    },
    reducers:{
        // setProducts(state,action){
        //     state.data = action.payload;
        // },
        // setStatus(state,action){
        //     state.status = action.payload;
        // }  
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending,(state,action)=>{
            state.status = STATUSES.LOADING;
        }).addCase(fetchProducts.fulfilled,(state,action)=>{
            state.status = STATUSES.IDLE;
            state.data = action.payload; 
        }).addCase(fetchProducts.rejected,(state,action)=>{
            state.status = STATUSES.ERROR;
        })

    }
})

export const {setProducts,setStatus} = productSlice.actions;

export default productSlice.reducer;



//thunk

export const   fetchProducts = createAsyncThunk('products/fetch',async()=>{
    const product = await fetch('https://fakestoreapi.com/products')
    const data = await product.json()
    return data
})

// export function fetchProducts()
// {
//     return async function fetchProductThunk(dispatch,getState)
//     {
//         dispatch(setStatus(STATUSES.LOADING))
//         try
//         {
//             const product = await fetch('https://fakestoreapi.com/products')
//             const data = await product.json()
//             dispatch(setProducts(data))
//             dispatch(setStatus(STATUSES.IDLE))
//         }
//         catch(e)
//         {
//             console.log(e)
//             dispatch(setStatus(STATUSES.ERROR))
//         }
//     }
// }