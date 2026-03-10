import { TextBase, TextTitle } from '@/shared/assets/components/ui';
import { ChevronRightIcon } from '@/shared/assets/icons';

interface HeaderHomeSectionProps {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    link: string;
}

const HeaderHomeSection = ({
    icon,
    title,
    subtitle,
    link,
}: HeaderHomeSectionProps) => {
    return (
        <div>
            <div className="flex flex-col sm:flex-row sm:justify-between">
                <div className="space-y-5">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-end">
                        {icon}
                        <TextTitle size="h3" color="secondary">
                            {title}
                        </TextTitle>
                    </div>
                    <TextBase size="b2" color="body">
                        {subtitle}
                    </TextBase>
                </div>
                <a
                    href={link}
                    className="text-brand-blue-dark mt-5 flex items-center gap-1 hover:underline sm:my-0"
                >
                    Explorar mais artigos
                    <ChevronRightIcon />
                </a>
            </div>
        </div>
    );
};

export default HeaderHomeSection;
