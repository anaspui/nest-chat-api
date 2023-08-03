import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as process from "process";
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      "http://localhost:3000",
      "http://localhost:8080",
      "http://localhost:4200",
    ],
  });
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
