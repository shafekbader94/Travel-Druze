import { Places } from './schema/places.schema';
import { Controller, Get, Post, Body, Param, Put, Delete  } from '@nestjs/common';
import { PlacesService } from './places.service';

@Controller('places')
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}

  @Post()
  create(@Body() createPlaces: Places) {
    return this.placesService.create(createPlaces);
  }

  @Get()
  findAll() {
    return this.placesService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.placesService.findOne(id);
  }

  
}
