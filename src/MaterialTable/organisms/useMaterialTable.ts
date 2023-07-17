interface FormData{
    [key: string]: { [key: string]: string };
}

export default function useMaterialTable(){
    const defaultValue = "자재선택"

    return{
        defaultValue,
    }
}