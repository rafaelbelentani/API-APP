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
exports.DetalheColetaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const detalhecoleta_entity_1 = require("./detalhecoleta.entity");
let DetalheColetaService = exports.DetalheColetaService = class DetalheColetaService {
    constructor(detalhecoletaRepository) {
        this.detalhecoletaRepository = detalhecoletaRepository;
    }
    async cadastrar(data, coleta) {
        let detalhecoleta = new detalhecoleta_entity_1.DetalheColeta();
        detalhecoleta.item = data.item;
        detalhecoleta.quantidade = data.quantidade;
        detalhecoleta.status = data.status;
        detalhecoleta.coleta = coleta;
        return this.detalhecoletaRepository.save(detalhecoleta).then(() => {
            return {
                status: true,
            };
        }).catch(() => {
            return {
                status: false,
            };
        });
    }
};
exports.DetalheColetaService = DetalheColetaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('DETALHECOLETA_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], DetalheColetaService);
//# sourceMappingURL=detalhecoleta.service.js.map