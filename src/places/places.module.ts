import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlacesController } from './places.controller';
import { PlacesService } from './places.service';
import { Places, PlacesSchema } from './schema/places.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{  name: Places.name, schema: PlacesSchema  }]),
  ],
  controllers: [PlacesController],
  providers: [PlacesService],
})
export class PlacesModule {}
