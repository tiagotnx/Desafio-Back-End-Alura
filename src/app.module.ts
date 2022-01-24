/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReceitasModule } from './receitas/receitas.module';
import { DespesasModule } from './despesas/despesas.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [ReceitasModule, DespesasModule, PrismaService],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
