import { Injectable } from '@nestjs/common';
import { ExpenseType } from './typeInterfaces';

@Injectable()
export class ExpenseService {
  private data: ExpenseType[] = [
    {
      id: 1,
      type: 'expense',
      category: 'shopping',
      amount: 200,
      createdAt: '10/13/2023',
    },
    {
      id: 2,
      type: 'expense',
      category: 'shopping',
      amount: 500,
      createdAt: '10/13/2023',
    },
  ];
  getExpenses(): ExpenseType[] {
    return this.data;
  }
  getExpense(id: string): ExpenseType {
    return this.data.find((e) => {
      if (+e.id === +id) {
        return e;
      }
    });
  }

  addExpense(newExpense: ExpenseType) {
    this.data.push(newExpense);
    return 'New Expense Added Successfully!';
  }

  checkExpense(id: number) {
    const findExpense = this.data.find((e) => {
      if (+e.id === +id) return e;
    });

    if (!findExpense) {
      return false;
    }
    return true;
  }

  editExpense(updatedExpense: ExpenseType) {
    const check = this.checkExpense(updatedExpense.id);
    if (!check) {
      return {
        message: 'Invaild Data!',
        error: 'Bad Request',
        statusCode: 400,
      };
    }

    this.data = this.data.map((e) => {
      if (+e.id === +updatedExpense.id) {
        return {
          ...updatedExpense,
        };
      } else return e;
    });
    return 'Edited Succesfully!';
  }
  deleteExpense(id: string) {
    const check = this.checkExpense(+id);
    if (!check) {
      return {
        message: 'Invaild Data!',
        error: 'Bad Request',
        statusCode: 400,
      };
    }

    this.data = this.data.filter((e) => {
      if (+e.id !== +id) return e;
    });
    return 'Deleted Succesfully!';
  }
}
