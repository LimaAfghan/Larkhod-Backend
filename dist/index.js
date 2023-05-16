"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./app"));
const config_1 = __importDefault(require("./config/config"));
const logger_1 = __importDefault(require("./config/logger"));
const book = require('./schoolsubject');
const bookSchema = require('./Models/Book');
mongoose_1.default.set("strictQuery", true);
mongoose_1.default
    .connect(config_1.default.mongo.connection_string)
    .then(() => {
    bookSchema.insertMany(book);
    const server = app_1.default.listen(config_1.default.port || 8000, () => {
        logger_1.default.info(`Listening to port ${config_1.default.port}`);
    });
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