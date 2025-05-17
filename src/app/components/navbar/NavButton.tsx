import Link from 'next/link'

interface NavButtonProps {
    text: string;
    href: string;
    isSelected: boolean;
    isWork?: boolean;
}

export default function NavButton({ text, href, isSelected, isWork = false }: NavButtonProps) {
    return (
        <Link href={href} className="contents">
            <button className={`flex overflow-hidden relative flex-row justify-center items-center w-32 h-10 text-sm font-semibold text-blue-500 rounded-full font-helvetica`}>
                <span className="flex relative z-10 justify-center items-center">
                    {text} 
                    {isWork && (
                        <div className="flex justify-center items-center ml-1 w-4 h-4 text-xs font-bold rounded-sm border border-blue-500"> / </div>
                    )}
                </span>
            </button>
        </Link>
    );
}
