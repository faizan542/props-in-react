import Card from "./components/Card"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
      <Navbar />
      <div className="cards">
        <Card image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_1j5EelHEOtoLagpQtbwPZdrztpEQL0sJLA&usqp=CAU" title="Title 1" description="This is a description 1"/>
        <Card image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrzgZWH5H8djFFjFaSS055vdscb_ezcwK0dLrQ700vC4aIi0LiBKUzpgqly3yInxPeqzk&usqp=CAU" title="Title 2" description="This is a description 2"/>
        <Card image="https://avatars.mds.yandex.net/i?id=b507a2b8d9382967a186c654f1eeaa74-5262078-images-taas-consumers&n=27&h=480&w=480" title="Title 3" description="This is a description 3"/>
        <Card image="https://media.springernature.com/lw703/springer-static/image/art%3A10.1038%2F528452a/MediaObjects/41586_2015_Article_BF528452a_Figg_HTML.jpg" title="Title 4" description="This is a description 4"/>
      </div>
      <Footer />
    </>
  )
}

export default App
