import Footer from '@/shared/assets/components/Footer';
import Header from '@/shared/assets/components/Header';
import {
    Avatar,
    Badge,
    TextBase,
    TextTitle,
} from '@/shared/assets/components/ui';

const PostPage = () => {
    const banner =
        'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1026&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

    return (
        <>
            <Header />

            {/* Banner */}
            <section
                style={{ backgroundImage: `url(${banner})`, height: '600px' }}
                className="relative mt-20 h-full w-full bg-cover bg-center"
            >
                <div className="pointer-events-none absolute bottom-0 left-0 h-2/3 w-full bg-linear-to-t from-black/90 to-transparent" />

                <section className="absolute mt-90 h-full w-full">
                    <div className="container px-4">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <Badge className="mb-4" size="md">
                                Tecnologia
                            </Badge>
                            <TextTitle
                                size="h3"
                                color="secondary"
                                className="max-w-225"
                            >
                                Quais as vantagens de ter um ecossistema Apple?
                            </TextTitle>
                            <TextBase
                                size="b2"
                                color="body"
                                className="max-w-225"
                            >
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Ornare urna pharetra ut ac,
                                pellentesque.
                            </TextBase>

                            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                                <Avatar
                                    size="large"
                                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Nome"
                                />
                                <div className="flex flex-col text-left">
                                    <TextBase size="b3" color="secondary">
                                        by Emily Grace
                                    </TextBase>
                                    <TextBase size="b3" color="body">
                                        @emily
                                    </TextBase>
                                </div>
                                <TextTitle
                                    size="h5"
                                    className="text-brand-gray-6 hidden sm:block"
                                >
                                    -
                                </TextTitle>
                                <TextBase size="b3" color="body">
                                    Aug 2, 2020 - 8 min read
                                </TextBase>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

            <div className="container px-4">
                <div className="mt-40">
                    <TextBase size="b2" color="body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Architecto culpa, dolores, soluta nisi, voluptatum ad
                        itaque vero quaerat expedita distinctio minus beatae
                        voluptatem totam hic repellendus commodi eaque omnis
                        quo. Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Delectus odio dolore, incidunt consequuntur vel
                        nam excepturi architecto quia magnam dolorem blanditiis
                        placeat nulla a repudiandae amet sapiente? Minima, harum
                        impedit. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Facilis dolorum perferendis recusandae
                        dignissimos. Beatae dolor velit a! Amet, doloribus
                        obcaecati minima deleniti deserunt incidunt quia aliquid
                        id, nemo accusamus dolorum. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Modi ab obcaecati
                        inventore iste sed tempore fugit. Libero eos
                        consequuntur facere, rerum est quam laborum. Numquam
                        itaque deserunt accusantium aut perferendis. Lorem ipsum
                        dolor sit amet consectetur adipisicing elit. Architecto
                        culpa, dolores, soluta nisi, voluptatum ad itaque vero
                        quaerat expedita distinctio minus beatae voluptatem
                        totam hic repellendus commodi eaque omnis quo. Lorem
                        ipsum, dolor sit amet consectetur adipisicing elit.
                        Delectus odio dolore, incidunt consequuntur vel nam
                        excepturi architecto quia magnam dolorem blanditiis
                        placeat nulla a repudiandae amet sapiente? Minima, harum
                        impedit. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Facilis dolorum perferendis recusandae
                        dignissimos. Beatae dolor velit a! Amet, doloribus
                        obcaecati minima deleniti deserunt incidunt quia aliquid
                        id, nemo accusamus dolorum. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Modi ab obcaecati
                        inventore iste sed tempore fugit. Libero eos
                        consequuntur facere, rerum est quam laborum. Numquam
                        itaque deserunt accusantium aut perferendis
                    </TextBase>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default PostPage;
