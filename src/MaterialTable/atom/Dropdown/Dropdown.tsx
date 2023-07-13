
/** @jsxImportSource @emotion/react */
import BaseType from "../../../types";

interface SelectProps extends BaseType{
    handleOpen : () => void;
}

interface ShowConatinerProps extends BaseType{
    state : boolean;
    handleOpen : () => void;
    ref: React.RefObject<HTMLDivElement>;
    handleMouse: (event: any) => void;
}

interface ListProps extends BaseType{
    handleSelect : React.Dispatch<React.SetStateAction<string>>;
    item : string;
    formdata : any;
    handleOpen : () => void;
    mainkey : string;
    subkey : string;
    handleupdate : (main: string, sub: string, selected: string) => void
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
            <div onClick={()=>{handleOpen()}} css={selected} {...props} >
                {children}
            </div>
        );
    },

    ShowContianer : ({children, handleOpen, state , ref, handleMouse, ...props} : ShowConatinerProps) => {
        const showRef = ref
        return(
            <div ref={showRef} onMouseLeave={handleMouse} css={showContainer(state)} {...props} >
                {children}
            </div>
        );
    },

    List : ({children, handleOpen, handleSelect, item, handleupdate, ...props} : ListProps) => {
        return(
            <div css={list} onClick={(e : any) => {handleSelect(item); handleOpen(); handleupdate(props.mainkey, props.subkey, item); }} {...props} >
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