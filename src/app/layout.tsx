import { Providers } from '@/components'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '등산',
  description: 'NLBO-inc',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
