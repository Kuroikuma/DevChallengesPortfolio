import "./blog.css";

export const Blog = (props) => {
  const { title, text, display, img } = props;
  return (
    <>
      {display === "Flex" ? (
        <div className="containerBlogFlex">
          <div className="containerBlogFlexLeft">
            <div className="containerBlogFlexTop">
              <p>blog</p>
            </div>
            <div className="containerBlogFlexTitle">
              <p>{title}</p>
            </div>
            <div className="containerBlogFlexText">
              {text && text.map((item, index) => <p key={index}>{item}</p>)}
            </div>
            <div className="containerBlogFlexBottom">
              <p>dev.to</p>
            </div>
          </div>
          <div className="containerBlogFlexImg">
            <img src={img} alt="" />
          </div>
        </div>
      ) : (
        <div className="containerBlogColumn">
          <div className="containerBlogColumnLeft">
            <div className="containerBlogColumnTop">
              <p>blog</p>
            </div>
            <div className="containerBlogColumnTitle">
              <p>{title}</p>
            </div>
            <div className="containerBlogColumnText">
              {text && text.map((item, index) => <p key={index}>{item}</p>)}
            </div>
            <div className="containerBlogColumnBottom">
              <p>dev.to</p>
            </div>
          </div>
          <div className="containerBlogColumnImg">
            <img src={img} alt="" />
          </div>
        </div>
      )}
    </>
  );
};
