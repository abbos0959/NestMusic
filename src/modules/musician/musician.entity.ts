import { AbstractAtrist } from 'src/commons/classes/abstract-artist';
import { Gender } from 'src/commons/enums/gender.enums';
import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';

@Entity('musicians')
export class MusiciantEntity extends AbstractAtrist {}
