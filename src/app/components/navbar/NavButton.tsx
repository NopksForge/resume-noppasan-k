import { redirect } from 'next/navigation'

interface NavButtonProps {
    text: string;
    href: string;
    isSelected: boolean;
}

export default function NavButton({ text, href, isSelected   }: NavButtonProps) {
    return (
        <button className={`rounded-full h-10 w-32 text-blue-500  ${isSelected ? 'bg-white/50' : ''}`}
            onClick={() => redirect(href)}
        >
            {text}
        </button>
    );
}
