import { AbstractAtrist } from 'src/commons/classes/abstract-artist';
import { Gender } from 'src/commons/enums/gender.enums';
import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';

@Entity('singer')
export class SingertEntity extends AbstractAtrist {}
