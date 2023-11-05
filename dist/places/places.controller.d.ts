import { Places } from './schema/places.schema';
import { PlacesService } from './places.service';
export declare class PlacesController {
    private readonly placesService;
    constructor(placesService: PlacesService);
    create(createPlaces: Places): Promise<Places>;
    findAll(): Promise<Places[]>;
    findOne(id: string): Promise<Places>;
}
