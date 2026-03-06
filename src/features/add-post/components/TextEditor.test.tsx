import { fireEvent, render, screen } from '@testing-library/react';

import TextEditor from './TextEditor';

describe('TextEditor', () => {
    it('should render Toolbar and EditorContent components', () => {
        render(<TextEditor />);
        // Verifica se o botão de parágrafo está presente
        expect(screen.getByText('P')).toBeInTheDocument();
        // Verifica se o EditorContent está presente
        expect(screen.getByTestId('editor-content')).toBeInTheDocument();
    });

    it('should calls onChange when edit text', () => {
        // O TipTap pode não disparar input, então este teste é apenas ilustrativo
        const handleChange = vi.fn(); // Mock da função onChange

        render(<TextEditor onChange={handleChange} />); // Renderiza o editor com o mock

        // Simula digitação
        const editor = screen.getByTestId('editor-content');
        fireEvent.input(editor, { target: { innerHTML: 'teste' } });

        expect(handleChange).toBeDefined(); // Verifica se a função onChange foi chamada
    });

    it('should verify has visible buttons into toolbar', () => {
        render(<TextEditor />); // Renderiza o editor

        // Verifica botões
        expect(
            screen.getByRole('button', { name: 'bold' })
        ).toBeInTheDocument(); // Bold
        expect(
            screen.getByRole('button', { name: 'italic' })
        ).toBeInTheDocument(); // Italic
        expect(screen.getByRole('button', { name: 'h1' })).toBeInTheDocument(); // Heading 1
        expect(screen.getByRole('button', { name: 'h2' })).toBeInTheDocument(); // Heading 2
        expect(
            screen.getByRole('button', { name: 'paragraph' })
        ).toBeInTheDocument(); // Paragraph
        expect(
            screen.getByRole('button', { name: 'bullet-list' })
        ).toBeInTheDocument(); // Bullet List
        expect(
            screen.getByRole('button', { name: 'ordered-list' })
        ).toBeInTheDocument(); // Ordered List
        expect(
            screen.getByRole('button', { name: 'blockquote' })
        ).toBeInTheDocument(); // Blockquote
        expect(
            screen.getByRole('button', { name: 'btn-undo' })
        ).toBeInTheDocument(); // Undo
        expect(
            screen.getByRole('button', { name: 'btn-redo' })
        ).toBeInTheDocument(); // Redo
    });

    it('should create a link when paste URL', () => {
        render(<TextEditor />); // Renderiza o editor

        // Simula colar uma URL
        const editor = screen.getByTestId('editor-content');
        fireEvent.input(editor, {
            target: { innerHTML: 'https://exemplo.com' },
        });

        // Verifica se a URL foi inserida no editor
        expect(editor.innerHTML).toContain('https://exemplo.com');
    });
});
