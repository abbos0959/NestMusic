import { profile } from 'console';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { IsString } from 'class-validator';
import { Role } from 'src/commons/enums/role.enums';
import { Auth } from 'src/commons/classes/auth';
import { hash } from 'bcrypt';
import { Profile } from 'src/modules/profile/profile.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;
  @Column()
  password: string;
  @Column({ unique: true })
  email: string;
  @Column({
    type: 'enum',
    enum: Role,
    array: true,
  })
  role: Role[];

  @Column()
  salt: string;
  @Column('simple-json')
  auth: Auth;

  async validatePassword(password: string) {
    const hash1 = await hash(password, this.salt);
    return hash1 === this.password;
  }

  @OneToOne(() => Profile, (profile) => profile.user)
  @JoinColumn()
  profile: Profile;
}
