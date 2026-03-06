import { createContext } from 'react';

import type { ProfileSectionContextProps } from '../types';

export const ProfileSectionContext = createContext<
    ProfileSectionContextProps | undefined
>(undefined);
