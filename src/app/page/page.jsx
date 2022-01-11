import anime from "../../assets/anime.jpg";
import adidas from "../../assets/adidas.png";
import hm from "../../assets/hm.png";
import nivea from "../../assets/nivea.jpg";
import programming4 from "../../assets/programming4.jpg";
import facebook from "../../assets/facebook.jpg";
import twitch from "../../assets/twitch.jpg";
import minecraft from "../../assets/minecraft.jpg";
import "./page.css";
import perfil from "../../assets/perfil.jpg";
import { Profile } from "../components/profile/profile";
import { Skill } from "../components/skills/skills";
import { Experiences } from "../components/experiences/experiences";
import { Hobbies } from "../components/hobbies/hobbies";
import { Project } from "../components/project/project";

const App = () => {
  return (
    <>
      <div className="containerApp">
        <div className="containerAppLeft">
          <Profile
            display="Column"
            img={perfil}
            name="JuNior HurTado"
            occuopation="Front-End"
            mail="odiseoj676@gmail.com"
            phone="(+505)86330593"
            description={[
              " Self-motivated developer, who is willing to learn and create outstanding UI applications. ",
              "Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. ",
            ]}
          />
          <Hobbies
            display="Columns"
            hobbies={[
              {
                img: minecraft,
                title: "MINECRAFT",
                text: "minecraft the best game",
              },
              {
                img: anime,
                title: "ANIME",
                text: "the part of the time that I'm studying I'm watching anime",
              },
              {
                img: programming4,
                title: "PROGRAMMING",
                text: "web development is one of the things I like to do the most",
              },
            ]}
          />
        </div>
        <div className="containerAppRight">
          <div className="containerAppRightSkill">
            <Skill
              display="Column"
              title="FrontEnd"
              skills={[
                { name: "React", quali: "quali3" },
                { name: "Redux", quali: "quali2" },
                { name: "HTML", quali: "quali4" },
                { name: "JavaScript", quali: "quali2" },
                { name: "CSS", quali: "quali3" },
              ]}
            />
            <Skill
              display="Column"
              title="BackEnd"
              skills={[
                { name: "C#", quali: "quali3" },
                { name: "MongoDB", quali: "quali2" },
                { name: "SQLServer", quali: "quali4" },
                { name: "Express", quali: "quali2" },
                { name: "Firebase", quali: "quali2" },
              ]}
            />
          </div>
          <Experiences
            experience={[
              {
                img: adidas,
                dataT: "Feb 2017 - Current",
                position: "Front-end developer",
                info: "Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
              },
              {
                img: hm,
                dataT: "Aug 2016 - Feb 2018",
                position: "Full-stack developer",
                info: "Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
              },
              {
                img: nivea,
                dataT: "Jun 2015 - Aug 2016",
                position: "Junior front-end developer",
                info: "Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
              },
            ]}
          />
          <Project
            img={twitch}
            title="Twitch"
            tag={["#React", "#graphql", "#express"]}
            text="In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. "
          />
          <Project
            img={facebook}
            title="Facebook"
            tag={["#React", "#graphql", "#express"]}
            text="In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. "
          />
        </div>
      </div>
    </>
  );
};

export default App;
