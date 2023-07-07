const express = require('express')
const bodyParser = require('body-parser')
//const mongoose = require('mongoose');
const cors = require('cors')
const servicesController = require('./controller/servicesController')
const adminController = require('./controller/adminController')
const multer = require('multer')
const dbconnect = require('./dbconnect')
const upload = multer({ dest: 'uploads/' })

const app = express()


app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/uploads', express.static('uploads'))

// mongoose.connect('mongodb://localhost:27017/test', (err) => {
//     if (err) {
//         console.log('DB Err.')
//     } else {
//         console.log('DB Connected.')
//     }
// });


app.get('/hello', (req, res) => {
    return res.send('Hello')
})


app.post('/api/services', upload.single('image'), servicesController.addServices)
app.get('/api/services', servicesController.getServices)
app.get('/api/slider', servicesController.getSlider)

app.get('/admin/admins', adminController.getAdmins)
app.post('/admin/add', adminController.addAdmins)
app.post('/admin/login', adminController.loginAdmin)


dbconnect();
app.listen(5000, () => {
    console.log(`Backend Running At Port 5000`)
})