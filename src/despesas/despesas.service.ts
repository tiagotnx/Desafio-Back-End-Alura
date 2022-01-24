import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDespesaDto } from './dto/create-despesa.dto';
import { UpdateDespesaDto } from './dto/update-despesa.dto';

@Injectable()
export class DespesasService {
  constructor(private readonly: PrismaService) {}

  create(createDespesaDto: CreateDespesaDto) {
    return 'This action adds a new despesa';
  }

  findAll() {
    return `This action returns all despesas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} despesa`;
  }

  update(id: number, updateDespesaDto: UpdateDespesaDto) {
    return `This action updates a #${id} despesa`;
  }

  remove(id: number) {
    return `This action removes a #${id} despesa`;
  }
}
