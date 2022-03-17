export interface Wish {
  id: string;
  content: string;
  lastUpdateAt: Date;
}

export type WishListDto = Wish;

export type WishDto = Wish;

export interface WishEditDto {
  content: string;
  lastUpdateAt: Date;
}
