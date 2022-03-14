export interface Wish {
  id: string;
  content: string;
  lastUpdateAt: string;
}

export type WishListDto = Wish;

export type WishDto = Wish;

export interface WishEditDto {
  content: string;
  lastUpdateAt: string;
}
