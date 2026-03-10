import Footer from '@/shared/assets/components/Footer';
import Header from '@/shared/assets/components/Header';
import { Button, TextTitle } from '@/shared/assets/components/ui';
import {
    ArrowRightIcon,
    BgStarIcon,
    BlogLogoIconLg,
} from '@/shared/assets/icons';

import AnimateHero from './components/AnimateHero';
import HeaderHomeSection from './components/HeaderHomeSection';
import StarredPosts from './components/sections/StarredPosts';

const HomePage = () => {
    return (
        <>
            <Header />

            <AnimateHero />

            <section className="mt-42">
                <div className="container overflow-hidden px-6">
                    <div className="flex flex-col items-center gap-1">
                        <BlogLogoIconLg className="hover:opacity-80" />
                        <span className="flex">
                            <TextTitle
                                size="h1"
                                color="secondary"
                                className="font-normal"
                            >
                                blog
                            </TextTitle>
                            <TextTitle
                                size="h1"
                                color="primary"
                                className="font-normal"
                            >
                                .
                            </TextTitle>
                        </span>

                        <TextTitle
                            size="h5"
                            className="text-brand-gray-7 my-10 w-122 text-center font-normal"
                        >
                            Um blog para todos. Escrever. Ler. Comentar.
                            Contribuir. Aprender. Conectar.
                        </TextTitle>

                        <Button
                            className="flex items-center gap-4"
                            size="large"
                        >
                            Começar a escrever
                            <ArrowRightIcon />
                        </Button>
                    </div>

                    <div className="my-14">
                        <HeaderHomeSection
                            icon={<BgStarIcon />}
                            title="Destaques"
                            subtitle="Últimas notícias, fotos, vídeos e reportagens especiais"
                            link="#"
                        />
                    </div>

                    <StarredPosts />
                </div>
            </section>

            <Footer />
        </>
    );
};

export default HomePage;
