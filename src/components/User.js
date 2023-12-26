import React from "react"
import "./User.css"
import HomeIcon from "@material-ui/icons/Home"
import PhoneIcon from "@material-ui/icons/Phone"
import MailIcon from "@material-ui/icons/Mail"
import EventIcon from "@material-ui/icons/Event"
import LocationOnIcon from "@material-ui/icons/LocationOn"

function User() {
  return (
    <div className="user">
      <img src="./images/avatar.jpg" className="user__avatar" alt="John Doe" />
      <h1 className="user__name">Chloé DESFOUR</h1>
      <p className="user__profession">Infographiste 2D/3D</p>
      <div className="user__infos">
        <p className="user__info">
          <HomeIcon /> Coral Lane Chemin vingt pieds Grand Baie
        </p>
        <p className="user__info">
          <PhoneIcon /> <a href="tel:+33606060606">70130158</a>
        </p>
        <p className="user__info">
          <MailIcon /> <a href="mailto:chloedesfourpro@gmail.com">chloedesfourpro@gmail.com</a>
        </p>
        <p className="user__info">
          <EventIcon /> Née le 09/12/2002
        </p>
        <p className="user__info">
          <LocationOnIcon /> Lieu de naissance: Paris
        </p>
      </div>
    </div>
  )
}

export default User
