import React, { useEffect, createContext, useReducer } from "react";
import { selected } from "./store";
import BaseType from "../types";
import reducer from "./actions";

export const MaterialTableContext = createContext<any>({   
    ...selected,
    dispatch: () => {},
});

export default function MaterialDropdownConText( { children } : BaseType){
    const [state, dispatch] = useReducer(reducer, selected);
    const value = {
        state,
        dispatch,
      };

    useEffect(() =>{
        console.log(state)
    }, [state])
    return(
        <MaterialTableContext.Provider value={value}>{children}</MaterialTableContext.Provider>
    );
}