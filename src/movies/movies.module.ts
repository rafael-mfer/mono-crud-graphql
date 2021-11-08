import { Module } from '@nestjs/common';
import { MoviesResolver } from './movies.resolver';
import { MovieSchema } from './movie.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { MoviesService } from './movies.service';

@Module({
 imports: [MongooseModule.forFeature([{ name: 'Movie', schema: MovieSchema }])],
providers: [MoviesResolver, MoviesService],
})
export class MoviesModule {}