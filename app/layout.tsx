import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={dmSans.variable}>
      <body>{children}</body>
    </html>
  );
}
