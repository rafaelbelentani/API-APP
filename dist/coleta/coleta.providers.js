"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coletaProviders = void 0;
const coleta_entity_1 = require("./coleta.entity");
exports.coletaProviders = [
    {
        provide: 'COLETA_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(coleta_entity_1.Coleta),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=coleta.providers.js.map