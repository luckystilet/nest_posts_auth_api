import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'
import { ValidationPipe } from './pipes/validation.pipe'

async function start() {
  const PORT = process.env.PORT || 5_000
  const app = await NestFactory.create(AppModule)
  const config = new DocumentBuilder()
    .setTitle('Lesson of advanced backend with Ulbi TV')
    .setDescription('Documentation for REST API')
    .setVersion('1.0.0')
    .addTag('Ulbi TV')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/api/docs', app, document)
  app.useGlobalPipes(new ValidationPipe())
  /** Run App */
  await app.listen(PORT, () => console.log(`server running on ${PORT}`))
}
start().then()
