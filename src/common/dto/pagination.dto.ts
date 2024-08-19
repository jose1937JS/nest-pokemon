import { IsIn, IsNumber, IsOptional, IsPositive, Min } from "class-validator";

export class PaginationDto {
  @IsOptional()
  @IsPositive()
  @IsNumber()
  @Min(1)
  limit?: number;

  @IsOptional()
  @Min(0)
  @IsNumber()
  offset?: number; // significa que se va a skipear la cantidad que se le asigne

  @IsOptional()
  @IsIn(['true', 'false'])
  pagination?: string;
}