const express = require('express')
const path = require('path')
const { exec } = require('child_process')
app = express();
app.set('view engine', 'ejs')
app.set('views',path.join(__dirname))
app.use(express.static('public'))
app.get('/', (req,res)=>{

    const type_of_shoots = {
        "type1" : "Wedding",
        "type2" : "Pre-Wedding",
        "type3" : "Maternity",
        "type4" : "Baby",
        "type5" : "Modelling",
        "type6" : "Parlour Shoot",
    }

    const shoot_tags = {
        "tag1" : "thisistag1",
        "tag2" : "thisistag2",
        "tag3" : "thisistag3",
        "tag4" : "thisistag4",
        "tag5" : "thisistag5",
        "tag6" : "thisistag6",
        "tag7" : "thisistag7",
        "tag8" : "thisistag8",
    }

    res.render('views/index.ejs',{type_of_shoots,shoot_tags})
})
app.get('/about', (req,res)=>{
    res.send()
})
app.use('*', (req,res)=>{
    res.sendFile(path.join(__dirname+'/Error.html'))
})

app.listen(8000,()=>{
    console.log('Listening to Port 8000')
})