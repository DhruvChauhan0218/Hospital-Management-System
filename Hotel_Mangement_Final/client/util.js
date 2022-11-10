const axios = require('axios')

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

exports.getAllRooms = () =>{
  return request("GET","/getRooms")
}

exports.bookRoom = (payload) =>{
  return request("POST","/bookRooms",payload)
} 

exports.getAllRestoMenu = () =>{
  return request("GET","/resto-menu")
}


exports.deleteMenu = async() =>{
  return await axios.delete("http://localhost:3000/delete-menu?id="+81)
}

exports.createMenu = (payload)=>{
  return request("POST","/create-menu",payload)
}

exports.getFeedback = () =>{
  return request("GET","/get-feedback")
}

exports.addFeedback = (payload) =>{
  return request("POST","/add-feedback",payload)
}
