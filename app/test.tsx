// app/layout.tsx
import { Metadata } from "next";
import "./globals.css";
import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

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
      <body >
      <NextIntlClientProvider messages={messages}>
        <main >
          {children}
        </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
