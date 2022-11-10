var menu = []
const getAllMenu = async ()=>{
    const res = await getAllRestoMenu()
    if(res && res.data){
        menu = res.data
        handleTab('breakfast',true)
    }
}

window.onload = getAllMenu


const handleTab = (menuType,clear)=>{
    if(!clear){
        document.getElementById('tbody').innerHTML=""
    }
    let tab = document.getElementById(menuType)
    if(menuType == 'breakfast'){
        tab.style.border = '5px solid black'
        document.getElementById('lunch').style.border='none'
        document.getElementById('dinner').style.border='none'
    }
    if(menuType == 'lunch'){
        tab.style.border = '5px solid black'
        document.getElementById('breakfast').style.border='none'
        document.getElementById('dinner').style.border='none'
    }
    if(menuType == 'dinner'){
        tab.style.border = '5px solid black'
        document.getElementById('lunch').style.border='none'
        document.getElementById('breakfast').style.border='none'
    }
    let count = 0
    const parent = document.getElementById('tbody')
    menu.map((ele,index)=>{
        if(ele.restoId == localStorage.getItem('restoInfo')){     
            if(menuType == ele.type){
                count=count+1
                let element = `<tr>
                                <td>${count}</td>
                                <td>${ele.name}</td>
                                <td>${ele.price}</td>
                                </tr>`
                parent.innerHTML += element
            }
        }
    })
}

const handleSubmit = async () => {
    const name = document.getElementById('name').value
    const phone = document.getElementById('phone').value
    const email = document.getElementById('email').value
    const persons = document.getElementById('person').value
    const time = document.getElementById('time').value
    const date = document.getElementById('date').value

    const payload = {
        name, phone, email, persons,time, date
    }
    const response  = await createTable(payload)
    if(response && response.data){
        let parent = document.getElementById('alert-msg')
        let alert = `<div class="alert" style="background: green; top:12%; left: 37%;">
                        <strong>${response.message}</strong> 
                        <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
                    </div>`
        parent.innerHTML=alert
        window.location.reload()
    }else{
        let parent = document.getElementById('alert-msg')
        let alert = `<div class="alert" style="background: red; top:12%; left: 37%;">
                        <strong>${response.message}</strong> 
                        <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
                    </div>`
        parent.innerHTML=alert
        
    }
}