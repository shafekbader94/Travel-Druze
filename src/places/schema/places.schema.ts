import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Places {
  @Prop({ required: true })
  name: string;

  @Prop()
  postion: number[];

  @Prop()
  image: string[];

  @Prop()
  description: string;

  @Prop()
  fullDescription: string;

  @Prop()
  address: string;

  @Prop()
  gallery: string[];

  @Prop()
  openingHours: string;

  @Prop()
  type: string[];

  @Prop()
  rating: number;
}

export type PlacesDocument = Places & Document;
export const PlacesSchema = SchemaFactory.createForClass(Places);
