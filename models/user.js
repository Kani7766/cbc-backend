import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    email :{
        type : String,
        required : true,
        unique : true
    },
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    isBlocked : {
        type : Boolean,
        default : false
    },
    type : {
        type : String,
        default : "customer"
    },
    profilePicture : {
        type : String,
       default : "https://www.google.co.uk/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fuser_709699&psig=AOvVaw1OK7fogarN2-zto1SS408w&ust=1732015483116000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJiP9cvi5YkDFQAAAAAdAAAAABAE"
    }
})

const User = mongoose.model("users",userSchema)

export default User;