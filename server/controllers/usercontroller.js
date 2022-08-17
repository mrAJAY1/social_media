import { userSignup } from '../helpers/media_helper.js';

function postSignup(req, res) {
  const { body } = req;
  const result = userSignup({
    name:body.name,
    phone:body.phone,
    email:body.email,
    user_name:body.username,
    password:body.password,
    dob:body.dob,
    profile_img:body.profile_img
  })
}
