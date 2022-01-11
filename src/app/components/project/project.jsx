import "./project.css";

export const Project = (props) => {
  const { display = "Flex", img, tag, title, text } = props;
  return (
    <>
      {display === "Flex" ? (
        <div className="containerProjectFlex">
          <img src={img} alt="Project" className="containerProjectFlexImg" />
          <div className="containerProjectFlexContent">
            <div className="containerProjectFlexContentTag">
              {tag && tag.map((item, index) => <p key={index}>{item}</p>)}
            </div>
            <div className="containerProjectFlexContentTitle">
              <p>{title}</p>
            </div>
            <div className="containerProjectFlexContentText">
              <p>{text}</p>
            </div>
            <div className="containerProjectFlexContentGroupButton">
              <button>Demo</button>
              <button>Code</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="containerProjectColumn">
          <img src={img} alt="Project" className="containerProjectColumnImg" />
          <div className="containerProjectColumnContent">
            <div className="containerProjectColumnContentTag">
              {tag && tag.map((item, index) => <p key={index}>{item}</p>)}
            </div>
            <div className="containerProjectColumnContentTitle">
              <p>{title}</p>
            </div>
            <div className="containerProjectColumnContentText">
              <p>{text}</p>
            </div>
            <div className="containerProjectColumnContentGroupButton">
              <button>Demo</button>
              <button>Code</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
