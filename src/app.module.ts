import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { config } from './config';
import { AuthModule } from './modules/auth/auth.module';
import { ProfileModule } from './modules/profile/profile.module';
import { ArtistModule } from './modules/artist/artist.module';
import { MusicianModule } from './modules/musician/musician.module';
import { FavoriteModule } from './modules/favorite/favorite.module';
import { PlaylistModule } from './modules/playlist/playlist.module';
import { SongModule } from './modules/song/song.module';
import { MusicModule } from './modules/music/music.module';
import { AlbumModule } from './modules/album/album.module';
import { MusicianAlbumModule } from './modules/musician-album/musician-album.module';
import { NotificationModule } from './modules/notification/notification.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(config.db as TypeOrmModuleOptions),
    AuthModule,
    ProfileModule,
    ArtistModule,
    MusicianModule,
    FavoriteModule,
    PlaylistModule,
    SongModule,
    MusicModule,
    AlbumModule,
    MusicianAlbumModule,
    NotificationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
