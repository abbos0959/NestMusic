import { AbstractAtrist } from 'src/commons/classes/abstract-artist';
import { Gender } from 'src/commons/enums/gender.enums';
import { PrimaryGeneratedColumn, Entity, Column, OneToMany } from 'typeorm';
import { ArtistAlbumEntity } from '../album/artist-albom';

@Entity('singer')
export class SingertEntity extends AbstractAtrist {
  @OneToMany(() => ArtistAlbumEntity, (artistalbum) => artistalbum.artist, {
    eager: true,
  })
  singeralbums: ArtistAlbumEntity[];
}
