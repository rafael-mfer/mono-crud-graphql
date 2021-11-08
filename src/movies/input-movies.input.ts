import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class ItemInput {
  @Field()
  readonly title: string;
  @Field()
  readonly director: string;
  @Field()
  readonly realeaseDate: Date;
}