import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, BaseEntity } from 'typeorm';
import { User } from '../user/user.entity';
@Entity()
export class Booking extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ondate: string;

  @Column()
  areasize: number;

  @ManyToOne(type => User, user => user.bookings, { eager: false })
  user: User;

  @Column()
  userId: number;
}

export class UserFillableFields {
  ondate: string;
  areasize: number;
}

export class BookingConfirmDto {
  cost: string;
  message: string;
}
