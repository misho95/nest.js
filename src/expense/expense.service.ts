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
    },
    {
      id: 2,
      type: 'expense',
      category: 'shopping',
      amount: 500,
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
  }
  editExpense(updatedExpense: ExpenseType) {
    this.data = this.data.map((e) => {
      if (+e.id === +updatedExpense.id) {
        return {
          ...updatedExpense,
        };
      } else return e;
    });
  }
  deleteExpense(id: string) {
    this.data = this.data.filter((e) => {
      if (+e.id !== +id) return e;
    });
  }
}
