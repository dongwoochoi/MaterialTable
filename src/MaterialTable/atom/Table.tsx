/** @jsxImportSource @emotion/react */
import BaseType from "../../types"

export const Table = {
    Wrapper : ({ children, ...props }: BaseType) => {
        return(
            <div css={defaults} {...props}>
                { children }
            </div>
        );
    },

    Title : ({ children, ...props }: BaseType) => {
        return(
            <div css={defaults} {...props}>
                { children }
            </div>
        );
    },

    TableBody : ({ children, ...props }: BaseType) => {
        return(
            <div css={defaults} {...props}>
                { children }
            </div>
        );
    },

    MainCell : ({ children, ...props }: BaseType) => {
        return(
            <div css={defaults} {...props}>
                { children }
            </div>
        );
    },

    SubCell : ({ children }: BaseType) => {
        return(
            <div css={defaults}>
                { children }
            </div>
        );
    },

    AtomCell : ({ children, ...props }: BaseType) => {
        return(
            <div css={defaults} {...props}>
                { children }
            </div>
        );
    },

}

const defaults = {

}
