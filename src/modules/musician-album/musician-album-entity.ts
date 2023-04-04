import { AbstractAlbum } from 'src/commons/classes/abstract-album';
import { Column, Entity, ManyToOne } from 'typeorm';
import { MusiciantEntity } from '../musician/musician.entity';

@Entity('musician-album')
export class MusicianAlbumEntity extends AbstractAlbum {
  @ManyToOne(() => MusiciantEntity, (musiciant) => musiciant.musicianAlbums, {
    eager: false,
  })
  musician: MusiciantEntity;
  @Column()
  musicianId: number;
}
