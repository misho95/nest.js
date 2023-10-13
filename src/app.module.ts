import { Module } from '@nestjs/common';
import { ExpenseModule } from './expense/expense.modul';
import { AuthModule } from './auth/auth.modul';
@Module({
  imports: [ExpenseModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
