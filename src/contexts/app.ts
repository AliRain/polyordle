import { createContext, useContext } from 'react';

import { IAppContext } from 'types/types';

const initialValue = {} as IAppContext;

export const AppContext = createContext<IAppContext>(initialValue);

export function useAppContext(): IAppContext {
  return useContext(AppContext);
}
