import './globals.css'

export const metadata = {
  title: 'Página Inicial / Twitter',
  description: 'Twitter',
}

export default function Main({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-zinc-950 text-zinc-100' >{children}</body>
    </html>
  )
}
