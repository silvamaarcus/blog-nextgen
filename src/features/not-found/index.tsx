import { useNavigate } from 'react-router-dom';

import Footer from '@/shared/assets/components/Footer';
import Header from '@/shared/assets/components/Header';
import { Button, TextBase, TextTitle } from '@/shared/assets/components/ui';
import { BlogLogoIcon } from '@/shared/assets/icons';

const NotFoundPage = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <>
            <Header />

            <section className="my-42.5">
                <div className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-12">
                        <div className="col-span-4 hidden sm:block"></div>

                        <div className="col-span-12 sm:col-span-4">
                            <div className="flex flex-col items-center gap-1">
                                <BlogLogoIcon className="hover:opacity-80" />
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
                            </div>

                            <h1 className="bg-brand-gradient-blue-light bg-clip-text text-center text-[144px] font-bold text-transparent">
                                404
                            </h1>

                            <div className="flex flex-col gap-4 text-center">
                                <TextTitle size="h5" color="secondary">
                                    Página não encontrada!
                                </TextTitle>

                                <TextBase size="b3" color="body">
                                    A página que você tá procurando não existe
                                    ou foi removida. Clique para voltar para o
                                    site.
                                </TextBase>
                            </div>

                            <div className="mt-10 flex w-full justify-center">
                                <Button onClick={handleGoHome}>
                                    Voltar p/ Home
                                </Button>
                            </div>
                        </div>

                        <div className="col-span-4 hidden sm:block"></div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default NotFoundPage;
