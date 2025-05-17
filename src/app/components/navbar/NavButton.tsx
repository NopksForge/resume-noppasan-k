import { redirect } from 'next/navigation'

interface NavButtonProps {
    text: string;
    href: string;
    isSelected: boolean;
    isWork?: boolean;
}

export default function NavButton({ text, href, isSelected, isWork = false }: NavButtonProps) {
    return (
        <button className={`rounded-full h-10 w-32 text-blue-500 text-sm font-semibold font-helvetica flex flex-row items-center justify-center ${isSelected ? 'bg-white/50' : ''}`}
            onClick={() => redirect(href)}
        >
            {text} 
            {isWork && (
                <div className="justify-center items-center ml-1 w-4 h-4 text-xs font-bold rounded-sm border-blue-500 mt- 1flex border-1"> / </div>
            )}
        </button>
    );
}
