import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { FoodItem } from './food-item.entity'

@Injectable()
export class FoodItemRepository extends Repository<FoodItem> {
  constructor(
    @InjectRepository(FoodItem)
    repository: Repository<FoodItem>
  ) {
    super(repository.target, repository.manager, repository.queryRunner)
  }
}
