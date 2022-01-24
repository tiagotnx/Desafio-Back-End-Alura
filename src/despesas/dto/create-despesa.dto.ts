import { Prisma } from '@prisma/client';
import { Despesa } from '../entities/despesa.entity';

export class CreateDespesasDto extends Despesa {
  descricao: string;
  valor: string | number | Prisma.Decimal;
}
