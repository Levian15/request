const express= require('express')
const app = express()

app.use(express.json())

//http://localhost:3000/julio/123

app.get('/:user/:password',(req,res)=>{
    const {user, password} = req.params
    if (user==='julio'&& password ==='123') {
       res.json({msg:'Inicio de sesion exitoso'})
       return
    }
    res.status(404).json({msg:'Error en el usuario o la contraseña'})
   
})


//http://localhost:3000/login?user=ejemplo&password=123
app.get('/login',(req,res)=>{//Endpoint
    const {user, password} = req.query
    if(!user||!password){
        res.status(400).json({
            msg:'You need to provide <user> and <password> parameters'
        })
        return
    }

    if (user==='ejemplo'&& password ==='123') {
       res.json({msg:'Inicio de sesion exitoso'})
       return
    }
    res.status(404).json({msg:'Error en el usuario o la contraseña'})
   
})

//http://localhost:3000/login
app.post('/login',(req,res)=>{
    const {user, password} = req.body

    if(!user||!password){
        res.status(400).json({
            msg:'You need to provide <user> and <password> parameters'
        })
        return
    }

    if (user==='Julio'&& password ==='123') {
       res.json({msg:'Inicio de sesion exitoso'})
       return
    }
    res.status(404).json({msg:'Error en el usuario o la contraseña'})
})

app.put('/',(req,res)=>{
    res.json({msg:'Hola PUT'})
})

app.patch('/',(req,res)=>{
    res.json({msg:'Hola PATCH'})
})

app.delete('/',(req,res)=>{
    res.json({msg:'Hola DELETE'})
})

    app.listen(3000,()=>{
        console.log('listening on port 3000')
    })