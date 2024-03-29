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
exports.Coleta = void 0;
const detalhecoleta_entity_1 = require("../detalhecoleta/detalhecoleta.entity");
const usuario_entity_1 = require("../usuario/usuario.entity");
const typeorm_1 = require("typeorm");
let Coleta = exports.Coleta = class Coleta {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Coleta.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_entity_1.Usuario, usuario => usuario.coleta),
    __metadata("design:type", usuario_entity_1.Usuario)
], Coleta.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_entity_1.Usuario, cliente => cliente.coleta),
    __metadata("design:type", usuario_entity_1.Usuario)
], Coleta.prototype, "cliente", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_entity_1.Usuario, filial => filial.coleta),
    __metadata("design:type", usuario_entity_1.Usuario)
], Coleta.prototype, "filial", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Coleta.prototype, "pedido", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Coleta.prototype, "data_hora", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => detalhecoleta_entity_1.DetalheColeta, detalhecoleta => detalhecoleta.coleta),
    __metadata("design:type", Array)
], Coleta.prototype, "detalhecoleta", void 0);
exports.Coleta = Coleta = __decorate([
    (0, typeorm_1.Entity)()
], Coleta);
//# sourceMappingURL=coleta.entity.js.map