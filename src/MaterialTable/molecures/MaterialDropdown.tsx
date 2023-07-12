import { Dropdown } from "../atom/Dropdown";
import BaseType from "../../types";
import { useState, useRef, useEffect } from "react";
import Label from "../atom/Label";

interface MaterialDropdownProps extends BaseType{
    category : string[];
}

export default function MaterialDropdown({...props}:MaterialDropdownProps){
    const showRef = useRef(null);
    const list = props.category;
    const [selectedCategory, set_selectedCategory] = useState("자재선택");
    const [isOpen, set_isOpen] = useState(false);

    useEffect(()=>{
        set_isOpen(false);
    }, [selectedCategory])
    return(
        <div {...props}>
            <Dropdown.Wrapper>
                <Dropdown.Selected state={isOpen} handleOpen={set_isOpen}>
                    <Label css={selectColor(selectedCategory)}>{ selectedCategory }</Label>
                </Dropdown.Selected>
                <Dropdown.ShowContianer state={isOpen} ref={showRef} handleOpen={set_isOpen}>
                    {
                        
                        list.map(function(category){
                            return(
                                <Dropdown.List item={category} handleSelect={set_selectedCategory}>
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
})