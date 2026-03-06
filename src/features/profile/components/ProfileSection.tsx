import {
    Button,
    Input,
    Textarea,
    TextBase,
    TextTitle,
} from '@/shared/assets/components/ui';

const ProfileSection = () => {
    return (
        <>
            <section className="mt-42.5">
                <div className="container space-y-20 px-4">
                    <div className="mt-20 flex flex-col gap-4">
                        <TextTitle size="h3" color="secondary">
                            Meus dados
                        </TextTitle>
                        <TextBase size="b3" color="body">
                            Abaixo são listados os seus dados de acesso ao blog.
                        </TextBase>
                    </div>

                    <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-12">
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

                    <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-12">
                        <div className="flex w-full flex-col gap-4 sm:col-span-12">
                            <TextBase size="b2" color="secondary">
                                Bio
                            </TextBase>
                            <Textarea />
                        </div>
                    </div>

                    <div className="flex w-full justify-end">
                        <Button className="w-full sm:w-auto">
                            Salvar dados
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProfileSection;
