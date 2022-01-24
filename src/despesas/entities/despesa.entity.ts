import { Prisma } from '@prisma/client';

export class Despesa implements Prisma.despesasUncheckedCreateInput {
  id?: number;
  descricao: string;
  valor: string | number | Prisma.Decimal;
  data?: string | Date;
}
