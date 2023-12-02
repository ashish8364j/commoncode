const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    unique: true,
    required: true,
    lowercase:true,
    trim:true,
    index:true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase:true,
    trim:true,
    index:true
  },
  password: {
    type: String,
    required: [true ,'password is required']
  },
  fullName: {
    type: String,
  },
  dateOfBirth: {
    type: Date
  },
  profilePicture: {
    type: String , // You can store the URL or file path of the profile picture
    required : true 
  },
  watchHistory:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:'video'
    }
],
  bio: {
    type: String
  },
  likedVideos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Video'
    }
  ],
  refreshToken:{
    type:String
  },
  subscribedChannels: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ]
},{
    timestamps:true
});
//middleware(call this before save anything related to this schema)
userSchema.pre("save", async function(next){
  if(!this.isModified('password')) return next()
  this.password = await bcrypt.hash(this.password,10)
  next()
})


//we can inject some methods also for some checking
userSchema.methods.isPasswordCorrect = async function(){
  return await bcrypt.compare(password,this.password)
}

userSchema.methods.generateAccessToken = async function(){
  return await jwt.sign(
    {
    _id:this._id,
    email:this.email,
    username:this.username,
    fullName:this.fullName
  },
  process.env.ACCESS_TOKEN_SECRET,
  {
    expiresIn:process.env.ACCESS_TOKEN_EXPIRY
  }
  )
}

userSchema.methods.generateRefreshToken = async function(){
  return await jwt.sign(
    {
    _id:this._id,
  },
  process.env.REFRESH_TOKEN_SECRET,
  {
    expiresIn:process.env.REFRESH_TOKEN_EXPIRY
  }
  )
}

const User = mongoose.model('User', userSchema);
module.exports = User;
