import { PartialType } from '@nestjs/mapped-types';
import { CreateDespesasDto } from './create-despesa.dto';

export class UpdateDespesaDto extends PartialType(CreateDespesasDto) {}
