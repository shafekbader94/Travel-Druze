import { Places } from './schema/places.schema';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { PlacesService } from './places.service';

@Controller('places')
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}

  @Post()
  create(@Body() createPlacesDto: any) {
    return this.placesService.create(createPlacesDto);
  }

  @Get()
  findAll() {
    return this.placesService.findAll();
  }

  // Implement other CRUD routes as needed
}
