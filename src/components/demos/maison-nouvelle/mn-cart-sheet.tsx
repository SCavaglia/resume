import { Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from '@/components/ui/sheet';

import type { CartItem } from '@/pages/demos/maison-nouvelle';

type MnCartSheetProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    items: CartItem[];
    onItemsChange: (items: CartItem[]) => void;
};

export function MnCartSheet({
    open,
    onOpenChange,
    items,
    onItemsChange,
}: MnCartSheetProps) {
    const total = items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
    );

    const updateQuantity = (id: number, change: number) => {
        onItemsChange(
            items
                .map((item) =>
                    item.id === id
                        ? { ...item, quantity: item.quantity + change }
                        : item,
                )
                .filter((item) => item.quantity > 0),
        );
    };

    const removeItem = (id: number) => {
        onItemsChange(items.filter((item) => item.id !== id));
    };

    const formatPrice = (price: number) =>
        new Intl.NumberFormat('fr-FR', {
            style: 'currency',
            currency: 'EUR',
        }).format(price);

    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent
                side="right"
                className="flex w-full flex-col gap-0 border-l border-border bg-background p-0 sm:max-w-lg"
            >
                <SheetHeader className="border-b px-6 py-6 text-left">
                    <div className="flex items-center gap-3">
                        <div className="flex size-11 items-center justify-center rounded-full bg-[rgb(191,168,136)]/15 text-[rgb(191,168,136)]">
                            <ShoppingBag className="size-5" />
                        </div>

                        <div>
                            <SheetTitle className="font-cormorant text-2xl font-medium tracking-wide uppercase">
                                Votre panier
                            </SheetTitle>

                            <SheetDescription>
                                {items.reduce(
                                    (sum, item) => sum + item.quantity,
                                    0,
                                )}{' '}
                                article(s)
                            </SheetDescription>
                        </div>
                    </div>
                </SheetHeader>

                {items.length === 0 ? (
                    <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
                        <div className="mb-5 flex size-20 items-center justify-center rounded-full bg-muted">
                            <ShoppingBag className="size-9 text-muted-foreground" />
                        </div>

                        <h3 className="font-cormorant text-2xl font-medium">
                            Votre panier est vide
                        </h3>

                        <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                            Découvrez notre sélection de créateurs et trouvez
                            les pièces qui vous correspondent.
                        </p>

                        <button
                            onClick={() => onOpenChange(false)}
                            className="mt-7 border-b border-[rgb(191,168,136)] pb-1 text-sm font-semibold tracking-wide transition-colors hover:text-[rgb(191,168,136)]"
                        >
                            CONTINUER MES ACHATS
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="flex-1 space-y-6 overflow-y-auto px-6 py-6">
                            {items.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex gap-4 border-b border-border pb-6"
                                >
                                    <div className="flex size-20 shrink-0 items-center justify-center rounded bg-muted">
                                        <ShoppingBag className="size-7 text-muted-foreground/50" />
                                    </div>

                                    <div className="flex min-w-0 flex-1 flex-col">
                                        <div className="flex items-start justify-between gap-3">
                                            <h3 className="font-medium">
                                                {item.name}
                                            </h3>

                                            <button
                                                onClick={() =>
                                                    removeItem(item.id)
                                                }
                                                aria-label={`Supprimer ${item.name}`}
                                                className="text-muted-foreground transition-colors hover:text-destructive"
                                            >
                                                <Trash2 className="size-4" />
                                            </button>
                                        </div>

                                        <p className="mt-1 text-sm text-muted-foreground">
                                            {formatPrice(item.price)}
                                        </p>

                                        <div className="mt-auto flex items-center justify-between pt-4">
                                            <div className="flex items-center rounded border border-border">
                                                <button
                                                    onClick={() =>
                                                        updateQuantity(
                                                            item.id,
                                                            -1,
                                                        )
                                                    }
                                                    aria-label="Diminuer la quantité"
                                                    className="p-2 transition-colors hover:bg-muted"
                                                >
                                                    <Minus className="size-3" />
                                                </button>

                                                <span className="min-w-8 text-center text-sm">
                                                    {item.quantity}
                                                </span>

                                                <button
                                                    onClick={() =>
                                                        updateQuantity(
                                                            item.id,
                                                            1,
                                                        )
                                                    }
                                                    aria-label="Augmenter la quantité"
                                                    className="p-2 transition-colors hover:bg-muted"
                                                >
                                                    <Plus className="size-3" />
                                                </button>
                                            </div>

                                            <span className="font-semibold">
                                                {formatPrice(
                                                    item.price * item.quantity,
                                                )}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-4 border-t bg-background px-6 py-6">
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-muted-foreground">
                                    Sous-total
                                </span>
                                <span className="font-medium">
                                    {formatPrice(total)}
                                </span>
                            </div>

                            <div className="flex items-center justify-between text-lg font-semibold">
                                <span>Total</span>
                                <span className="text-[rgb(191,168,136)]">
                                    {formatPrice(total)}
                                </span>
                            </div>

                            <p className="text-xs text-muted-foreground">
                                Frais de livraison calculés à l'étape suivante.
                            </p>

                            <button
                                onClick={() => onOpenChange(false)}
                                className="w-full bg-[rgb(191,168,136)] px-6 py-4 text-sm font-semibold tracking-widest text-black transition-colors hover:bg-[rgb(176,151,119)]"
                            >
                                PASSER COMMANDE
                            </button>

                            <button
                                onClick={() => onOpenChange(false)}
                                className="w-full py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                            >
                                Continuer mes achats
                            </button>
                        </div>
                    </>
                )}
            </SheetContent>
        </Sheet>
    );
}
