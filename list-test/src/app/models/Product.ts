export interface Product {
  // Expected value: 1
  productId: string;
  // Expected value: http://...
  imagePath: string;
  // Expected value: 4.9
  rating: number;
  // Expected value: 99
  percentage: number;
  // Expected value: 1.2K
  tags: string;
  // Expected value: Xiaomi Wifi Extender
  title: string;
  // Expected value: 12.00
  price: number;
  // Expected value: true
  ePacket: boolean;
  // Expected value: new Date()
  createdAt: Date;
}
