import { Gender } from 'src/commons/enums/gender.enums';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../auth/entities/user.entity';

@Entity('profiles')
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;
  @Column()
  lastname: string;
  @Column({
    type: 'enum',
    array: true,
  })
  gender: Gender;
  @Column()
  age: number;
  @Column()
  country: number;
  @Column()
  city: number;
  @Column()
  address: number;
  @Column({ unique: true })
  phone: number;

  @OneToOne(() => User, (user) => user.profile)
  user: User;
}
