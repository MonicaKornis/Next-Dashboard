import '@/app/ui/global.css';
import { gowunbatang } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${gowunbatang.className} antialiased`}>{children}</body>
    </html>
  );
}
