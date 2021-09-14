import '../global.css'

import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { Footer } from '../components/Footer'
import { Content } from '../components/Content'

function App() {
  return (
    <>
      <Header />
      <main>
        <Sidebar />
        <Content />
      </main>
      <Footer />
    </>
  )
}

export default App
