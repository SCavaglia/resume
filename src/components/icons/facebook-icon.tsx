import { cn } from '@/lib/utils';

type Props = {
    className?: string;
};

export function FacebookIcon({ className }: Props) {
    return (
        <svg
            viewBox="0 0 24 24"
            height="24px"
            className={cn(
                'h-6 cursor-pointer rounded text-white transition-all duration-200 hover:-translate-y-1 hover:bg-sky-600',
                className,
            )}
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M9 8H7v3h2v9h4v-9h3.6l.4-3H13V6c0-.5.5-1 1-1h3V2h-4c-2.5 0-4 1.5-4 4v2z" />
        </svg>
    );
}
