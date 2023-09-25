"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../database/database.module");
const usuario_providers_1 = require("./usuario.providers");
const usuario_service_1 = require("./usuario.service");
const usuario_controller_1 = require("./usuario.controller");
const auth_module_1 = require("../auth/auth.module");
let UsuarioModule = exports.UsuarioModule = class UsuarioModule {
};
exports.UsuarioModule = UsuarioModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule, (0, common_1.forwardRef)(() => auth_module_1.AuthModule)],
        controllers: [usuario_controller_1.UsuarioController],
        providers: [
            ...usuario_providers_1.usuarioProviders,
            usuario_service_1.UsuarioService
        ],
        exports: [usuario_service_1.UsuarioService],
    })
], UsuarioModule);
//# sourceMappingURL=usuario.module.js.map