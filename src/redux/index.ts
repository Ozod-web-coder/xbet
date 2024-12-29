import {configureStore} from "@reduxjs/toolkit";
import {reducer} from "./counter.ts";

export default configureStore({
    reducer:{
        'xbet':reducer
    }
})
