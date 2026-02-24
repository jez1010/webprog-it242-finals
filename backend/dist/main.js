"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
let cachedApp;
async function bootstrap() {
    if (!cachedApp) {
        const app = await core_1.NestFactory.create(app_module_1.AppModule);
        app.enableCors({
            origin: true,
            methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
            credentials: true,
        });
        await app.init();
        cachedApp = app.getHttpAdapter().getInstance();
    }
    return cachedApp;
}
if (process.env.NODE_ENV !== 'production') {
    const startLocal = async () => {
        const app = await core_1.NestFactory.create(app_module_1.AppModule);
        app.enableCors({ origin: true, credentials: true });
        const port = 3000;
        await app.listen(port, '0.0.0.0');
        console.log(`Application is running on: http://0.0.0.0:${port}`);
    };
    startLocal();
}
exports.default = async (req, res) => {
    const instance = await bootstrap();
    instance(req, res);
};
//# sourceMappingURL=main.js.map