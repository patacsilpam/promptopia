import '@styles/globals.css'

export const metadata = {
  title: 'Promptopia',
  description: 'Discover & Share AI Prompts',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient">
            <main className="app">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}
