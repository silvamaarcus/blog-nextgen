import { render, screen } from '@testing-library/react';

import Slider from '.';

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

describe('Slider Component', () => {
    it('should render the correct number of slides', () => {
        render(<Slider images={slides} />); // Renderiza o componente com os slides de teste

        const renderedSlides = screen.getAllByRole('img'); // Obtém todas as imagens renderizadas no componente
        expect(renderedSlides).toHaveLength(slides.length); // Verifica se o número de imagens renderizadas é igual ao número de slides fornecidos
    });

    it('should apply autoplay to slides', () => {
        const time = vi.useFakeTimers(); // Mock de timers para controlar o tempo durante o teste

        render(<Slider images={slides} />); // Renderiza o componente

        // Verifica se o primeiro slide está visível inicialmente
        const firstImg = screen.getByAltText(slides[0].label);
        expect(firstImg).toBeVisible();

        // Avança o tempo para o próximo slide e verifica se o segundo slide está visível
        time.advanceTimersByTime(3500);
        const secondImg = screen.getByAltText(slides[1].label);
        expect(secondImg).toBeVisible();

        // Avança mais um intervalo para verificar o terceiro slide
        time.advanceTimersByTime(3500);
        const thirdImg = screen.getByAltText(slides[2].label);
        expect(thirdImg).toBeVisible();

        vi.useRealTimers(); // Limpa o mock de timers para evitar efeitos colaterais em outros testes
    });
});
