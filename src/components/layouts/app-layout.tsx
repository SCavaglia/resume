import { Footer } from "../landmarks/footer";
import { Header } from "../landmarks/header";
import { Topbar } from "../landmarks/topbar";

type Props = {
    children: React.ReactNode;
};

export function AppLayout({ children }: Props) {
    return (
        <>
            <Topbar />
            <Header />

            <main>{children}</main>

            <Footer />
        </>
    );
}
