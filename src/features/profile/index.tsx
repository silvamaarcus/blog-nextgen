import Footer from '@/shared/assets/components/Footer';
import Header from '@/shared/assets/components/Header';

import AddPostSection from './components/AddPostSection';
import HeaderProfile from './components/HeaderProfile';
import ProfileSection from './components/ProfileSection';

const ProfilePage = () => {
    return (
        <>
            <Header />

            <HeaderProfile />

            <AddPostSection />

            <ProfileSection />

            <Footer />
        </>
    );
};

export default ProfilePage;
