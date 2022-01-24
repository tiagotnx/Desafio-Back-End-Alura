import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateReceitaDto } from './dto/create-receita.dto';
import { UpdateReceitaDto } from './dto/update-receita.dto';

@Injectable()
export class ReceitasService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateReceitaDto) {
    return this.prisma.receitas.create({ data });
  }

  findAll() {
    return this.prisma.receitas.findMany({});
  }

  findOne(id: number) {
    return `This action returns a #${id} receita`;
  }

  update(id: number, updateReceitaDto: UpdateReceitaDto) {
    return `This action updates a #${id} receita`;
  }

  remove(id: number) {
    return `This action removes a #${id} receita`;
  }
}
