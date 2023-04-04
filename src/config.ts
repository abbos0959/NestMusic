import { User } from './modules/auth/entities/user.entity';
import { Profile } from './modules/profile/profile.entity';
import { SingertEntity } from './modules/artist/artist.entity';
import { MusiciantEntity } from './modules/musician/musician.entity';

export const config = {
  db: {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'abbos1999',
    database: 'NestMusic',

    entities: [User, Profile, SingertEntity, MusiciantEntity],
    synchronize: true,
  },
};
