import { Dropdown } from "../atom/Dropdown/Dropdown";
import BaseType from "../../types";
import { useRef } from "react";
import Label from "../atom/Label";
import useDropdown from "../atom/Dropdown/useDropdown";

interface MaterialDropdownProps extends BaseType{
    category : string[];
    defaultValue: string;
    mainkey : string;
    subkey : string;
}
export default function MaterialDropdown({...props}:MaterialDropdownProps){
    const showRef = useRef(null);
    const list = props.category;
    const {
        selectedCategory,
        set_selectedCategory,
        isOpen,
        handleMouseLeaveShow,
        handleOpen,
    } = useDropdown(showRef, props.defaultValue)
  
    return(
        <div {...props}>
            <Dropdown.Wrapper>
                <Dropdown.Selected handleOpen={handleOpen}>
                    <Label css={selectColor(selectedCategory)}>{ selectedCategory }</Label>
                </Dropdown.Selected>
                <Dropdown.ShowContianer state={isOpen} handleMouse={handleMouseLeaveShow} ref={showRef} handleOpen={handleOpen}>
                    { 
                        list.map(function(category){
                            return(
                                <Dropdown.List mainkey={props.mainkey} subkey={props.subkey} item={category} handleSelect={set_selectedCategory} handleOpen={handleOpen}>
                                    { category }
                                </Dropdown.List>
                            );
                        })
                    }
                </Dropdown.ShowContianer> 
            </Dropdown.Wrapper>
        </div>
    );
}

const selectColor = (selectedCategory : string) => ({
    color : `${selectedCategory === "자재선택" ? "#cfcfcf" : "black"}`,
    fontSize : "14px"
})