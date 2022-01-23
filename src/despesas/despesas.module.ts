import { Module } from '@nestjs/common';
import { DespesasService } from './despesas.service';
import { DespesasController } from './despesas.controller';

@Module({
  controllers: [DespesasController],
  providers: [DespesasService]
})
export class DespesasModule {}
