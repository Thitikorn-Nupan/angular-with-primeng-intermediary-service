export class Product {

  public uuid: string;
  public id: number;
  public name: string;
  public imagePath: string;
  public price: number;

  constructor(uuid: string,id: number, name: string, imagePath: string, price: number) {
    this.uuid = uuid;
    this.id = id;
    this.name = name;
    this.imagePath = imagePath;
    this.price = price;
  }

}
