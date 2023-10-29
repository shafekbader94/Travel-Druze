import { Model } from 'mongoose';
import { Places, PlacesDocument } from './schema/places.schema';
export declare class PlacesService {
    private placesModel;
    constructor(placesModel: Model<PlacesDocument>);
    create(createPlaces: Places): Promise<Places>;
    findAll(): Promise<Places[]>;
    findOne(id: string): Promise<Places>;
    update(id: string, createPlaces: Places): Promise<Places>;
    remove(id: string): Promise<Places>;
}
