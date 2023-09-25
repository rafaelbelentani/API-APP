"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemProviders = void 0;
const item_entity_1 = require("./item.entity");
exports.itemProviders = [
    {
        provide: 'FILIAL_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(item_entity_1.Item),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=item.providers.js.map