import {  CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Admin } from "../admin/models/admin.model";

@Injectable()
export class creatorGuard implements CanActivate{
    constructor(private readonly jwtService:JwtService){}
    canActivate(context: ExecutionContext){
        const req=context.switchToHttp().getRequest()
        const authHeader=req.headers.authorization
        console.log(authHeader)
        if(!authHeader){
            throw new UnauthorizedException("not authorizated")
        }
        const bearer=authHeader.split(' ')[0]
        const token=authHeader.split(' ')[1]
        if(bearer!="Bearer" || !token){
            throw new UnauthorizedException("not authorizated")
        }
        async function verify(token:string,jwtService:JwtService){
            const user: Partial<Admin>=await jwtService.verify(token,{
                secret:process.env.ACCESS_TOKEN_KEY,
            })
            if(!user){
                throw new UnauthorizedException("Invalid token")
            }
            if(user.is_creator==false){
                throw new UnauthorizedException("Admin isn't creator ")
            }
            return true
        }
        return verify(token,this.jwtService)
        
    }
}