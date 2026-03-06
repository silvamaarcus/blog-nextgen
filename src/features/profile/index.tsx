import Footer from '@/shared/assets/components/Footer';
import Header from '@/shared/assets/components/Header';

import AddPostSection from './components/AddPostSection';
import HeaderProfile from './components/HeaderProfile';
import ProfileSection from './components/ProfileSection';
import { ProfileSectionProvider } from './context/ProfileSectionProvider';
import { useProfileSection } from './hooks/useProfileSection';

const SectionSwitcher = () => {
    const { section } = useProfileSection();
    return section === 'addPost' ? <AddPostSection /> : <ProfileSection />;
};

const ProfilePage = () => {
    return (
        <ProfileSectionProvider>
            <Header />

            <HeaderProfile />
            <SectionSwitcher />

            <Footer />
        </ProfileSectionProvider>
    );
};

export default ProfilePage;
