import React from "react";

function Jobs({data}) {
  return (
    // Rajouter une class au Jobs avec featured == True,
    <div
      className={`container ${data.featured ? "border_featured" : ""}`}
    >
      <img src={data.logo} alt="logo" />
      <div className="job-desc">
        <div>
          <span style={{ color: "hsl(180, 29%, 50%)" }}>
            {data.company}
          </span>
          {data.new && <span className="new">NEW</span>}
          {data.featured && <span className="featured">FEATURED</span>}
        </div>
        <h5>{data.position}</h5>
        <div>
          <span>{data.postedAt}</span>
          <span> {data.contract} </span>
          <span> {data.location} </span>
        </div>
      </div>
      <div className="job-language">
        <span>{data.role}</span>
        <span> {data.level} </span>
        {/* Récupérer tout les élément de la liste langauges et mettre la cle à id job*/}
        {data.languages.map((language, index) => (
          <span key={index}>{language}</span>
        ))}

        {/* Récupérer tout les élément de la liste tools */}
        {data.tools.map((tool, index) => (
          <span key={index}> {tool}</span>
        ))}
      </div>
    </div>
  );
}

export default Jobs;
