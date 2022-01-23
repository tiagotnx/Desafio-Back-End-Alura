/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReceitasModule } from './receitas/receitas.module';
import { DespesasModule } from './despesas/despesas.module';

@Module({
  imports: [ReceitasModule, DespesasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
