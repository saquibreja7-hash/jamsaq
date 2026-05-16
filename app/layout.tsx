import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jamsaq Web Design Agency',
  description:
    'Jamsaq designs sharp, fast websites and mobile app experiences for founders, local businesses, and service teams.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
