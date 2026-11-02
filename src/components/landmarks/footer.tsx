export function Footer() {
    return (
        <footer className="mx-auto px-4 py-6 w-3/5 border-t text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} — Tous droits réservés.
        </footer>
    );
}
