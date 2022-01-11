import "./hobbies.css";

export const Hobbies = (props) => {
  const { display = "Flex", hobbies } = props;
  return (
    <>
      {display === "Flex" ? (
        <div className="containerHobbiesFlex">
          <div className="containerHobbiesFlex__Title">
            <p>Hobbies</p>
          </div>
          <div className="containerHobbiesFlex___ListCard">
            {hobbies &&
              hobbies.map((item, index) => (
                <div
                  className="containerHobbiesFlex__ListCard__Item"
                  key={index}
                >
                  <div className="containerHobbiesFlex__ListCard__Item__Img">
                    <img src={item.img} alt="ig" />
                  </div>
                  <div className="containerHobbiesFlex__ListCard__Item__title">
                    <p>{item.title}</p>
                  </div>
                  <div className="containerHobbiesFlex__ListCard__Item__text">
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ) : (
        <div className="containerHobbiesColumn">
          <div className="containerHobbiesColumn__Title">
            <p>Hobbies</p>
          </div>
          <div className="containerHobbiesColumn___ListCard">
            {hobbies &&
              hobbies.map((item, index) => (
                <div
                  className="containerHobbiesColumn__ListCard__Item"
                  key={index}
                >
                  <div className="containerHobbiesColumn__ListCard__Item__Img">
                    <img src={item.img} alt="ig" />
                  </div>
                  <div className="containerHobbiesColumn__ListCard__Item__title">
                    <p>{item.title}</p>
                  </div>
                  <div className="containerHobbiesColumn__ListCard__Item__text">
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
};
