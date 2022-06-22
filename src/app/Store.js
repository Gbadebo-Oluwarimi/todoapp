import { configureStore } from "@reduxjs/toolkit";
import todoreducer from "../Features/todoSlice";
import togglereducer from "../Features/toggleSlice";

const Store = configureStore({
    reducer:{
        todo:todoreducer,
        toggle:togglereducer,
    }
})


export default Store
