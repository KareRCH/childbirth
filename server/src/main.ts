import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import axios from 'axios';

const sec = 1000;
const min = 60 * sec;
var url;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  await app.listen(process.env.PORT || 3000);
  url = await app.getUrl();
}
bootstrap();

setInterval(async () => {
  await axios.get(url + "/api")
  .then().catch();
  
}, 25*min);