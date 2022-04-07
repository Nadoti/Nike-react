import { ICreateProductsDTO } from "../dtos/ICreateProductsDTO"
import { Products } from "../entities/Products"


interface IProductsRepository {
  register({ean, name, price, stock, brand, type}: ICreateProductsDTO): Promise<void>
  list(): Promise<Products[]>
  findByEAN(ean: string): Promise<Products>
}


export { IProductsRepository }