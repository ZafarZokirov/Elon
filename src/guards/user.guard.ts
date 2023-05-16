import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { isUndefined } from "util";
import { User } from "../user/models/user.model";

@Injectable()
export class UserGuard implements CanActivate{
    constructor(private readonly jwtService:JwtService){}
    canActivate(context: ExecutionContext){
        
        const req=context.switchToHttp().getRequest()
        const authHeader=req.headers.authorization
        console.log(authHeader)
        if(!authHeader){
            throw new UnauthorizedException("authorizated")
        }
        const bearer=authHeader.split(' ')[0]
        const token=authHeader.split(' ')[1]
        if(bearer!="Bearer" || !token){
            throw new UnauthorizedException("authorizated")
        }
        async function verify(token:string,jwtService:JwtService){
            const user: Partial<User>=await jwtService.verify(token,{
                secret:process.env.ACCESS_TOKEN_KEY,
            })
            if(!user){
                throw new UnauthorizedException("Invalid token")
            }
            if(user.is_active==false){
                throw new UnauthorizedException("User aktiv emas")
            }
            return true
        }
        return verify(token,this.jwtService)
        
    }
}