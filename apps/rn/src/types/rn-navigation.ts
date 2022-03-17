// https://reactnavigation.org/docs/typescript
export type RootStackParamList = {
  Start: undefined;
  WishList:
    | {
        isGuest: boolean;
        userName: string;
      }
    | undefined;
  WishEdit:
    | {
        id: string;
        value: string;
      }
    | undefined;
};
