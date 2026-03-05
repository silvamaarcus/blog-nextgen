import Footer from '@/shared/assets/components/Footer';
import Header from '@/shared/assets/components/Header';
import {
    Button,
    Input,
    TextBase,
    TextTitle,
} from '@/shared/assets/components/ui';
import Avatar from '@/shared/assets/components/ui/Avatar';
import { PlusIcon, UserIcon } from '@/shared/assets/icons';

const ProfilePage = () => {
    return (
        <>
            <Header />

            <section className="mt-42.5 mb-80">
                <div className="container">
                    <div className="grid grid-cols-1 items-center gap-8 px-4 sm:grid-cols-12">
                        <div className="col-span-12 sm:col-span-4">
                            <div className="flex flex-col gap-4">
                                <Avatar
                                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Pessoa"
                                    size="large"
                                />
                                <TextTitle size="h3" color="secondary">
                                    Olá, Sarah.
                                </TextTitle>
                                <TextBase size="b3" color="body">
                                    Olá, bom dia! Seja bem-vindo(a) ao blog.
                                    Compartilhe conhecimento.
                                </TextBase>
                            </div>
                        </div>

                        <div className="hidden sm:col-span-1 sm:block"></div>

                        <div className="col-span-12 sm:col-span-7">
                            <div className="flex w-full flex-wrap items-center gap-8">
                                <Button
                                    color="secondary"
                                    className="flex w-full items-center justify-center gap-4 sm:w-auto"
                                >
                                    <PlusIcon />
                                    Adicionar Post
                                </Button>
                                <Button
                                    color="secondary"
                                    className="flex w-full items-center justify-center gap-4 sm:w-auto"
                                >
                                    <UserIcon />
                                    Meus Dados
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-40 grid grid-cols-1 items-center gap-8 px-4 sm:grid-cols-12">
                        <div className="col-span-12 sm:col-span-2">
                            <div>
                                <TextBase size="b2" color="secondary">
                                    ID
                                </TextBase>
                                <Input />
                            </div>
                        </div>

                        <div className="col-span-12 sm:col-span-4">
                            <div>
                                <TextBase size="b2" color="secondary">
                                    Username
                                </TextBase>
                                <Input />
                            </div>
                        </div>

                        <div className="col-span-12 sm:col-span-3">
                            <div>
                                <TextBase size="b2" color="secondary">
                                    Nome
                                </TextBase>
                                <Input />
                            </div>
                        </div>

                        <div className="col-span-12 sm:col-span-3">
                            <div>
                                <TextBase size="b2" color="secondary">
                                    Sobrenome
                                </TextBase>
                                <Input />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default ProfilePage;
