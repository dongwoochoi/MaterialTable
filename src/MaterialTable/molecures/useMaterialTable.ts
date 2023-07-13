import { MATERIALDUMMY_MAIN, MATERIALDUMMY_SUB } from '../../constants/MaterialDummy';

interface FormData{
    [key: string]: { [key: string]: string };
}

export default function useMaterialTable(){
    const defaultValue = "자재선택"
    const formData :FormData = {}

    function makeFormData(formData:FormData){
        MATERIALDUMMY_MAIN.map(function(main){
            formData[main.label] = {}
            MATERIALDUMMY_SUB.filter(item => item.in === main.id).map(function(sub){
                formData[main.label][sub.label] = ""
            })
        })
        return formData
    }

    function updateFormData(main:string, sub:string, selected:string ){
        formData[main][sub] = selected
        console.log(formData)
    }

    return{
        defaultValue,
        makeFormData,
        formData,
        updateFormData,
    }
}