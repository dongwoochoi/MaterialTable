import { useState, useEffect } from "react"

export default function useDropdown(showRef : any, defaultValue : string){
    const [selectedCategory, set_selectedCategory] = useState(defaultValue);
    const [isOpen, set_isOpen] = useState(false);
    const handleMouseLeave = (event : any) => {
        if (isOpen && !showRef?.current?.contains(event.target)) {
            set_isOpen(false);
        }
    }
    const handleOpen = () => {
        if (isOpen){
            set_isOpen(false);
        }else{
            set_isOpen(true);
        }
    }

    return {
        selectedCategory,
        set_selectedCategory,
        isOpen,
        set_isOpen,
        handleMouseLeave,
        handleOpen,
    }
}