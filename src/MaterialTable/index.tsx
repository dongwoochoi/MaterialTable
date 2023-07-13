/** @jsxImportSource @emotion/react */
import { Table } from "./atom/Table";
import MaterialTable from "./molecures/MaterialTable"
import useMaterialTable from "./molecures/useMaterialTable";
export default function ShowMaterialTable(){

    const { defaultValue, makeFormData, formData, updateFormData } = useMaterialTable()
    return(
        <>
            <MaterialTable 
                defaultValue={defaultValue}
                makeFormData={makeFormData}
                formData={formData}
                updateFormData={updateFormData}
            ></MaterialTable>
        </>
    );
}
