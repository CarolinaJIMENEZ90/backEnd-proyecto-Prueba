const mongoose= require('mongoose')
const configdb= 'mongodb+srv://usuario:usuario@atlascluster.kbaix4c.mongodb.net/agenda?retryWrites=true&w=majority'

// config Mongoose
const conectar= mongoose.connect(configdb,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

module.exports= conectar;