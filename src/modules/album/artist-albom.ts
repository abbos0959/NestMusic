import { AbstractAlbum } from 'src/commons/classes/abstract-album';
import { Column, Entity, ManyToOne } from 'typeorm';
import { SingertEntity } from '../artist/artist.entity';

@Entity('artist-album')
export class ArtistAlbumEntity extends AbstractAlbum {
  @ManyToOne(() => SingertEntity, (singer) => singer.singeralbums, {
    eager: false,
  })
  artist: SingertEntity;

  @Column()
  singerId: number;
}
