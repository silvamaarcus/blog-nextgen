import Footer from '@/shared/assets/components/Footer';
import Header from '@/shared/assets/components/Header';
import { Button, Input, TextTitle } from '@/shared/assets/components/ui';
import { BlogLogoIcon, LockIcon, UserIcon } from '@/shared/assets/icons';

import Slider from './components/Slider';

const slides = [
    {
        image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        label: 'FOTOGRAFIA',
        title: 'Inspire-se com as melhores fotos.',
    },
    {
        image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1120&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        label: 'TECNOLOGIA',
        title: 'Conteúdo de qualidade para você.',
    },
    {
        image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        label: 'GAMES',
        title: 'Fique por dentro das novidades.',
    },
];

const LoginPage = () => {
    return (
        <>
            <Header />

            <section className="my-42.5">
                <div className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-18">
                        {/* Formulario de login */}
                        <div className="flex flex-col items-center justify-center space-y-15">
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

                            <div>
                                <TextTitle size="h4" color="secondary">
                                    Seja bem-vindo ao blog
                                </TextTitle>

                                <form className="my-8">
                                    <div className="space-y-2">
                                        <Input
                                            icon={<UserIcon />}
                                            placeholder="Digite seu usuário"
                                        />
                                        <Input
                                            icon={<LockIcon />}
                                            placeholder="Digite sua senha"
                                        />
                                    </div>

                                    <div className="my-4 flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <input
                                                type="checkbox"
                                                name="user-remember"
                                                id="user-remember"
                                            />
                                            <label>
                                                <TextTitle
                                                    size="h6"
                                                    color="secondary"
                                                >
                                                    Lembrar-me
                                                </TextTitle>
                                            </label>
                                        </div>
                                        <a href="#">
                                            <TextTitle
                                                size="h6"
                                                color="secondary"
                                                className="hover:text-brand-blue"
                                            >
                                                Esqueceu sua senha?
                                            </TextTitle>
                                        </a>
                                    </div>

                                    <Button type="submit" className="w-full">
                                        Entrar
                                    </Button>
                                </form>
                            </div>
                        </div>

                        {/* Carrosel de imagens */}
                        <div className="hidden sm:block">
                            <Slider images={slides} />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default LoginPage;
