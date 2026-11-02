import { ArrowUpRight, Handshake, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const partners = [
    {
        name: 'ATHENA',
        subtitle: 'GROUPE PARTENAIRE',
    },
    {
        name: 'MONCEAU',
        subtitle: 'FINANCE & TRUST',
    },
    {
        name: 'LOIRE',
        subtitle: 'INDUSTRIE & TECH',
    },
    {
        name: 'BASTILLE',
        subtitle: 'VENTURES & STARTUPS',
    },
    {
        name: 'PARIS',
        subtitle: 'ASSOCIÉS CONSEIL',
    },
];

export function ScPartners() {
    return (
        <section className="relative isolate overflow-hidden border-y border-[#b4966e]/15 bg-[#f5f3ee] px-6 py-20 sm:px-10 lg:px-16 dark:bg-[#0d1f2d]">
            {/* Background decorations */}
            <div className="pointer-events-none absolute top-0 -left-32 size-80 rounded-full bg-[#b4966e]/10 blur-[100px]" />
            <div className="pointer-events-none absolute -right-32 bottom-0 size-80 rounded-full bg-[#35536b]/10 blur-[100px]" />

            <div className="relative mx-auto max-w-7xl">
                {/* Heading */}
                <div className="mb-12 flex flex-col items-center text-center">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#b4966e]/30 bg-[#b4966e]/10 px-4 py-2 text-xs font-semibold tracking-[0.2em] text-[#94764e] uppercase dark:text-[#d0b997]">
                        <Handshake className="size-4" />
                        Ils nous font confiance
                    </div>

                    <h2 className="font-cormorant text-3xl font-semibold tracking-wide text-[#172b3a] sm:text-4xl lg:text-5xl dark:text-[#f5f3ee]">
                        Ils accordent leur confiance au{' '}
                        <span className="text-[#a88960] dark:text-[#c6a77e]">
                            Cabinet Malesherbes
                        </span>
                    </h2>

                    <div className="mt-6 flex items-center gap-3">
                        <span className="h-px w-12 bg-[#b4966e]/50" />
                        <Sparkles className="size-4 text-[#b4966e]" />
                        <span className="h-px w-12 bg-[#b4966e]/50" />
                    </div>
                </div>

                {/* Partners */}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                    {partners.map((partner, index) => (
                        <div
                            key={partner.name}
                            className={cn(
                                'group relative flex min-h-32 flex-col items-center justify-center overflow-hidden rounded-xl border border-[#b4966e]/20 bg-white/70 px-4 py-7 text-center shadow-sm backdrop-blur-sm transition-all duration-300',
                                'hover:-translate-y-1 hover:border-[#b4966e]/60 hover:bg-white hover:shadow-lg hover:shadow-[#172b3a]/5',
                                'dark:bg-white/[0.03] dark:hover:bg-white/[0.07]',
                                index === 4 && 'col-span-2 sm:col-span-1',
                            )}
                        >
                            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#b4966e]/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                            <span className="font-cormorant text-2xl font-semibold tracking-[0.12em] text-[#172b3a] transition-colors group-hover:text-[#a88960] dark:text-[#f5f3ee] dark:group-hover:text-[#c6a77e]">
                                {partner.name}
                            </span>

                            <span className="mt-2 text-[9px] font-semibold tracking-[0.2em] text-[#8b8174] uppercase sm:text-[10px] dark:text-[#b6aa98]">
                                {partner.subtitle}
                            </span>

                            <ArrowUpRight className="absolute top-3 right-3 size-3.5 text-[#b4966e] opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
