import {
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
    YoutubeIcon,
} from '../../icons';
import { Button, Input, TextBase, TextTitle } from '../ui';
import Divider from '../ui/Divider';

const Footer = () => {
    return (
        <footer className="bg-brand-black-light mt-100 py-20">
            <div className="container">
                <div className="grid grid-cols-1 gap-8 px-4 sm:grid-cols-12">
                    <div className="col-span-12 sm:col-span-3">
                        <TextTitle size="h4" color="secondary">
                            Posts
                        </TextTitle>
                        <div className="mt-6 flex flex-col space-y-4">
                            <a href="#">
                                <TextBase size="b3" color="body">
                                    Mais vistos
                                </TextBase>
                            </a>
                            <a href="#">
                                <TextBase size="b3" color="body">
                                    Mais comentados
                                </TextBase>
                            </a>
                            <a href="#">
                                <TextBase size="b3" color="body">
                                    Mais populares
                                </TextBase>
                            </a>
                            <a href="#">
                                <TextBase size="b3" color="body">
                                    Mais recentes
                                </TextBase>
                            </a>
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-4">
                        <TextTitle size="h4" color="secondary">
                            Categorias
                        </TextTitle>
                        <div className="mt-6 flex flex-col space-y-4">
                            <a href="#">
                                <TextBase size="b3" color="body">
                                    Tecnologia
                                </TextBase>
                            </a>
                            <a href="#">
                                <TextBase size="b3" color="body">
                                    Games
                                </TextBase>
                            </a>
                            <a href="#">
                                <TextBase size="b3" color="body">
                                    Fotografia
                                </TextBase>
                            </a>
                            <a href="#">
                                <TextBase size="b3" color="body">
                                    Cinema
                                </TextBase>
                            </a>
                            <a href="#">
                                <TextBase size="b3" color="body">
                                    Entreterimento
                                </TextBase>
                            </a>
                            <a href="#">
                                <TextBase size="b3" color="body">
                                    Moda
                                </TextBase>
                            </a>
                        </div>
                    </div>
                    <div className="y col-span-12 sm:col-span-5">
                        <TextTitle size="h4" color="secondary">
                            Quer ser avisado dos novos posts do blog?
                        </TextTitle>
                        <div className="mt-6 flex flex-col space-y-4">
                            <TextBase size="b3" color="body">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ex eum earum ipsam fuga, et
                                odio. Quas, libero quam provident eos
                                dignissimos itaque quae minus sit vero.
                                Quisquam, officia repudiandae. Omnis?
                            </TextBase>

                            <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center">
                                <Input placeholder="Digite seu e-mail aqui" />

                                <Button>Inscrever-se</Button>
                            </div>
                        </div>
                    </div>
                </div>

                <Divider className="my-16" />

                <div className="flex items-center justify-between px-4">
                    <TextBase size="b3" color="body">
                        2022 | Todos os direitos reservados.
                    </TextBase>

                    <div className="flex items-center gap-8">
                        <a href="#">
                            <FacebookIcon />
                        </a>
                        <a href="#">
                            <InstagramIcon />
                        </a>
                        <a href="#">
                            <YoutubeIcon />
                        </a>
                        <a href="#">
                            <TwitterIcon />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
