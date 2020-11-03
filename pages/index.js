import Container from '../components/container'
import Divider from '../components/divider'
import Footer from '../components/footer'
import Nav from '../components/nav'

export default function Home() {
  return (
    <div className="h-screen">
      <Nav />
      <Divider />
      <Container />
      <Divider />
      <Footer />
    </div>
  )
}
