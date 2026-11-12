const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mx-auto px-4 py-12 w-3/5 border-t text-center text-sm text-muted-foreground">
      © {currentYear} — Tous droits réservés.
    </footer>
  );
}
