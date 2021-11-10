import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class MovieInput {
  @Field()
  readonly title: string;
  @Field()
  readonly director: string;
  @Field(() => Int)
  readonly year: number;
}
