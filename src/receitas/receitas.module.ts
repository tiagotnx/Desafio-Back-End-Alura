import { Module } from '@nestjs/common';
import { ReceitasService } from './receitas.service';
import { ReceitasController } from './receitas.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ReceitasController],
  providers: [ReceitasService],
})
export class ReceitasModule {}
