import Header from "./components/Header";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Info from "./components/Info";
import Contacts from "./components/Contacts";
import { useEffect, useState } from "react";
import { RepoProps } from "./models";

function App() {

  const [repo, setRepo] = useState<RepoProps[]>([])
  const [img, setImg] = useState<string>("")

  const getRepo = async () => {
    const res = await fetch("https://api.github.com/users/Awakich/repos").then(res => res.json())
    setRepo(res)
    setImg(res[0].owner.avatar_url)
  }

  useEffect(() => {
    getRepo()
  }, [])

  return (
    <div className="">
      <Header />

      <div id="info">
        <Info img={img} />
      </div>

      <div id="projects">
        <Projects repo={repo} />
      </div>

      <div id="contacts">
        <Contacts />
      </div>

      <Footer />
    </div>
  );
}

export default App;
