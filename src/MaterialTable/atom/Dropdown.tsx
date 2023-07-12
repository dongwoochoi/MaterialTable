/** @jsxImportSource @emotion/react */
import { SetStateAction, useEffect } from "react";
import BaseType from "../../types";

interface SelectProps extends BaseType{
    handleOpen : React.Dispatch<SetStateAction<boolean>>
    state : boolean;
}

interface ShowConatinerProps extends BaseType{
    state : boolean;
    handleOpen : React.Dispatch<SetStateAction<boolean>>;
    ref: React.RefObject<HTMLDivElement>;
}

interface ListProps extends BaseType{
    handleSelect : React.Dispatch<React.SetStateAction<string>>;
    item : string;
}

export const Dropdown = {
    Wrapper : ({children, ...props} : BaseType) => {
        return(
            <div css={Wrapper} {...props}>
                {children}
            </div>
        );
    },

    Selected : ({children, handleOpen, state, ...props } : SelectProps) => {
        return(
            <div css={selected} {...props} onClick={() => { state ? handleOpen(false) : handleOpen(true) }}>
                {children}
            </div>
        );
    },

    ShowContianer : ({children, handleOpen, state , ref,...props} : ShowConatinerProps) => {
        const showRef = ref
        const handleMouseLeave = (event : any) => {
            if (state && !showRef?.current?.contains(event.target)) {
              handleOpen(false);
            }
          }
        return(
            <div ref={showRef} onMouseLeave={handleMouseLeave} css={showContainer(state)} {...props} >
                {children}
            </div>
        );
    },

    List : ({children, handleSelect, item, ...props} : ListProps) => {
        return(
            <div css={list} onClick={() => {handleSelect(item)}} {...props} >
                {children}
            </div>
        );
    },
}

const defaults = {

}

const Wrapper = {
    width : "98%",
    textAlign : "center" as const,
    position : "relative" as const,
}

const selected = {
    display : "flex",
    alignItems : "center",
    border : "1px solid black",
    borderRadius : "5px",
    height : "40px",
    paddingLeft : "16px",
    paddingRight : "16px"
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