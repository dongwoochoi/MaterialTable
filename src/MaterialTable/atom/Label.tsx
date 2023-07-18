/** @jsxImportSource @emotion/react */
import BaseType from "../../types";

export default function Label({children, ...props} : BaseType){
    return(
        <p {...props}>{ children }</p>
    );
}
