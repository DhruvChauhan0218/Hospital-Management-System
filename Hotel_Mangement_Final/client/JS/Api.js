const request = async ( method,path,data) => {
    try {
        const option = {
            method: method,
            url: `http://localhost:3000${path}`,
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        if (method == 'GET' && data) {
            option['params'] = data
        }
        else {
            option['data'] = data
        }
        const res = await axios(option)
        return res.data

    } catch (error) {
        console.log(error);
    }

}

const registerUserAPi = (payload) =>{
    return request("POST","/register",payload)
}

const loginUserAPi = (payload) =>{
     return request("POST","/login",payload)
}

const addFeedback = (payload) =>{
    return request("POST","/add-feedback",payload)
}

const getFeedback = () =>{
    return request("GET","/get-feedback")
}

const getUserData = (id) =>{
    return request("GET","/find?id="+id)
} 

const createMenu = (payload)=>{
    return request("POST","/create-menu",payload)
}

const getAllRestoMenu = () =>{
    return request("GET","/resto-menu")
}

const getAllRooms = () =>{
    return request("GET","/getRooms")
}

const bookRoom = (payload) =>{
    return request("POST","/bookRooms",payload)
} 

const findRoomById = (id) =>{
    return request("GET","/room?id="+id)
} 

const createTable = (payload) =>{
    return request("POST","/add-table",payload)
} 

const getAllTable = () =>{
    return request("GET","/getTables")
}

const addStaff = (payload) =>{
    return request("POST","/add-staff",payload)
} 

const getAllStaff = () =>{
    return request("GET","/getStaff")
}

