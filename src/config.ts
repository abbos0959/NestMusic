import { User } from './modules/auth/entities/user.entity';
import { Profile } from './modules/profile/profile.entity';
import { SingertEntity } from './modules/artist/artist.entity';
import { MusiciantEntity } from './modules/musician/musician.entity';
import { MusicianAlbumEntity } from './modules/musician-album/musician-album-entity';
import { ArtistAlbumEntity } from './modules/album/artist-albom';

export const config = {
  db: {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'abbos1999',
    database: 'NestMusic',

    entities: [
      User,
      Profile,
      SingertEntity,
      MusiciantEntity,
      MusicianAlbumEntity,
      ArtistAlbumEntity,
    ],
    synchronize: true,
  },
};
