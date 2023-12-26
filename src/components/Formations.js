import React from "react"

function Formations(props) {
  const datas = props.datas

  return (
    <div className="cursus mb3">
      <h2>DIPLOMES ET FORMATIONS</h2>
      {datas.map(item => (
        <div className="grid__row" key={item.id}>
          <div className="grid__item">
            <p className="grid__date">{item.date}</p>
          </div>
          <div className="grid__item grid__item__text">
            <h3 className="grid__title">{item.title}</h3>
            <p className="grid__location">{item.location}</p>
            <p className="grid__subtitle">{item.infotitle1}</p>
            <p className="grid__text">{item.infotext1}</p>
           
            <p className="grid__text">{item.infotext1bis}</p>
          
            <p className="grid__subtitle">{item.infotitle2}</p>
            <p className="grid__text">{item.infotext2}</p>
            <p className="grid__subtitle">{item.infotitle3}</p>
            <p className="grid__text">{item.infotext3}</p>
            <p className="grid__subtitle">{item.infotitle4}</p>
            <p className="grid__text">{item.infotext4}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Formations
