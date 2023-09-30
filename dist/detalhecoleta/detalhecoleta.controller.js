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
exports.DetalheColetaController = void 0;
const common_1 = require("@nestjs/common");
const token_service_1 = require("../token/token.service");
const detalhecoleta_service_1 = require("./detalhecoleta.service");
let DetalheColetaController = exports.DetalheColetaController = class DetalheColetaController {
    constructor(detalhecoletaService, tokenService) {
        this.detalhecoletaService = detalhecoletaService;
        this.tokenService = tokenService;
    }
    async cadastrar(data, req) {
        let coleta;
        return this.detalhecoletaService.cadastrar(data, coleta);
    }
};
__decorate([
    (0, common_1.Post)('cadastrar'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], DetalheColetaController.prototype, "cadastrar", null);
exports.DetalheColetaController = DetalheColetaController = __decorate([
    (0, common_1.Controller)('detalhecoleta'),
    __metadata("design:paramtypes", [detalhecoleta_service_1.DetalheColetaService,
        token_service_1.TokenService])
], DetalheColetaController);
//# sourceMappingURL=detalhecoleta.controller.js.map