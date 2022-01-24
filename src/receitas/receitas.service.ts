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
    return this.prisma.receitas.findUnique({
      where: { id },
    });
  }

  update(id: number, data: UpdateReceitaDto) {
    return this.prisma.receitas.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.receitas.delete({
      where: { id },
    });
  }
}
