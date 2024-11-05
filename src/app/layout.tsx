import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '천사 배달부',
  description: '난임 부부를 위한 AI 기반 난임 치료 기록 플랫폼',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
