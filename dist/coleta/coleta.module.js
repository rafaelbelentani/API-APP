"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColetaModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../database/database.module");
const coleta_controller_1 = require("./coleta.controller");
const coleta_providers_1 = require("./coleta.providers");
const coleta_service_1 = require("./coleta.service");
const token_module_1 = require("../token/token.module");
const jwt_1 = require("@nestjs/jwt");
let ColetaModule = exports.ColetaModule = class ColetaModule {
};
exports.ColetaModule = ColetaModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule, token_module_1.TokenModule],
        controllers: [coleta_controller_1.ColetaController],
        providers: [
            ...coleta_providers_1.coletaProviders,
            coleta_service_1.ColetaService,
            jwt_1.JwtService
        ],
        exports: [coleta_service_1.ColetaService],
    })
], ColetaModule);
//# sourceMappingURL=coleta.module.js.map