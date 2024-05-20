"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const mongoose_1 = require("@nestjs/mongoose");
const users_service_1 = require("../users/users.service");
const transaction_entity_1 = require("./entities/transaction.entity");
const transactions_controller_1 = require("./transactions.controller");
const transactions_service_1 = require("./transactions.service");
let TransactionsModule = class TransactionsModule {
};
exports.TransactionsModule = TransactionsModule;
exports.TransactionsModule = TransactionsModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: transaction_entity_1.Transaction.name, schema: transaction_entity_1.TransactionSchema }])
        ],
        controllers: [transactions_controller_1.TransactionsController],
        providers: [transactions_service_1.TransactionsService, jwt_1.JwtService, users_service_1.UsersService],
        exports: [transactions_service_1.TransactionsService],
    })
], TransactionsModule);
//# sourceMappingURL=transactions.module.js.map