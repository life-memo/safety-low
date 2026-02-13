import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "安全衛生法規制 国際比較 | 日本・米国・英国",
  description:
    "日本の労働安全衛生法と、米国OSHA法、英国HSWA1974の規制を詳細に比較した資料です。各国の法的根拠・条文へのリンク付き。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="bg-gray-50 text-gray-900 antialiased">{children}</body>
    </html>
  );
}
