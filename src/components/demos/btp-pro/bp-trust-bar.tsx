import { Award, BadgeCheck, ShieldCheck } from "lucide-react";

export function BpTrustBar() {
    return (
        <section className="bg-muted">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-3 px-4 py-4 xl:gap-x-24 2xl:gap-x-36">
                <div className="flex items-center gap-3">
                    <ShieldCheck className="size-6 shrink-0 text-primary" />
                    <span className="text-sm font-bold xl:text-lg">
                        Garantie décennale SMABTP
                    </span>
                </div>

                <div className="flex items-center gap-3">
                    <Award className="size-6 shrink-0 text-primary" />
                    <span className="text-sm font-bold xl:text-lg">
                        Qualification RGE Éco Artisan
                    </span>
                </div>

                <div className="flex items-center gap-3">
                    <BadgeCheck className="size-6 shrink-0 text-primary" />
                    <span className="text-sm font-bold xl:text-lg">
                        Certifié Qualibat 2026
                    </span>
                </div>
            </div>
        </section>
    );
}