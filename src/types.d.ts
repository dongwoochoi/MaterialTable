import { ReactNode } from "react";
import { Interpolation } from "@emotion/serialize";
import { Theme } from "@emotion/react";
import { AllHTMLAttributes} from "react";

export default interface BaseType extends AllHTMLAttributes<HTMLElement>{
    children? : ReactNode;
    css? : Interpolation<Theme>;
}