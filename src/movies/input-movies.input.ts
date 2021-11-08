import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class MovieInput {
  @Field()
  readonly title: string;
  @Field()
  readonly director: string;
  @Field()
  readonly realeaseDate: Date;
}