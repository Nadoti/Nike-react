import { ICreateProductsDTO } from "../../dtos/ICreateProductsDTO";
import { Products } from "../../entities/Products";
import { IProductsRepository } from "../IProductsRepository";
import { Repository, getRepository } from 'typeorm'



class ProductsRepository implements IProductsRepository {
  private repository: Repository<Products>

  constructor() {
    this.repository = getRepository(Products)
  }

  async register({ ean, name, price, stock, brand, type }: ICreateProductsDTO): Promise<void> {
    const products = {
      ean, name, price, stock, brand, type
    }

    await this.repository.save(products)
  }


  async list(): Promise<Products[]> {
    const products = await this.repository.find()
    return products
  }

  async findByEAN(ean: string): Promise<Products> {
    const product = await this.repository.findOne({ ean })
    return product
  }

}


export { ProductsRepository }