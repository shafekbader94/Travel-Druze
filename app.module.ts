import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
//  import { PlacesController } from './places/places.controller';
//  import { PlacesService } from './places/places.service';
import { PlacesModule } from './places/places.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/druzetravel-db', {
     // useNewUrlParser: true,
      //useUnifiedTopology: true,
    }),
    PlacesModule,
  ],
  // controllers: [AppController, PlacesModule],
  // providers: [AppService],
  controllers: [],
  providers: [],
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