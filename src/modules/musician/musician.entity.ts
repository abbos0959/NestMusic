import { AbstractAtrist } from 'src/commons/classes/abstract-artist';
import { Gender } from 'src/commons/enums/gender.enums';
import { PrimaryGeneratedColumn, Entity, Column, OneToMany } from 'typeorm';
import { MusicianAlbumEntity } from '../musician-album/musician-album-entity';

@Entity('musicians')
export class MusiciantEntity extends AbstractAtrist {
  @OneToMany(
    () => MusicianAlbumEntity,
    (musicianalbum) => musicianalbum.musician,
    {
      eager: true,
    },
  )
  musicianAlbums: MusicianAlbumEntity[];
}
