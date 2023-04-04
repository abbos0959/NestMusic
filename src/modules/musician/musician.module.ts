import { Module } from '@nestjs/common';
import { MusiciantEntity } from './musician.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({ imports: [TypeOrmModule.forFeature([MusiciantEntity])] })
export class MusicianModule {}
