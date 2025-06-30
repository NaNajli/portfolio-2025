import Header from './components/header'
import Navigation from './components/navigation'
import Footer from './components/footer'
import About from './about/page'
import Education from './education/page'
import Projects from './projects/page'

export default function Page() {
  return (
  <>
  <Navigation></Navigation>
  <Header></Header>
  <About></About>
  <Education></Education>
  <Projects></Projects>
  <Footer></Footer>

  </>
  )
}