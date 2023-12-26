import React from "react"
import "./Skills.css"
import Skill from "./Skill"
import Interests from "./Interests"

function Skills() {
  return (
    <>
      <div className="skills">
        <h2 className="h2 title_aside">Atouts</h2>

        <Skill title="Travail en équipe " rating="5" />
        <Skill title=" Sens du détail " rating="5" />
        <Skill title="Communication " rating="5" />
        <Skill title="Force de proposition" rating="5" />
      
      </div>
      <div className="skills">
        <h2 className="h2 title_aside">Langues</h2>
        <Skill title="Anglais scolaire" rating="3" />
        <Skill title="Espagnol scolaire" rating="3" />
      </div>
      <Interests />
    </>
  )
}

export default Skills
