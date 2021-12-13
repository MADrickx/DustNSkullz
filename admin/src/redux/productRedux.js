import {createSlice} from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        isFetching: false,
        error: false,
        message: false,
        messageBody: "",
    },
    reducers: {
        //getAll
        getProductStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getProductSuccess: (state, action) => {
            state.isFetching = false;
            state.products = action.payload;
        },
        getProductFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        //delete
        deleteProductStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        deleteProductSuccess: (state, action) => {
            state.isFetching = false;
            state.products.splice(
                state.products.findIndex(
                    (item) => item._id === action.payload.id,
                ),
                1,
            );
        },
        deleteProductFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        //update
        updateProductStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        updateProductSuccess: (state, action) => {
            state.isFetching = false;
            state.products[
                state.products.findIndex(
                    (item) => item._id === action.payload.id,
                )
            ] = action.payload.product;
        },
        updateProductFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        //add
        addProductStart: (state) => {
            state.isFetching = true;
            state.error = false;
            state.message = false;
        },
        addProductSuccess: (state, action) => {
            state.isFetching = false;
            state.products.push(action.payload);
            state.message = true;
            state.messageBody = "T-shirt Created";
        },
        addProductFailure: (state) => {
            state.isFetching = false;
            state.error = true;
            state.message = true;
            state.messageBody = "Error occured";
        },
        setInitalState: (state) => {
            state.isFetching = false;
            state.products = null;
            state.error = false;
            state.message = false;
            state.messageBody = "";
        },
    },
});

export const {
    getProductStart,
    getProductSuccess,
    getProductFailure,
    deleteProductFailure,
    deleteProductSuccess,
    deleteProductStart,
    updateProductFailure,
    updateProductSuccess,
    updateProductStart,
    addProductFailure,
    addProductSuccess,
    addProductStart,
} = productSlice.actions;
export default productSlice.reducer;
