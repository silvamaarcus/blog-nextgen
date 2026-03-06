import { useState } from 'react';

import Footer from '@/shared/assets/components/Footer';
import Header from '@/shared/assets/components/Header';
import {
    Avatar,
    Button,
    DateTimePicker,
    Divider,
    Input,
    Select,
    TextBase,
    TextTitle,
    ToggleSwitch,
} from '@/shared/assets/components/ui';
import { PlusIcon, UserIcon } from '@/shared/assets/icons';

import TextEditor from './components/TextEditor';

const options = [
    { value: 'tecnologia', label: 'Tecnologia' },
    { value: 'fotografia', label: 'Fotografia' },
    { value: 'games', label: 'Games' },
];

const AddPostPage = () => {
    const [hasBanner, setHasBanner] = useState<boolean>(false);

    const handleToggleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHasBanner(event.target.checked);
    };

    const handleEditorChange = (html: string) => {
        console.log(html);
    };

    return (
        <>
            <Header />

            <section className="mt-42.5">
                <div className="container space-y-20 px-4">
                    <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-12">
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

                    <Divider />

                    <div className="mt-20 flex flex-col gap-4">
                        <TextTitle size="h3" color="secondary">
                            Adicionar Post
                        </TextTitle>
                        <TextBase size="b3" color="body">
                            Preencha os campos abaixo para adicionar um novo
                            post ao blog.
                        </TextBase>
                    </div>

                    <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-12">
                        <div className="col-span-12 sm:col-span-3">
                            <div>
                                <TextBase size="b2" color="secondary">
                                    Data
                                </TextBase>
                                <DateTimePicker />
                            </div>
                        </div>

                        <div className="col-span-12 sm:col-span-3">
                            <div>
                                <TextBase size="b2" color="secondary">
                                    Categoria
                                </TextBase>
                                <Select options={options} />
                            </div>
                        </div>

                        <div className="col-span-12 sm:col-span-6">
                            <div>
                                <TextBase size="b2" color="secondary">
                                    Título
                                </TextBase>
                                <Input />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-12">
                        <div className="col-span-12 sm:col-span-9">
                            <div>
                                <TextBase size="b2" color="secondary">
                                    Resumo do post
                                </TextBase>
                                <Input />
                            </div>
                        </div>

                        <div className="col-span-12 sm:col-span-3">
                            <div>
                                <TextBase size="b2" color="secondary">
                                    Tempo de leitura
                                </TextBase>
                                <DateTimePicker type="time" />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-12">
                        <div className="flex w-full flex-col gap-4 sm:col-span-12">
                            <TextBase size="b2" color="secondary">
                                Conteúdo
                            </TextBase>
                            <TextBase size="b3" color="body">
                                Escreva o conteúdo do post utilizando o editor.
                                Para inserir links, basta colar a URL
                                diretamente no editor.
                            </TextBase>
                            <TextEditor onChange={handleEditorChange} />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-12">
                        <div className="flex w-full flex-col gap-4 sm:col-span-12">
                            <div className="flex items-center gap-2">
                                <ToggleSwitch
                                    checked={hasBanner}
                                    onChange={handleToggleChange}
                                    name="post-published"
                                />
                                <TextBase size="b2" color="secondary">
                                    Banner do post (URL da imagem)
                                </TextBase>
                            </div>

                            {hasBanner && <Input />}
                        </div>
                    </div>

                    <div className="flex w-full justify-end">
                        <Button className="w-full sm:w-auto">Adicionar</Button>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default AddPostPage;
