import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dev. Gaurav Jatt',
  description: 'Hi there! I\'m a web developer with a strong focus on building modern, high-performance websites using Next.js, React.js and Tailwind CSS.\n' +
      '\n',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
