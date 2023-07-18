/** @jsxImportSource @emotion/react */
import BaseType from "../../../types";
import React, { useContext } from "react";
import { MaterialTableContext } from "../../context";

interface SelectProps extends BaseType{
    handleOpen : () => void;
}

interface ShowConatinerProps extends BaseType{
    state : boolean;
    ref: React.RefObject<HTMLDivElement>;
    handleMouse: (event: any) => void;
}

interface ListProps extends BaseType{
    handleSelect : React.Dispatch<React.SetStateAction<string>>;
    item : string;
    handleOpen : () => void;
    mainkey : string;
    subkey : string;
}

export const Dropdown = {
    
    Wrapper : ({children, ...props} : BaseType) => {
        return(
            <div css={Wrapper} {...props}>
                {children}
            </div>
        );
    },

    Selected : ({children, handleOpen, ...props } : SelectProps) => {
        return(
            <div onClick={()=>{handleOpen()}} css={Selected} {...props} >
                {children}
                <img css={icon} src="다운로드.png"></img>
            </div>
        );
    },

    ShowContianer : ({children, state , handleMouse, ...props} : ShowConatinerProps) => {
        return(
            <div onMouseLeave={handleMouse} css={showContainer(state)} {...props} >
                {children}
            </div>
        );
    },

    List : ({children, handleOpen, handleSelect, item, mainkey, subkey, ...props} : ListProps) => {
        const { dispatch } = useContext(MaterialTableContext);

        return(
            <div css={list} onClick={(e : any) => { 
                    handleSelect(item); 
                    dispatch({
                        type : "update",
                        updateState : [mainkey, subkey, item]
                    })
                    
                    handleOpen(); 
                 }} {...props} >
                {children}
            </div>
        );
    },
}

const Wrapper = {
    width : "100%",
    textAlign : "center" as const,
    position : "relative" as const,
}

const Selected = {
    display : "flex",
    alignItems : "center",
    border : "1px solid black",
    borderRadius : "5px",
    height : "40px",
    paddingLeft : "16px",
    paddingRight : "16px",
}

const showContainer = (isOpen : boolean) => ({
    width : "100%",
    position : "absolute" as const,
    border : "1px solid black",
    borderRadius : "5px",
    display : `${isOpen ? "block" : "none"}`,
    zIndex : "999",
    background : "white",
});

const list = {
    borderBottom : "1px solid #cfcfcf",
    height : "40px",
    display : "flex",
    alignItems : "center",
    paddingLeft : "16px",
    paddingRight : "16px",
    "&:hover": {
        background : "#f6f6f6",
    },
}

const icon = {
    position : "absolute" as const, 
    width : "24px",
    right : "1%"
}