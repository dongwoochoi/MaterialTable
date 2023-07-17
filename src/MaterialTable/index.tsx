/** @jsxImportSource @emotion/react */
import MaterialTable from "./organisms/MaterialTable"
import MaterialDropdownConText from "./context";


export default function ShowMaterialTable(){
    return(
        <MaterialDropdownConText>
            <MaterialTable />
        </MaterialDropdownConText>
    );
}
