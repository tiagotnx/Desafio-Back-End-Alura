import { Prisma } from '@prisma/client';

export class Receita implements Prisma.receitasUncheckedCreateInput {
  id?: number;
  descricao: string;
  valor: string | number | Prisma.Decimal;
  data?: string | Date;
}
