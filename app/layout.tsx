import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Fluxa Foods — Pare de alugar sistemas que travam sua cozinha e sequestram seus clientes",
  description:
    "O sistema que o Lanas Burguer escolheu: Fluxa Kitchen + Fluxa Cardápio. Organize a cozinha, converta mais pedidos, construa sua base própria e pare de pagar taxas abusivas.",
  icons: {
    icon: "/Favicon.fluxa.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  // No fixed theme-color: lets iOS use its translucent, content-blurring
  // status/address bars (frosted) instead of a solid black band.
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={jakarta.variable}>
      <body>{children}</body>
    </html>
  );
}
