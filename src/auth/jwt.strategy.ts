import { ExtractJwt } from "passport-jwt";
import { jwtConstants } from "./constants";
import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";



@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrkey: jwtConstants.secret,
        });
    }

    async validate(payload: any) {
        return {userId: payload.sub, username: payload.username};

    }
}