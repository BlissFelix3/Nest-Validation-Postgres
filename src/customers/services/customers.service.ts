import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from '../dtos/CreateCustomer.dto';

@Injectable()
export class CustomersService {
  customers = [
    {
      id: 1,
      email: 'johndoe@gmail.com',
      name: 'Doe',
    },
    {
      id: 2,
      email: 'john@gmail.com',
      name: 'John',
    },
    {
      id: 3,
      email: 'spencer@gmail.com',
      name: 'spencer',
    },
  ];

  getCustomerId(id: number) {
    return this.customers.find((user) => user.id === id);
  }

  createCustomer(customerDto: CreateCustomerDto) {
    this.customers.push(customerDto);
  }
}
