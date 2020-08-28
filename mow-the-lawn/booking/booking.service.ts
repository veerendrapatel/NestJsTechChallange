import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookingRepository } from './booking.repository';
import { Booking, UserFillableFields, BookingConfirmDto } from './booking.entity';
import { User } from './../user/user.entity';
import * as _ from 'lodash';

@Injectable()
export class BookingService {

  constructor(
    @InjectRepository(BookingRepository)
    private bookingRepository: BookingRepository,
  ) {}

  async createBooking(
    createBookingDto: UserFillableFields,
    user: User,
  ): Promise<BookingConfirmDto> {
    const { areasize } = createBookingDto;
    this.bookingRepository.createBooking(createBookingDto, user);
    const confirm = new BookingConfirmDto();
    if(areasize < 15 ) {
      confirm.cost = '£1';
    } else if(areasize > 15 && areasize < 25) {
      const cost=  areasize - (areasize * 10/100);
      confirm.cost = '£' + cost;
    } else if(areasize > 25) {
      const cost=  areasize - (areasize * 15/100);
      confirm.cost = '£' + cost;
    }
    confirm.message = 'Booking successful';
    return confirm;
  }
}
