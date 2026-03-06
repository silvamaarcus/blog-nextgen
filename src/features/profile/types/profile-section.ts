export type Section = 'addPost' | 'profile';

export interface ProfileSectionContextProps {
    section: Section;
    setSection: (section: Section) => void;
}
