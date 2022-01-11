import "./skills.css";

export const Skill = (props) => {
  const { display = "Flex", skills, title } = props;

  return (
    <>
      {display === "Flex" ? (
        <div className="containerSkillFlex">
          <p className="containerSkillFlex__Tiltle">{title}</p>
          <div className="containerSkillFlex__ListSkill">
            {skills &&
              skills.map((item, index) => (
                <div
                  className="containerSkillFlex__ListSkill__Item"
                  key={index}
                >
                  <p className="containerSkillFlex__ListSkill__Item__title">
                    {item.name}
                  </p>
                  <div className="containerSkillFlex__ListSkill__Item__bar">
                    <div className={item.quali}></div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ) : (
        <div className="containerSkillColumn">
          <p className="containerSkillColumn__Tiltle">{title}</p>
          <div className="containerSkillColumn__ListSkill">
            {skills &&
              skills.map((item, index) => (
                <div
                  className="containerSkillColumn__ListSkill__Item"
                  key={index}
                >
                  <p className="containerSkillColumn__ListSkill__Item__title">
                    {item.name}
                  </p>
                  <div className="containerSkillColumn__ListSkill__Item__bar">
                    <div className={item.quali}></div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
};
