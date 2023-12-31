import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { AppController } from './app.controller';
import { CustomersModule } from './modules/customers/customers.module';
import { BankAccountModule } from './modules/bank_account/bank_account.module';
import { TransactionModule } from './modules/transaction/transaction.module';
import { Customer } from './modules/customers/entities/customer.entity';
import { BankAccount } from './modules/bank_account/entities/bank_account.entity';
import { RolesModule } from './modules/roles/roles.module';
import { Session } from './modules/auth/session.entity';
import { User } from './modules/users/entities/user.entity';
import { Role } from './modules/roles/entities/role.entity';
import { SummaryTransactionModule } from './summary_transaction/summary_transaction.module';
import { ReportsModule } from './modules/reports/reports.module';
import { PaymentModule } from './modules/payment/payment.module';
import { TransfersModule } from './modules/transfers/transfers.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [
        User,
        Role,
        Customer,
        BankAccount,
        Session
      ],
      logging: true,
    }),
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/first_app'),
    AuthModule,
    UsersModule,
    CustomersModule,
    TransactionModule,
    PaymentModule,
    BankAccountModule,
    RolesModule,
    SummaryTransactionModule,
    ReportsModule,
    TransfersModule
  ],
})
export class AppModule {}
