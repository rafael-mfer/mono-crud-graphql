import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MovieType } from './dto/create-movie.dto';
import { Movie } from './interfaces/movie.interface';
import { MovieInput } from './input-movies.input';

@Injectable()
export class MoviesService {
  constructor(@InjectModel('Movie') private movieModel: Model<Movie>) {}

  async create(createMovieDto: MovieInput): Promise<MovieType> {
    const createdMovie = new this.movieModel(createMovieDto);
    return await createdMovie.save();
  }

  async findAll(): Promise<MovieType[]> {
    return await this.movieModel.find().exec();
  }

  async findOne(id: string): Promise<MovieType> {
    return await this.movieModel.findOne({ _id: id });
  }

  async delete(id: string): Promise<MovieType> {
    return await this.movieModel.findByIdAndRemove(id);
  }

  async update(id: string, movie: Movie): Promise<MovieType> {
    return await this.movieModel.findByIdAndUpdate(id, movie, { new: true });
  }
}