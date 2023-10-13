import { IsNotEmpty, IsNumber } from 'class-validator';

export class NewExpenseValidator {
  @IsNotEmpty()
  type: string;
  category: string;
  @IsNumber()
  amount: number;
}
