function setId(data) {
    return {
        type: "SET_ID",
        payload: data
    }
}


function addMile(data) {
    return {
        type: "ADD_MILE",
        payload: data
    }
}
/*
function setEmpty(data) {
    return {
        type: "SET_EMPTY",
        payload: data.id
    }
}
*/
export { setId, addMile }