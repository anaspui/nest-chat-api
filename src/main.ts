import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as process from "process";
const cors = require("cors");
const express = require("express");
const app = express();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors());

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
