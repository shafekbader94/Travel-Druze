import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Places, PlacesDocument } from './schema/places.schema';
//import { Place } from './interfaces/place.interface';

@Injectable()
export class PlacesService {
  constructor(@InjectModel(Places.name) private placesModel: Model<PlacesDocument>) {}

  async create(createPlaces: Places): Promise<Places> {
    const createdPlaces = new this.placesModel(createPlaces);
    return createdPlaces.save();
  }

  async findAll(): Promise<Places[]> {
    return this.placesModel.find().exec();
  }

  async findOne(id: string): Promise<Places> {
    return this.placesModel.findById(id).exec();
  }

  async update(id: string, createPlaces: Places): Promise<Places> {
    return this.placesModel.findByIdAndUpdate(id, createPlaces, { new: true }).exec();
  }

  async remove(id: string): Promise<Places> {
    return this.placesModel.findByIdAndRemove(id).exec();
  }

}
