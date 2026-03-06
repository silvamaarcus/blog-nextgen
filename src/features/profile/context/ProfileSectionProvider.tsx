import { useState } from 'react';

import type { Section } from '../types';
import { ProfileSectionContext } from './ProfileSectionContext';

export const ProfileSectionProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [section, setSection] = useState<Section>('profile');
    return (
        <ProfileSectionContext.Provider value={{ section, setSection }}>
            {children}
        </ProfileSectionContext.Provider>
    );
};
