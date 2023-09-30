"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetalheColetaModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../database/database.module");
const detalhecoleta_controller_1 = require("./detalhecoleta.controller");
const detalhecoleta_providers_1 = require("./detalhecoleta.providers");
const detalhecoleta_service_1 = require("./detalhecoleta.service");
const token_module_1 = require("../token/token.module");
const jwt_1 = require("@nestjs/jwt");
let DetalheColetaModule = exports.DetalheColetaModule = class DetalheColetaModule {
};
exports.DetalheColetaModule = DetalheColetaModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule, token_module_1.TokenModule],
        controllers: [detalhecoleta_controller_1.DetalheColetaController],
        providers: [
            ...detalhecoleta_providers_1.detalhecoletaProviders,
            detalhecoleta_service_1.DetalheColetaService,
            jwt_1.JwtService
        ],
        exports: [detalhecoleta_service_1.DetalheColetaService],
    })
], DetalheColetaModule);
//# sourceMappingURL=detalhecoleta.module.js.map