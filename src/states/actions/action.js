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

function setEdit(data) {
    return {
        type: "SET_EDIT",
        payload: data
    }
}


export { setId, addMile, setEdit }