import { userSignup } from '../helpers/media_helper.js';

function postSignup(req, res) {
  const { body:{name,phone,email,username,password,dob,profile_img} } = req;
  const result = userSignup({
    name:name,
    phone:phone,
    email:email,
    user_name:username,
    password:password,
    dob:dob,
    profile_img:profile_img
  })
}
