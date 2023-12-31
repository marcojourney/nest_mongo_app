import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { TransactionService } from './transaction.service';
import { TransactionController } from './transaction.controller';
import { Session } from '../auth/session.entity';
import { SummaryTransaction, SummaryTransactionSchema } from 'src/summary_transaction/schema/summary_transaction.schema';
import { Transaction, TransactionSchema } from './transaction.schema';
import { BankAccount, BankAccountSchema } from '../bank_account/schemas/bank_account.schema';
import { PaymentService } from '../payment/payment.service';
import { PAYMENT_SERVICE } from '../payment/payment.service.interface';

@Module({
  imports: [
    TypeOrmModule.forFeature([Session]),
    MongooseModule.forFeature([
      {name: SummaryTransaction.name, schema: SummaryTransactionSchema},
      {name: Transaction.name, schema: TransactionSchema},
      {name: BankAccount.name, schema: BankAccountSchema},
    ])
  ],
  controllers: [TransactionController],
  providers: [
    TransactionService,
    {
      useClass: PaymentService,
      provide: PAYMENT_SERVICE
    }
  ],
})
export class TransactionModule {}
