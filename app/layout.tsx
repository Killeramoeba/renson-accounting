import type { Metadata } from "next";
import "./globals.css";
import GoogleAnalytics from "./components/GoogleAnalytics";

export const metadata: Metadata = {
  title: "Home - Renson Accounting Solutions, LLC",
  description:
    "RENSON ACCOUNTING SOLUTIONS, LLC Life in the Tax lane Email Us Contact us for a Free Consultation Previous Next &#8220;What really turned me over was the ability to understand how everything works without any prior knowledge.&#8221; John Doe Designer Tax Preparation Are you looking for someone that can tackle your tax return needs? I have [&hellip;]",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={``}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
