import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArtistAlbumEntity } from './artist-albom';

@Module({
  imports: [TypeOrmModule.forFeature([ArtistAlbumEntity])],
})
export class AlbumModule {}
