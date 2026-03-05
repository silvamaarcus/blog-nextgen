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
        render(<Slider images={slides} />);

        const renderedSlides = screen.getAllByRole('img');
        expect(renderedSlides).toHaveLength(slides.length);
    });
});
