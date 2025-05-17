import { redirect } from 'next/navigation'

interface NavButtonProps {
    text: string;
    href: string;
    isSelected: boolean;
    isWork?: boolean;
}

export default function NavButton({ text, href, isSelected, isWork = false }: NavButtonProps) {
    return (
        <button className={`rounded-full h-10 w-32 text-blue-500 text-sm font-bold font-sans flex flex-row items-center justify-center ${isSelected ? 'bg-white/50' : ''}`}
            onClick={() => redirect(href)}
        >
            {text} 
            {isWork && (
                <div className="ml-1 border-1 border-blue-500 w-4 h-4 rounded-sm flex items-center justify-center text-xs font-bold"> / </div>
            )}
        </button>
    );
}
