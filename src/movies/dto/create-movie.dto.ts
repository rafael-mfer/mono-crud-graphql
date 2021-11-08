import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class MovieType {
  @Field(() => ID)
  readonly id?: string;
  @Field()
  readonly title: string;
  @Field()
  readonly director: string;
  @Field()
  readonly releaseDate: Date;
}