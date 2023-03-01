const mongoose =require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/inchbrickdb',{
    useNewUrlParser:true,useUnifiedTopology:true
},(err)=>{
    if(err){
        console.log('there is some error', err);
    }else{
        console.log("connection successfully connected with mongoDB");
    }
})