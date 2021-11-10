import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MoviesService } from './movies.service';
import { MovieType } from './dto/create-movie.dto';
import { MovieInput } from './input-movies.input';
import { Movie } from './interfaces/movie.interface';

@Resolver((of) => MovieType)
export class MoviesResolver {
  constructor(private readonly moviesService: MoviesService) {}

  @Query((returns) => [MovieType])
  async movies(): Promise<MovieType[]> {
    return this.moviesService.findAll();
  }

  @Query((returns) => [MovieType])
  async movie(@Args('id') id: string) {
    return this.moviesService.findOne(id);
  }

  @Mutation((returns) => MovieType)
  async createMovie(@Args('input') input: MovieInput): Promise<MovieType> {
    return this.moviesService.create(input);
  }

  @Mutation((returns) => MovieType)
  async updateMovie(@Args('id') id: string, @Args('input') input: MovieInput) {
    return this.moviesService.update(id, input as unknown as Movie);
  }

  @Mutation((returns) => MovieType)
  async deleteMovie(@Args('id') id: string) {
    return this.moviesService.delete(id);
  }
}
