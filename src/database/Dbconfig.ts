import mongoose from 'mongoose'

const connection=async()=>{
    const connect=await  mongoose.connect("mongodb+srv://Vinay:Vinay7504@demo.mild8pl.mongodb.net/Basic?retryWrites=true&w=majority")
    return connect
}

export default connection