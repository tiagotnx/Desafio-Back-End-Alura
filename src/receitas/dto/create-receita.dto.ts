import { Prisma } from '@prisma/client';
import { Receita } from '../entities/receita.entity';

export class CreateReceitaDto extends Receita {
  descricao: string;
  valor: string | number | Prisma.Decimal;
}
