import '@/styles/globals.css';

const Layout = (
  { children }: { children: React.ReactNode }
) => {
  return (
    <main style={{ background: 'red' }}>
      {children}
    </main>
  )
}

export default Layout;