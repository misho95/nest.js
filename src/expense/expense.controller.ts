import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { ExpenseType } from './typeInterfaces';
import { NewExpenseValidator } from './api-inputs';
import { AuthGuard } from './auth.guard';

@UseGuards(AuthGuard)
@Controller('/api/expense')
export class ExpenseController {
  constructor(private readonly appService: ExpenseService) {}

  @Get('/')
  getExpenses(): ExpenseType[] {
    return this.appService.getExpenses();
  }

  @Get('/:id')
  getExpense(@Param('id') expenseId: string): ExpenseType {
    return this.appService.getExpense(expenseId);
  }

  @Post('/')
  addExpense(@Body() newExpense: NewExpenseValidator) {
    return this.appService.addExpense({
      id: new Date().getTime(),
      createdAt: new Date().toString(),
      ...newExpense,
    });
  }

  @Put('/:id')
  editExpense(
    @Param('id') expenseId: string,
    @Body() updatedExpense: NewExpenseValidator,
  ) {
    return this.appService.editExpense({
      id: +expenseId,
      ...updatedExpense,
      createdAt: new Date().toString(),
    });
  }

  @Delete('/:id')
  deleteExpense(@Param('id') expenseId: string) {
    return this.appService.deleteExpense(expenseId);
  }
}
