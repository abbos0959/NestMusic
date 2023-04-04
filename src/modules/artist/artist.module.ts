import { Module } from '@nestjs/common';
import { SingertEntity } from './artist.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SingertEntity])],
})
export class ArtistModule {}
