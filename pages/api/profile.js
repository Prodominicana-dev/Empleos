import { verify } from "jsonwebtoken"

export default function profileHandler(req, res){
       
 const {cookieUsiario} = req.cookies

 try {
    const user = verify(cookieUsiario, 'secreto')
    console.log(user)
    return res.json({
        Id:user.Id,
        email:user.email,
        username:user.username
    })
 } catch (error) {
    return res.json({error:'token invalido'})
 }
 

}