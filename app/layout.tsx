// app/layout.tsx
import { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import ParticlesComponent from "@/components/particles-background";
import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import ScrollArrow from "@/components/scroll-to-top";

export const metadata: Metadata = {
  title: "Urfan Karimli",
  description: "Urfan Karimli's personal website",
  manifest: "/manifest.json",
};

export default async function RootLayout({ children,}: Readonly<{children: React.ReactNode;}>) {

  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="font-roboto bg-myBlue overflow-x-hidden">
      <NextIntlClientProvider messages={messages}>
        <Header />
        <main className=" sticky z-20 bottom-0 left-0 right-0">
        <ScrollArrow/>
          {children}
        </main>
        <ParticlesComponent id={'backGround'} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
