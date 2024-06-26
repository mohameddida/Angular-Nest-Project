"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configServices = app.get(config_1.ConfigService);
    const port = configServices.get('PORT');
    await app.listen(port);
}
bootstrap();
//# sourceMappingURL=main.js.map