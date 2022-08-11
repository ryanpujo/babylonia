export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface Emporium {
  name: string;
  addresses: Address[];
  email: string;
  rating: number;
  description: string;
}
export interface User {
  username: string;
  email: string;
  password: string;
  following: Emporium[];
  role: Role[];
  createdAt: number;
  lastLoginAt: number;
  profile: Profile;
  addresses: Address[];
  isAlsoSeller: boolean;
  emporium: Emporium;
}

export interface Profile {
  name: string;
  gender: string;
  picture: string;
}

export enum Role {
  ADMIN = 'admin',
  USER = 'user',
}
export interface Address {
  country: string;
  city: string;
  zipCode: number;
  fullAddress: string;
}
