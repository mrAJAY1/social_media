import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: 'name is required',
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
    },
    phone: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      minlength: 6,
    },
    username: {
      unique: true,
      requried: true,
    },
    profile_img:{
        type:String,
        default:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
    }
  },
  {
    timestamps: true,
  }
);
const Model = mongoose.model('user', userSchema);

export { Model };
