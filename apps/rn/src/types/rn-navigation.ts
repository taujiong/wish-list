// https://reactnavigation.org/docs/typescript
export type RootStackParamList = {
  Start: undefined;
  WishList: undefined;
  WishEdit:
    | {
        id: string;
        value: string;
      }
    | undefined;
};
