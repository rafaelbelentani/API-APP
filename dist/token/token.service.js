"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const usuario_service_1 = require("../usuario/usuario.service");
const auth_service_1 = require("../auth/auth.service");
let TokenService = exports.TokenService = class TokenService {
    constructor(tokenRepository, usuarioService, authService) {
        this.tokenRepository = tokenRepository;
        this.usuarioService = usuarioService;
        this.authService = authService;
    }
    async save(hash, username) {
        let objToken = await this.tokenRepository.findOne({ where: { username: username } });
        if (objToken) {
            this.tokenRepository.update(objToken.id_token, {
                hash: hash
            });
        }
        else {
            this.tokenRepository.insert({
                hash: hash,
                username: username
            });
        }
    }
    async refreshToken(oldToken) {
        let objToken = await this.tokenRepository.findOne({ where: { hash: oldToken } });
        if (objToken) {
            let usuario = await this.usuarioService.findOne(objToken.username);
            return this.authService.login(usuario);
        }
        else {
            return new common_1.HttpException({
                errorMessage: 'Token Inválido'
            }, common_1.HttpStatus.UNAUTHORIZED);
        }
    }
    async getUsuarioByToken(token) {
        let objToken = await this.tokenRepository.findOneBy({ hash: token });
        if (objToken) {
            let usuario = await this.usuarioService.findOne(objToken.username);
            return usuario;
        }
        else {
            return null;
        }
    }
};
exports.TokenService = TokenService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('TOKEN_REPOSITORY')),
    __param(2, (0, common_1.Inject)((0, common_1.forwardRef)(() => auth_service_1.AuthService))),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        usuario_service_1.UsuarioService,
        auth_service_1.AuthService])
], TokenService);
//# sourceMappingURL=token.service.js.map