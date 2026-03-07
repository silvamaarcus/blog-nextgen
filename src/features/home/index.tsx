import Footer from '@/shared/assets/components/Footer';
import Header from '@/shared/assets/components/Header';
import { Button, TextTitle } from '@/shared/assets/components/ui';
import { ArrowRightIcon, BlogLogoIconLg } from '@/shared/assets/icons';

import AnimateHero from './components/AnimateHero';

const HomePage = () => {
    return (
        <>
            <Header />

            <AnimateHero />

            <section className="mt-42">
                <div className="container px-4">
                    <div className="flex flex-col items-center gap-1">
                        <BlogLogoIconLg className="hover:opacity-80" />
                        <span className="flex">
                            <TextTitle
                                size="h3"
                                color="secondary"
                                className="font-normal"
                            >
                                blog
                            </TextTitle>
                            <TextTitle
                                size="h3"
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
                </div>
            </section>

            <Footer />
        </>
    );
};

export default HomePage;
