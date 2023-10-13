import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { ExpenseType } from './typeInterfaces';
import { NewExpenseValidator } from './api-inputs';

@Controller()
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

  @Post('/addExpense')
  addExpense(@Body() newExpense: NewExpenseValidator) {
    return this.appService.addExpense({
      id: new Date().getTime(),
      ...newExpense,
    });
  }

  @Put('/editExpense/:id')
  editExpense(
    @Param('id') expenseId: string,
    @Body() updatedExpense: NewExpenseValidator,
  ) {
    return this.appService.editExpense({ id: +expenseId, ...updatedExpense });
  }

  @Delete('/deleteExpense/:id')
  deleteExpense(@Param('id') expenseId: string) {
    return this.appService.deleteExpense(expenseId);
  }
}
