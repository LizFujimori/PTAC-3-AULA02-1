import Menu from './components/Menu';
export const metadata = {
  title: 'Aula Marcelino',
  description: 'bananeun gireo gireo',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Menu/>
        {children}
      </body>
    </html>
  )
}
