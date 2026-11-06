import { Award, BadgeCheck, ShieldCheck } from "lucide-react";

export function BpTrustBar() {
    return (
        <section className="-translate-y-5 bg-muted text-sm font-bold md:text-base lg:text-lg xl:text-2xl">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-3 px-4 py-8 xl:gap-x-24 2xl:gap-x-36">
                <div className="flex items-center gap-3">
                    <ShieldCheck className="size-6 shrink-0 text-primary" />
                    <span className="">
                        Garantie décennale SMABTP
                    </span>
                </div>

                <div className="flex items-center gap-3">
                    <Award className="size-6 shrink-0 text-primary" />
                    <span className="">
                        Qualification RGE Éco Artisan
                    </span>
                </div>

                <div className="flex items-center gap-3">
                    <BadgeCheck className="size-6 shrink-0 text-primary" />
                    <span className="">
                        Certifié Qualibat 2026
                    </span>
                </div>
            </div>
        </section>
    );
}