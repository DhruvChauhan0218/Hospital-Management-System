
const handleLogin =async ()=>{
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let role = document.getElementById('role').value
    if(email && password && role){
        const payload = {email,password, role}
        const res = await loginUserAPi(payload)
        if(res && res.data){
            if(role === 'admin'){
                window.location.href= './Admin/Rooms.html'
                localStorage.setItem("id",res.data.id)
                localStorage.setItem('name',res.data.username)
            }else{
                window.location.href= './Customer/Home.html'
                localStorage.setItem("id",res.data.id)
                localStorage.setItem('name',res.data.name)
            }
        }else{
            let parent = document.getElementById('alert-msg')
            let alert = `<div class="alert" style="top:2%;background:red;">
                            <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
                            <strong>${res.message}</strong> 
                        </div>  `
            parent.innerHTML=alert
        }
    }else{
        let parent = document.getElementById('alert-msg')
        let alert = `<div class="alert" style="top:2%;background:red;">
                        <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
                        <strong>Please fill up all the details</strong> 
                    </div>  `
        parent.innerHTML=alert
    }
}

const handleRegister = async()=>{
    let username = document.getElementById('username').value
    let email = document.getElementById('email_signup').value
    let password = document.getElementById('password_signup').value
    let role = document.getElementById('role_signup').value
    if(username && email_signup && password_signup && role_signup){
        const payload = {username, email,password, role}
        const res = await registerUserAPi(payload)
        if(res && res.data){
            if(role === 'admin'){
                window.location.href= './Admin/Rooms.html'
                localStorage.setItem("id",res.data.id)
                localStorage.setItem('name',res.data.username)
            }else{
                window.location.href= './Customer/Home.html'
                localStorage.setItem("id",res.data.id)
                localStorage.setItem('name',res.data.username)
            }
        }else{
            let parent = document.getElementById('alert-msg')
            let alert = `<div class="alert" style="top:2%;background:red;">
                            <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
                            <strong>${res.message}</strong> 
                        </div>  `
            parent.innerHTML=alert
        }
    }else{
        let parent = document.getElementById('alert-msg')
        let alert = `<div class="alert" style="top:2%;background:red;">
                        <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
                        <strong>Please fill up all the details</strong> 
                    </div>  `
        parent.innerHTML=alert
    }
}