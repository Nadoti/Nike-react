import { injectable, inject } from 'tsyringe'
import { IProductsRepository } from '../../repository/IProductsRepository';

interface IRequest {
  ean: string
  name: string
  price: number 
  stock: number
  brand: string
  type: string
}

@injectable()
class RegisterProductsUseCase {
  constructor(@inject("ProductsRepository") private productsRepository: IProductsRepository){}

  async register({ean, name, price, stock, brand, type}: IRequest): Promise<void>{
    const productsAlreadyExist = await this.productsRepository.findByEAN(ean)

    if(productsAlreadyExist) {

    }

    this.productsRepository.register({ean, name, price, stock, brand, type})
  }
}


export { RegisterProductsUseCase }