import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { config } from "rxjs";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);

  const config = new DocumentBuilder()
    .setTitle("M2 api")
    .setDescription("The M2 api API description")
    .setVersion("1.0")
    .addTag("M2")
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document, {
    swaggerOptions: {
      displayRequestDuration: true,
      filter: true,
      persistAuthorization: true,
      tagsSorter: "alpha",
      operationsSorter: "alpha",
      // docExpansion: 'none',
    },
  });
}
bootstrap();
