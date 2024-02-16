import Admin from "../modle/admin.modle.js";

export const SignUp =(response,request,next)=>{
    let username = request.body.username;
    let email = request.body.email;
    let password = request.body.password;

   let admin = new Admin(null,username,email,password);

    admin.SignUp()
    .then(result=>{
        return response.status(200).json({massage : " signUp success...."});
    }) .catch(err=>{
        console.log(err)
        return response.status(403).json({error: "Internal server Error"})
    })
}