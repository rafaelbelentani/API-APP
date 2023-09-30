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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetalheColeta = void 0;
const coleta_entity_1 = require("../coleta/coleta.entity");
const typeorm_1 = require("typeorm");
let DetalheColeta = exports.DetalheColeta = class DetalheColeta {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], DetalheColeta.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => coleta_entity_1.Coleta, coleta => coleta.detalhecoleta),
    __metadata("design:type", coleta_entity_1.Coleta)
], DetalheColeta.prototype, "coleta", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], DetalheColeta.prototype, "item", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], DetalheColeta.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], DetalheColeta.prototype, "quantidade", void 0);
exports.DetalheColeta = DetalheColeta = __decorate([
    (0, typeorm_1.Entity)()
], DetalheColeta);
//# sourceMappingURL=detalhecoleta.entity.js.map