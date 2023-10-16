import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/travel-druze')
    // , {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


/*
// src/app.module.ts
import { Module } from '@nestjs/common';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/my-nestjs-app', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
  ],
})
export class AppModule {}

*/