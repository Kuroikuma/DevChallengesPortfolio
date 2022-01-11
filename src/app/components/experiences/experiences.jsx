import "./experiences.css";

export const Experiences = (props) => {
  const { experience, display = "Flex" } = props;
  return (
    <>
      {display === "Flex" ? (
        <div className="containerExperiencesFlex">
          <div className="containerExperiencesFlexTitle">
            <p>Experiences</p>
          </div>
          <div className="containerExperiencesFlexListCard">
            {experience &&
              experience.map((item, index) => (
                <div className="containerExperiencesFlexCard" key={index}>
                  <div className="containerExperiencesFlexCardImg">
                    <img src={item.img} alt="item.position" />
                  </div>
                  <div className="containerExperiencesFlexCardContent">
                    <div className="containerExperiencesFlexCardContent__infoPersonal">
                      <div className="containerExperiencesFlexCardContentDate">
                        <p> {item.dateT}</p>
                      </div>
                      <div className="containerExperiencesFlexCardContentPosition">
                        <p> {item.position}</p>
                      </div>
                    </div>
                    <div className="containerExperiencesFlexCardContentInfo">
                      <p> {item.info}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ) : (
        <div className="containerExperiencesColumn">
          <div className="containerExperiencesColumnTitle">
            <p>Experiences</p>
          </div>
          <div className="containerExperiencesColumnListCard">
            {experience &&
              experience.map((item, index) => (
                <div className="containerExperiencesColumnCard" key={index}>
                  <div className="containerExperiencesColumnCardImg">
                    <img src={item.img} alt="item.position" />
                  </div>
                  <div className="containerExperiencesColumnCardContent">
                    <div className="containerExperiencesColumnCardContent__infoPersonal">
                      <div className="containerExperiencesColumnCardContentDate">
                        <p> {item.dateT}</p>
                      </div>
                      <div className="containerExperiencesColumnCardContentPosition">
                        <p> {item.position}</p>
                      </div>
                    </div>
                    <div className="containerExperiencesColumnCardContentInfo">
                      <p> {item.info}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
};
