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
export default function MaterialDropdown({ category, defaultValue, mainkey, subkey, ...props}:MaterialDropdownProps){
    const showRef = useRef(null);
    const list = category;
    const {
        selectedCategory,
        set_selectedCategory,
        isOpen,
        handleMouseLeaveShow,
        handleOpen,
    } = useDropdown(showRef, defaultValue)
  
    return(
        <div {...props}>
            <Dropdown.Wrapper>
                <Dropdown.Selected handleOpen={handleOpen}>
                    <Label css={selectColor(selectedCategory)}>{ selectedCategory }</Label>
                </Dropdown.Selected>
                <Dropdown.ShowContianer state={isOpen} handleMouse={handleMouseLeaveShow} ref={showRef}>
                    { 
                        list.map(function(category, i){
                            return(
                                <Dropdown.List key={i} mainkey={mainkey} subkey={subkey} item={category} handleSelect={set_selectedCategory} handleOpen={handleOpen}>
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