import { sign, verify } from 'jsonwebtoken';
const { ACCESS_KEY, ALGO, ACCESS_EXP, REFRESH_KEY, REFRESH_EXP,RTC_EXP } = process.env;


export async function genAccess(claims) {
  sign(claims, ACCESS_KEY, {
    algorithm: ALGO,
    expiresIn: ACCESS_EXP,
  }).then((accessToken) => {
    console.log(accessToken, ' AccessToken');
    return accessToken;
  });
}
export async function genRefresh(claims) {
  sign(claims, REFRESH_KEY, {
    algorithm: ALGO,
    expiresIn: REFRESH_EXP,
  }).then((refreshToken) => {
    console.log(refreshToken , ' RefreshToken');
    return refreshToken;
  });
}

export function sendRefresh(res,token){
    res.cookie('RefreshToken',token,{
        httpOnly:true,
        maxAge:parseInt(RTC_EXP)
    })
}
