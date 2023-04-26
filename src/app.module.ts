import { Module } from '@nestjs/common';
import { CustomersModule } from './customers/customers.module';
import { CustomersService } from './customers/services/customers.service';
import { CustomersController } from './customers/controllers/customers.controller';
import { UsersModule } from './users/users.module';

@Module({
  imports: [CustomersModule, UsersModule],
  controllers: [CustomersController],
  providers: [CustomersService],
})
export class AppModule {}
