import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
// import fs from 'fs';
// const fs = require('fs');
import { writeFile,readFile } from "fs/promises";


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  
  const config = new DocumentBuilder()
  .setTitle('base api example')
  .setDescription('The base api API description')
  // .setVersion('1.0')
  // .addTag('base api')
  // .addTag('login')
  .addBearerAuth()
  .build()
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document)

  // debugger;
  // const file = await readFile('asset/db.json')
  // const rawFile =  file.toString();
  // console.log(rawFile);
  // const users = JSON.parse(rawFile) || [];

  // const fs = require('fs')
  // fs.readFile('asset/db.json', 'utf8', (err, jsonString) => {
  //   if (err) {
  //       console.log("File read failed:", err)
  //       return
  //   }
  //   console.log('File data:', jsonString) 
  // })
  

  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);

  // const file = fs.readFileSync('asset/db.json')
  // const rawFile =  JSON.parse(file);
  // console.log(rawFile);
  


}
bootstrap();
