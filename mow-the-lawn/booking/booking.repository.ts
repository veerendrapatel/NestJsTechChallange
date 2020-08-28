import { Booking, UserFillableFields } from './booking.entity';
import { EntityRepository, Repository } from 'typeorm';
import { User } from '../user/user.entity';
import { Logger, InternalServerErrorException } from '@nestjs/common';

@EntityRepository(Booking)
export class BookingRepository extends Repository<Booking> {
  async createBooking(
    createBookingkDto: UserFillableFields,
    user: User,
  ): Promise<Booking> {
    const { ondate, areasize } = createBookingkDto;

    const booking = new Booking();
    booking.ondate = ondate;
    booking.areasize = areasize;
    booking.user = user;

    try {
      await booking.save();
    } catch (error) {
      throw new InternalServerErrorException();
    }
    delete booking.user;
    return booking;
  }
}
