import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Places, PlacesDocument } from './schema/places.schema';

@Injectable()
export class PlacesService {
  constructor(@InjectModel(Places.name) private placesModel: Model<PlacesDocument>) {}

  async create(createPlacesDto: any): Promise<Places> {
    const createdPlaces = new this.placesModel(createPlacesDto);
    return createdPlaces.save();
  }

  async findAll(): Promise<Places[]> {
    return this.placesModel.find().exec();
  }

}
