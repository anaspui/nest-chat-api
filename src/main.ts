import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as process from "process";
const cors = require("cors");
const express = require("express");
const app = express();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    cors({
      origin: [
        "http://localhost:3000",
        "http://localhost:8080",
        "http://localhost:4200",
        "https://chat-app-three-woad.vercel.app/",
      ],
    })
  );
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
