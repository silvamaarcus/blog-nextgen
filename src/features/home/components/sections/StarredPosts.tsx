import axios from 'axios';
import { useEffect, useState } from 'react';
import type { Post } from '../../types';
import {
    Avatar,
    Badge,
    TextBase,
    TextTitle,
} from '@/shared/assets/components/ui';

const StarredPosts = () => {
    const [starredPosts, setStarredPosts] = useState<Post[]>([]);

    const handleStarredPosts = async () => {
        try {
            // Lógica para buscar os posts mais estrelados
            const response = await axios.get('http://localhost:3000/posts');

            const starredPosts = response.data;

            setStarredPosts(starredPosts);
        } catch (error) {
            console.error('Erro ao buscar os posts mais estrelados:', error);
        }
    };

    useEffect(() => {
        handleStarredPosts();
    }, []);

    // Obtem o post mais vistos (com maior número de views)
    const sortedByViews = [...starredPosts].sort(
        (a, b) => Number(b.views) - Number(a.views)
    );

    const getTopByCategory = (category: string) =>
        sortedByViews.find((post) => post.category === category);

    const firstStarredPost = getTopByCategory('games');
    const secondStarredPost = getTopByCategory('tecnologia');
    const thirdStarredPost = getTopByCategory('cinema');
    const fourthStarredPost = getTopByCategory('fotografia');

    return (
        <section className="grid h-full grid-cols-1 justify-center gap-8 sm:h-160 sm:grid-cols-12">
            <div className="col-span-12 h-90 sm:col-span-6 sm:h-160">
                {firstStarredPost && (
                    <div
                        key={firstStarredPost.id}
                        className="group relative col-span-12 flex h-full cursor-pointer flex-col justify-end overflow-hidden p-3 hover:brightness-80 sm:col-span-6 sm:p-8"
                    >
                        {/* Imagem de fundo com efeito de zoom */}
                        <div
                            className="absolute inset-0 z-0 transition-transform duration-900 group-hover:scale-105"
                            style={{
                                backgroundImage: `url(${firstStarredPost.imageUrl})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}
                        />
                        {/* Overlay escuro */}
                        <div className="absolute inset-0 z-10 bg-black/40"></div>
                        {/* Conteúdo */}
                        <div className="relative z-20 flex flex-col">
                            <Badge className="mb-3 w-fit">
                                {firstStarredPost.category}
                            </Badge>
                            <TextTitle size="h4" color="secondary">
                                {firstStarredPost.title}
                            </TextTitle>
                            <TextBase
                                size="b2"
                                className="text-brand-gray-7 mt-2"
                            >
                                {firstStarredPost.resume}
                            </TextBase>
                            <div className="mt-6 flex flex-wrap items-center justify-between">
                                <div className="flex items-center gap-4">
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
                                </div>

                                <TextBase size="b3" color="body">
                                    Aug 2, 2020 - 8 min read
                                </TextBase>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="col-span-12 space-y-8 sm:col-span-6">
                {secondStarredPost && (
                    <div className="h-60 w-full sm:h-75">
                        <div
                            key={secondStarredPost.id}
                            className="group relative col-span-12 flex h-full cursor-pointer flex-col justify-end overflow-hidden p-8 hover:brightness-80 sm:col-span-6"
                        >
                            {/* Imagem de fundo com efeito de zoom */}
                            <div
                                className="absolute inset-0 z-0 transition-transform duration-900 group-hover:scale-105"
                                style={{
                                    backgroundImage: `url(${secondStarredPost.imageUrl})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                }}
                            />
                            {/* Overlay escuro */}
                            <div className="absolute inset-0 z-10 bg-black/40"></div>
                            {/* Conteúdo */}
                            <div className="relative z-20 flex flex-col space-y-2">
                                <Badge className="w-fit">
                                    {secondStarredPost.category}
                                </Badge>
                                <TextTitle size="h5" color="secondary">
                                    {secondStarredPost.title}
                                </TextTitle>
                                <TextBase size="b3" color="body">
                                    by Lia Lake - Aug 2, 2020 - 8 min read
                                </TextBase>
                            </div>
                        </div>
                    </div>
                )}

                <div className="h-120 w-full overflow-hidden sm:h-75">
                    <div className="flex h-full flex-col gap-8 sm:flex-row">
                        {thirdStarredPost && (
                            <div className="h-full flex-1">
                                <div
                                    key={thirdStarredPost.id}
                                    className="group relative col-span-12 flex h-full cursor-pointer flex-col justify-end overflow-hidden p-4 hover:brightness-80 sm:col-span-6 sm:p-8"
                                >
                                    {/* Imagem de fundo com efeito de zoom */}
                                    <div
                                        className="absolute inset-0 z-0 transition-transform duration-900 group-hover:scale-105"
                                        style={{
                                            backgroundImage: `url(${thirdStarredPost.imageUrl})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            backgroundRepeat: 'no-repeat',
                                        }}
                                    />
                                    {/* Overlay escuro */}
                                    <div className="absolute inset-0 z-10 bg-black/40"></div>
                                    {/* Conteúdo */}
                                    <div className="relative z-20 flex flex-col space-y-2">
                                        <Badge className="w-fit">
                                            {thirdStarredPost.category}
                                        </Badge>
                                        <TextTitle size="h6" color="secondary">
                                            {thirdStarredPost.title}
                                        </TextTitle>
                                        <TextBase size="b3" color="body">
                                            by Lia Lake - Aug 2, 2020
                                        </TextBase>
                                    </div>
                                </div>
                            </div>
                        )}

                        {fourthStarredPost && (
                            <div className="h-full flex-1">
                                <div
                                    key={fourthStarredPost.id}
                                    className="group relative col-span-12 flex h-full cursor-pointer flex-col justify-end overflow-hidden p-4 hover:brightness-80 sm:col-span-6 sm:p-8"
                                >
                                    {/* Imagem de fundo com efeito de zoom */}
                                    <div
                                        className="absolute inset-0 z-0 transition-transform duration-900 group-hover:scale-105"
                                        style={{
                                            backgroundImage: `url(${fourthStarredPost.imageUrl})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            backgroundRepeat: 'no-repeat',
                                        }}
                                    />
                                    {/* Overlay escuro */}
                                    <div className="absolute inset-0 z-10 bg-black/40"></div>
                                    {/* Conteúdo */}
                                    <div className="relative z-20 flex flex-col space-y-2">
                                        <Badge className="w-fit">
                                            {fourthStarredPost.category}
                                        </Badge>
                                        <TextTitle size="h6" color="secondary">
                                            {fourthStarredPost.title}
                                        </TextTitle>
                                        <TextBase size="b3" color="body">
                                            by Lia Lake - Aug 2, 2020
                                        </TextBase>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StarredPosts;
