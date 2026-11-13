import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fahrel Putra | Network Engineer & Penetration Tester",
  description:
    "Portfolio of Mochammad Fahrel Putra Ardiansyah — Network Engineer at PT Internusa Duta Makmur and Penetration Tester based in Banyuwangi, East Java. Certified JNCIA-SEC & Google Cybersecurity.",
  openGraph: {
    title: "Fahrel Putra | Network Engineer & Penetration Tester",
    description:
      "Portfolio of Mochammad Fahrel Putra Ardiansyah — Network Engineer at PT Internusa Duta Makmur and Penetration Tester based in Banyuwangi, East Java.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fahrel Putra | Network Engineer & Penetration Tester",
    description:
      "Portfolio of Mochammad Fahrel Putra Ardiansyah — Network Engineer at PT Internusa Duta Makmur and Penetration Tester based in Banyuwangi, East Java.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
