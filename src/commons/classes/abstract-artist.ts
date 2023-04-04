import { BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Gender } from '../enums/gender.enums';
import { ArtistType } from '../enums/artist-type-enum';

export abstract class AbstractAtrist extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  @Column()
  info: string;
  @Column()
  image: string;
  @Column({
    type: 'enum',
    enum: ArtistType,
    array: false,
  })
  type: ArtistType;
  @Column()
  gender: Gender;
  @Column()
  nationality: string;
}
