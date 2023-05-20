"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./app"));
const config_1 = __importDefault(require("./config/config"));
const logger_1 = __importDefault(require("./config/logger"));
mongoose_1.default.set("strictQuery", true);
mongoose_1.default
    .connect(config_1.default.mongo.connection_string)
    .then(() => {
    const server = app_1.default.listen(config_1.default.port || 8000, () => __awaiter(void 0, void 0, void 0, function* () {
        logger_1.default.info(`Listening to port ${config_1.default.port}`);
        // await removeAllData()
        // await insertData()
    }));
    const exitHandler = () => {
        if (server) {
            server.close(() => {
                logger_1.default.info("Server closed");
                process.exit(1);
            });
        }
        else {
            process.exit(1);
        }
    };
    const unexpectedErrorHandler = (error) => {
        logger_1.default.error(error);
        exitHandler();
    };
    process.on("uncaughtException", unexpectedErrorHandler);
    process.on("unhandledRejection", unexpectedErrorHandler);
    process.on("SIGTERM", () => {
        logger_1.default.info("SIGTERM received");
        if (server) {
            server.close();
        }
    });
})
    .catch((error) => console.log(`${error} did not connect`));
//# sourceMappingURL=index.js.map