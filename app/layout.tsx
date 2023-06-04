import Nav from '@components/Nav';
import Provider from '@components/Provider';
import '@styles/globals.css';


export const metadata = {
    title: 'Promptopia',
    description: 'Discover and share AI prompts',
}
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body>
        <Provider>
        <div className='main'>
          <div className='gradient'/>
          <main className='app'>
            <Nav />
            {children}
          </main>
        </div>
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout;