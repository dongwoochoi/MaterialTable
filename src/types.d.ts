import { ReactNode } from "react";
import { Interpolation } from "@emotion/serialize";
import { Theme } from "@emotion/react";
import { AllHTMLAttributes} from "react";

export default interface BaseType extends AllHTMLAttributes<HTMLElement>{
    children? : ReactNode;
    css? : Interpolation<Theme>;
}

export interface ContextType{
    selected : {
        [key : string] : {
            [key : string] : string,
            [key : string] : string,
            [key : string] : string,
        },
    
        [key : string] : {
            [key : string] : string,
            [key : string] : string,
            [key : string] : string,
        },
    
        [key : string] : {
            [key : string] : string,
        }
    }; 

    dispatch : React.Dispatch<{
        type: string;
        updateState: any;
    }>;
}
