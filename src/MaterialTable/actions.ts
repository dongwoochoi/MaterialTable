export default function reducer(prevState: any, action: any){
    const { type, updateState } = action;
    switch(type){
        case "reset":
            return updateState
        case "update":
            return {
                ...prevState,
                [updateState[0]]: {
                    ...prevState[updateState[0]],
                    [updateState[1]]:  updateState[2]
                }
            }
        default:
            console.log("dispatch 디폴트 도착")
    }
}