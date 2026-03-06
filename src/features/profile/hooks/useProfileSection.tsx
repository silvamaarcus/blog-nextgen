import { useContext } from 'react';

import { ProfileSectionContext } from '../context/ProfileSectionContext';

export const useProfileSection = () => {
    const context = useContext(ProfileSectionContext);
    if (!context)
        throw new Error(
            'useProfileSection must be used within ProfileSectionProvider'
        );
    return context;
};
