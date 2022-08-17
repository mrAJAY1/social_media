import mongoose from 'mongoose'
import { Model } from '../Models/userModel'
import { genAccess ,genRefresh} from '../constants/tokenConstants';


export async function userSignup(data){
    const exists= await Model.exists({$or:[{email:data.email},{phone:data.phone},{username:data.username}]})

    if(exists){
        throw Error('user exists');
    }
    const userModel = new Model(data);

    try{
      const user = userModel.save(); 
    }catch{}

}