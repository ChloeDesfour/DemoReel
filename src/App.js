import "./App.css"
import User from "./components/User"
import Skills from "./components/Skills"
import Skills2 from "./components/Skills2"
import Profil from "./components/Profil"
import Cursus from "./components/FormationsExperiences"
import DarkMode from "./components/DarkMode"
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf"
import { Preview, print } from "react-html2pdf"

function App() {
  const handleGenerateCv = () => {
    let cvTemplate = document.getElementById("cv-print")
    cvTemplate.setAttribute("style", "width:210mm !important")
    cvTemplate.classList.add("cv-print")
    document.body.classList.remove("dark")
    setTimeout(() => {
      print("cv", "cv-print")
      cvTemplate.setAttribute("style", "width:100% !important")
      cvTemplate.classList.remove("cv-print")
    }, 300)
  }
  return (
    <Preview id={"cv-print"} class="cv-print">
      <div className="App">
        <div className="grid__container">
          <div className="sidebar">
            <div className="actions">
              <DarkMode />
              {/*<button onClick={handleGenerateCv}>
                <PictureAsPdfIcon />
  </button>*/}
            </div>
            <User />
            <Skills />
          </div>
          <div className="main">
            <Profil />
            <Cursus />
            <br />
            <h2 className="h2">Compétences</h2>
          
            <Skills2 title="Storytelling" rating="3" />
            <Skills2 title="Character design" rating="3" />
            <Skills2 title="Modélisation, Sculpting, Texture, Eclairage, Rendu. " rating="3" />
            <Skills2 title="Expérience des matériaux volumétriques " rating="3" />
            <Skills2 title="Montage" rating="3" />           
            <br />
            <h2 className="h2">LOGICIELS INFORMATIQUES</h2>
            <Skills2 title="Maya, ZBrush, Unity, Krita, Adobe Substance 3D Painter" rating="3" />
            <Skills2 title="Adobe Premiere Pro, Adobe After Effects, Adobe Photoshop." rating="3" />
            
          </div>
        </div>
        {/* react, material ui, react-html2pdf */}
        {/* Installation, Nettoyage & paramétrage */}
        {/* Variables CSS */}
        {/* Colonne de gauche * /} 

      {/* Détails personnels - User */}
        {/* Compétences - skills */}
        {/* Langues - skills */}
        {/* Centres d'intérêts - interests */}
        {/* Colonne de droite * /} 

      {/* Profil - profil */}
        {/* Formation  - education */}
        {/* Expériences professionelles - experiences */}
        {/* Ligth & Dark mode */}
        {/* Export PDF (react-html2pdf) */}
      </div>
    </Preview>
  )
}

export default App
