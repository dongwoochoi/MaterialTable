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
        "갑피" : {
            "외피" : string,
            "내피" : string,
            "로고방식" : string,
        },
    
        "인솔" : {
            "소재" : string,
            "원단" : string,
            "로고방식" : string,
        },
    
        "아웃솔" : {
            "형태" : string,
        }
    }; 

    dispatch : React.Dispatch<{
        type: string;
        updateState: any;
    }>;
}
