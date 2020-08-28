import { Controller, Post, Body, UsePipes, ValidationPipe, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { BookingService } from './booking.service';
import { Booking, UserFillableFields, BookingConfirmDto } from './booking.entity';

@Controller('booking')
@UseGuards(AuthGuard())
export class BookingController {
  constructor(private bookingService: BookingService) {}

  @Post()
  @UsePipes(ValidationPipe)
  createBooking(
    @Body() createBookingDto: UserFillableFields,
    @Request() request,
  ): Promise<BookingConfirmDto> {
    return this.bookingService.createBooking(createBookingDto, request.user);
  }
}
