"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.detalhecoletaProviders = void 0;
const detalhecoleta_entity_1 = require("./detalhecoleta.entity");
exports.detalhecoletaProviders = [
    {
        provide: 'DETALHECOLETA_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(detalhecoleta_entity_1.DetalheColeta),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=detalhecoleta.providers.js.map