import { useState } from "react";
import { Minus, Plus, ShoppingBasket, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { toast } from "@/components/ui/toast";

type MenuItem = {
  id: string;
  name: string;
  price: number;
  description: string;
  sommelierAdvice: string;
};

const menuItems: MenuItem[] = [
  {
    id: "carpaccio",
    name: "Carpaccio de bœuf",
    price: 14,
    description: "Fines tranches de filet de bœuf, roquette croquante, copeaux de parmesan de 24 mois, filet d'huile d'olive citronnée.",
    sommelierAdvice:
      "Un Pinot Noir de Bourgogne léger et fruité accompagnera parfaitement la finesse du bœuf et la fraîcheur de la roquette. Ses notes de cerise souligneront délicatement le parmesan.",
  },
  {
    id: "foie-gras",
    name: "Foie gras maison",
    price: 18,
    description: "Foie gras de canard mi-cuit au torchon, chutney acidulé de figues noires du Var, pain d'épices artisanal toasté.",
    sommelierAdvice:
      "Un Sauternes aux notes de miel et d'abricot confit créera un bel équilibre avec l'onctuosité du foie gras et l'acidité des figues.",
  },
  {
    id: "burrata",
    name: "Burrata crémeuse",
    price: 15,
    description:
      "Burrata des Pouilles crémeuse, tomates anciennes multicolores, basilic frais, réduction de vinaigre balsamique de Modène.",
    sommelierAdvice:
      "Je recommande un Sancerre blanc bien frais. Sa minéralité et ses arômes d'agrumes apporteront une belle fraîcheur à la burrata et aux tomates anciennes.",
  },
  {
    id: "boeuf-bourguignon",
    name: "Bœuf bourguignon",
    price: 24,
    description:
      "Basse-côte de bœuf charolais mijotée 6 h dans sa réduction de vin rouge, purée maison au beurre noisette, champignons rosés sautés.",
    sommelierAdvice:
      "Un Bourgogne Pinot Noir de caractère, aux notes de fruits rouges et de sous-bois, fera écho à la sauce mijotée et aux champignons.",
  },
  {
    id: "filet-bar",
    name: "Filet de bar",
    price: 26,
    description:
      "Pavé de bar cuit sur la peau, risotto crémeux au parmesan, asperges vertes de saison sautées, émulsion au beurre de citronnelle.",
    sommelierAdvice:
      "Un Chablis apportera la tension minérale idéale pour accompagner le bar et les asperges, tout en équilibrant l'onctuosité du risotto.",
  },
  {
    id: "magret",
    name: "Magret de canard",
    price: 25,
    description:
      "Magret de canard entier laqué au miel de lavande et aux épices douces, écrasé de pommes de terre de Noirmoutier, jus corsé.",
    sommelierAdvice:
      "Un Crozes-Hermitage rouge, avec ses notes de fruits noirs et d'épices, accompagnera la richesse du canard et la douceur du miel de lavande.",
  },
  {
    id: "creme-brulee",
    name: "Crème brûlée à la vanille",
    price: 10,
    description:
      "Préparation crémeuse à la gousse de vanille Bourbon de Madagascar, caramel blond craquant caramélisé minute au chalumeau.",
    sommelierAdvice:
      "Un Muscat doux aux notes de fleurs et de fruits mûrs prolongera les arômes de vanille et de caramel sans masquer la délicatesse du dessert.",
  },
  {
    id: "tarte-tatin",
    name: "Tarte Tatin",
    price: 11,
    description:
      "Tarte de pommes caramélisées fondantes cuite à l'envers, pâte feuilletée croustillante pur beurre, pot de crème fraîche d'Isigny.",
    sommelierAdvice:
      "Un Coteaux du Layon, avec ses notes de coing et de pomme confite, rappellera les saveurs de la tarte et accompagnera joliment son caramel.",
  },
  {
    id: "bourgogne",
    name: "Bourgogne Pinot Noir",
    price: 38,
    description: "Domaine de la Velle, millésime 2022. Nez de cerise noire et notes de sous-bois. Un flacon d'équilibre parfait.",
    sommelierAdvice:
      "Un Pinot Noir élégant et équilibré, idéal avec les viandes rouges et les plats mijotés. Servez-le légèrement rafraîchi pour révéler ses arômes de cerise et de sous-bois.",
  },
  {
    id: "sancerre",
    name: "Sancerre blanc",
    price: 42,
    description: "Domaine des Vieux Murs, millésime 2023. Un Sauvignon minéral, droit, avec des touches subtiles d'agrumes frais.",
    sommelierAdvice:
      "Un Sauvignon vif et minéral, parfait avec les poissons, les fruits de mer et les fromages de chèvre. Ses notes d'agrumes apporteront une finale fraîche et élégante.",
  },
];

const formatPrice = (price: number) =>
  new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(price);

export function BgMenuCard() {
  const [selectedItemId, setSelectedItemId] = useState(menuItems[0].id);
  const [cart, setCart] = useState<Record<string, number>>({});
  const [isCartOpen, setIsCartOpen] = useState(false);

  const selectedItem = menuItems.find((item) => item.id === selectedItemId) ?? menuItems[0];

  const cartItems = menuItems.filter((item) => (cart[item.id] ?? 0) > 0);

  const cartCount = Object.values(cart).reduce((total, quantity) => total + quantity, 0);

  const cartTotal = cartItems.reduce((total, item) => total + item.price * cart[item.id], 0);

  function addToCart(id: string) {
    setCart((current) => ({
      ...current,
      [id]: (current[id] ?? 0) + 1,
    }));
  }

  function removeFromCart(id: string) {
    setCart((current) => {
      const next = { ...current };

      if ((next[id] ?? 0) <= 1) {
        delete next[id];
      } else {
        next[id] -= 1;
      }

      return next;
    });
  }

  return (
    <section id="carte" className="relative mx-auto max-w-7xl px-4 py-16 pt-46">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-center font-playfair text-5xl tracking-wide [font-variant-caps:small-caps] sm:text-6xl">La Carte du Bistrot</h2>

        <div className="mt-2 text-xl text-yellow-500">✦</div>

        <p className="mx-auto mt-4 max-w-xl text-center text-lg font-light text-muted-foreground">
          Notre menu évolue chaque semaine selon les arrivages du marché. Cliquez sur un plat pour découvrir son accord vin conseillé par
          notre sommelier.
        </p>
      </div>
      <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-start">
        {/* Liste des plats */}
        <div className="flex-1 space-y-3">
          {menuItems.map((item) => {
            const isSelected = selectedItemId === item.id;
            const quantity = cart[item.id] ?? 0;

            return (
              <Card
                key={item.id}
                className={cn(
                  "overflow-hidden rounded transition-colors",
                  isSelected ? "border-primary/60 bg-accent/40" : "hover:border-primary/30",
                )}
              >
                <CardContent className="flex items-start gap-3 p-4 sm:gap-4">
                  <button
                    type="button"
                    onClick={() => setSelectedItemId(item.id)}
                    aria-pressed={isSelected}
                    className="flex-1 cursor-pointer text-left"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className="font-semibold">{item.name}</h3>
                      <span className="shrink-0 font-semibold tabular-nums">{formatPrice(item.price)}</span>
                    </div>

                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </button>

                  <div className="flex shrink-0 flex-col items-center gap-1">
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      className="size-9 rounded-full"
                      aria-label={`Ajouter ${item.name} au panier`}
                      onClick={() => {
                        addToCart(item.id);
                        toast.add({
                          type: "success",
                          title: `"${item.name}" ajouté au panier Click & Collect.`,
                        });
                      }}
                    >
                      <Plus className="size-4" />
                    </Button>

                    {quantity > 0 && <span className="text-xs font-medium text-muted-foreground tabular-nums">× {quantity}</span>}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Conseil du sommelier */}
        <aside className="md:sticky md:top-32 md:w-[340px] md:shrink-0">
          <Card className="rounded bg-card">
            <CardContent className="p-6">
              <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">L'accord parfait</p>

              <h2 className="mt-3 font-serif text-2xl">Le conseil du sommelier</h2>

              <div className="my-5 h-px bg-border" />

              <p className="text-sm font-semibold">Avec {selectedItem.name.toLowerCase()}</p>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">{selectedItem.sommelierAdvice}</p>

              <p className="mt-6 text-xs text-muted-foreground italic">Une sélection pensée pour sublimer chaque assiette.</p>
            </CardContent>
          </Card>
        </aside>
      </div>

      {/* Panier flottant */}
      <Button
        type="button"
        onClick={() => setIsCartOpen(true)}
        className="fixed right-6 bottom-6 z-40 size-14 rounded-full shadow-lg"
        size="icon"
        aria-label={`Ouvrir le panier, ${cartCount} article${cartCount > 1 ? "s" : ""}`}
      >
        <ShoppingBasket className="size-6" />

        {cartCount > 0 && (
          <span className="absolute -top-1 -right-1 flex size-6 items-center justify-center rounded-full border-2 border-background bg-primary text-xs font-bold text-primary-foreground">
            {cartCount > 99 ? "99+" : cartCount}
          </span>
        )}
      </Button>

      {/* Sidebar du panier */}
      <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
        <SheetContent side="right" className="flex w-full flex-col gap-0 sm:max-w-md">
          <SheetHeader className="border-b pb-4 text-left">
            <SheetTitle className="font-serif text-2xl">
              Votre panier
              {cartCount > 0 && ` (${cartCount})`}
            </SheetTitle>
            <SheetDescription>Retrouvez votre sélection et son montant total.</SheetDescription>
          </SheetHeader>

          {cartItems.length === 0 ? (
            <div className="flex flex-1 flex-col items-center justify-center gap-3 text-center">
              <ShoppingBasket className="size-12 text-muted-foreground/50" />
              <p className="font-medium">Votre panier est vide</p>
              <p className="text-sm text-muted-foreground">Ajoutez un plat ou une bouteille depuis notre carte.</p>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto px-2 py-6">
                {cartItems.map((item) => {
                  const quantity = cart[item.id];

                  return (
                    <div key={item.id} className="flex gap-3 border-b py-4">
                      <div className="min-w-0 flex-1">
                        <p className="font-medium">{item.name}</p>

                        <p className="mt-1 text-sm text-muted-foreground">{formatPrice(item.price)} l'unité</p>

                        <div className="mt-3 flex items-center gap-2">
                          <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            className="size-7"
                            aria-label={`Retirer une unité de ${item.name}`}
                            onClick={() => removeFromCart(item.id)}
                          >
                            <Minus className="size-3" />
                          </Button>

                          <span className="min-w-5 text-center text-sm tabular-nums">{quantity}</span>

                          <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            className="size-7"
                            aria-label={`Ajouter une unité de ${item.name}`}
                            onClick={() => addToCart(item.id)}
                          >
                            <Plus className="size-3" />
                          </Button>

                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="ml-1 size-7 text-muted-foreground hover:text-destructive"
                            aria-label={`Supprimer ${item.name} du panier`}
                            onClick={() =>
                              setCart((current) => {
                                const next = {
                                  ...current,
                                };
                                delete next[item.id];
                                return next;
                              })
                            }
                          >
                            <Trash2 className="size-4" />
                          </Button>
                        </div>
                      </div>

                      <p className="shrink-0 font-semibold tabular-nums">{formatPrice(item.price * quantity)}</p>
                    </div>
                  );
                })}
              </div>

              <div className="space-y-4 border-t pt-5">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Total</span>
                  <span className="text-xl font-bold tabular-nums">{formatPrice(cartTotal)}</span>
                </div>

                <p className="text-xs leading-relaxed text-muted-foreground">
                  Ceci est une démonstration de panier. Aucun paiement ni réservation n'est effectué.
                </p>

                <Button type="button" variant="outline" className="w-full" onClick={() => setIsCartOpen(false)}>
                  Continuer la découverte
                </Button>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </section>
  );
}
