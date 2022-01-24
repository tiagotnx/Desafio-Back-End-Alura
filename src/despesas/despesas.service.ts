import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDespesasDto } from './dto/create-despesa.dto';
import { UpdateDespesaDto } from './dto/update-despesa.dto';

@Injectable()
export class DespesasService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateDespesasDto) {
    return this.prisma.despesas.create({ data });
  }

  findAll() {
    return this.prisma.despesas.findMany({});
  }

  findOne(id: number) {
    return this.prisma.despesas.findUnique({
      where: { id },
    });
  }

  update(id: number, data: UpdateDespesaDto) {
    return this.prisma.despesas.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.despesas.delete({
      where: { id },
    });
  }
}
