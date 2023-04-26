import {
  Body,
  Controller,
  Get,
  Post,
  HttpException,
  HttpStatus,
  ParseIntPipe,
  Param,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CustomersService } from '../services/customers.service';
import { CreateCustomerDto } from '../dtos/CreateCustomer.dto';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}

  @Get('/search/:id')
  getById(@Param('id', ParseIntPipe) id: number) {
    const customer = this.customersService.getCustomerId(id);
    if (customer) return customer;
    else throw new HttpException('Customer Not Found!', HttpStatus.BAD_REQUEST);
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  create(@Body() createCustomerDto: CreateCustomerDto) {
    this.customersService.createCustomer(createCustomerDto);
  }
}
