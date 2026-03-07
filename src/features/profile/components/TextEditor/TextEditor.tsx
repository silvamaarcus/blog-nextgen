import './TextEditor.css'; // customizar as fontes e cores do editor

import Link from '@tiptap/extension-link';
import { Editor, EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import {
    Bold,
    Heading1,
    Heading2,
    Italic,
    List,
    ListOrdered,
    Quote,
    Redo,
    Undo,
} from 'lucide-react';

type ToolbarProps = {
    editor: Editor | null;
};

type IconButtonProps = {
    onClick: () => void;
    isActive?: boolean;
    children: React.ReactNode;
    name?: string;
};

const IconButton: React.FC<IconButtonProps> = ({
    onClick,
    isActive = false,
    children,
    name,
}) => (
    <button
        onClick={(e) => {
            e.preventDefault();
            onClick();
        }}
        className={`cursor-pointer rounded-md p-2 transition-colors ${
            isActive
                ? 'bg-brand-blue text-brand-white-dark'
                : 'text-brand-gray-6 hover:bg-brand-white-light/10'
        }`}
        aria-label={name}
    >
        {children}
    </button>
);

const Toolbar: React.FC<ToolbarProps> = ({ editor }) => {
    if (!editor) return null;

    return (
        <div className="border-brand-white-light/10 bg-brand-black-light flex flex-wrap gap-1 rounded-t-lg border-b p-2">
            <IconButton
                onClick={() => editor.chain().focus().toggleBold().run()}
                isActive={editor.isActive('bold')}
                name="bold"
            >
                <Bold size={18} />
            </IconButton>

            <IconButton
                onClick={() => editor.chain().focus().toggleItalic().run()}
                isActive={editor.isActive('italic')}
                name="italic"
            >
                <Italic size={18} />
            </IconButton>

            <div className="mx-1 h-6 w-px self-center bg-gray-300" />

            <IconButton
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 1 }).run()
                }
                isActive={editor.isActive('heading', { level: 1 })}
                name="h1"
            >
                <Heading1 size={18} />
            </IconButton>

            <IconButton
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 2 }).run()
                }
                isActive={editor.isActive('heading', { level: 2 })}
                name="h2"
            >
                <Heading2 size={18} />
            </IconButton>

            {/* Parágrafo */}
            <IconButton
                onClick={() => editor.chain().focus().setParagraph().run()}
                isActive={editor.isActive('paragraph')}
                name="paragraph"
            >
                <span className="text-xs font-bold">P</span>
            </IconButton>

            <div className="bg-brand-black-light mx-1 h-6 w-px self-center" />

            <IconButton
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                isActive={editor.isActive('bulletList')}
                name="bullet-list"
            >
                <List size={18} />
            </IconButton>

            {/* Lista ordenada */}
            <IconButton
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                isActive={editor.isActive('orderedList')}
                name="ordered-list"
            >
                <ListOrdered size={18} />
            </IconButton>

            <IconButton
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                isActive={editor.isActive('blockquote')}
                name="blockquote"
            >
                <Quote size={18} />
            </IconButton>

            <div className="flex-1" />

            <IconButton
                onClick={() => editor.chain().focus().undo().run()}
                name="btn-undo"
            >
                <Undo size={18} />
            </IconButton>
            <IconButton
                onClick={() => editor.chain().focus().redo().run()}
                name="btn-redo"
            >
                <Redo size={18} />
            </IconButton>
        </div>
    );
};

type TextEditorProps = {
    onChange?: (html: string) => void;
};

const TextEditor: React.FC<TextEditorProps> = ({ onChange }) => {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Link.configure({
                openOnClick: true,
                linkOnPaste: true,
                autolink: true,
                HTMLAttributes: {
                    class: 'text-brand-blue underline',
                },
            }),
        ],
        content: '',
        onUpdate: ({ editor }) => {
            if (onChange) {
                onChange(editor.getHTML());
            }
        },
        editorProps: {
            attributes: {
                class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl focus:outline-none min-h-[300px] p-4 max-w-none text-brand-white-dark',
            },
        },
    });

    return (
        <div className="border-brand-white-light/10 bg-brand-black-light w-full rounded-lg border shadow-sm">
            <Toolbar editor={editor} />
            <EditorContent editor={editor} data-testid="editor-content" />
        </div>
    );
};

export default TextEditor;
