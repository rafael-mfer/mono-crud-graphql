import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class MovieType {
  @Field(() => ID)
  readonly id?: string;
  @Field()
  readonly title: string;
  @Field()
  readonly director: string;
  @Field(() => Int)
  readonly year: number;
}
