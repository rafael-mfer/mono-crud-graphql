import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MoviesService } from './movies.service';
import { MovieType } from './dto/create-movie.dto';
import { MovieInput } from './input-movies.input';
import { Movie } from './movie.model';

@Resolver(() => MovieType)
export class MoviesResolver {
  constructor(private readonly moviesService: MoviesService) {}

  @Query(() => [MovieType])
  async movies(): Promise<MovieType[]> {
    return this.moviesService.findAll();
  }

  @Query(() => MovieType)
  async movie(@Args('id') id: string): Promise<MovieType> {
    return this.moviesService.findOne(id);
  }

  @Mutation(() => MovieType)
  async createMovie(@Args('input') input: MovieInput): Promise<MovieType> {
    return this.moviesService.create(input);
  }

  @Mutation(() => MovieType)
  async updateMovie(@Args('id') id: string, @Args('input') input: MovieInput) {
    return this.moviesService.update(id, input as unknown as Movie);
  }

  @Mutation(() => MovieType)
  async deleteMovie(@Args('id') id: string) {
    return this.moviesService.delete(id);
  }
}
