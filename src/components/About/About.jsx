import React from 'react';
import "./About.scss";

const aboutInfo = [
    {title: "Lorem Ipsum", desc: "Lorem ipsum dolor sit amet consectetur", b1: "Lorem ipsum1", b2: "Lorem ipsum2", b3: "Lorem ipsum3"},
    {title: "Lorem Ipsum", desc: "Lorem ipsum dolor sit amet consectetur", b1: "Lorem ipsum1", b2: "Lorem ipsum2", b3: "Lorem ipsum3"},
    {title: "Lorem Ipsum", desc: "Lorem ipsum dolor sit amet consectetur", b1: "Lorem ipsum1", b2: "Lorem ipsum2", b3: "Lorem ipsum3"},
    {title: "Lorem Ipsum", desc: "Lorem ipsum dolor sit amet consectetur", b1: "Lorem ipsum1", b2: "Lorem ipsum2", b3: "Lorem ipsum3"},
    {title: "Lorem Ipsum", desc: "Lorem ipsum dolor sit amet consectetur", b1: "Lorem ipsum1", b2: "Lorem ipsum2", b3: "Lorem ipsum3"},

]

const About = () => {
  return (
    <div className="app__about">
        <h1>About the College</h1>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non quam lacus suspendisse faucibus interdum posuere. Orci phasellus egestas tellus rutrum tellus pellentesque eu. Sit amet consectetur adipiscing elit. Lacus sed viverra tellus in hac. Augue lacus viverra vitae congue eu consequat ac. Egestas tellus rutrum tellus pellentesque. Magna eget est lorem ipsum dolor. Pellentesque adipiscing commodo elit at. Feugiat sed lectus vestibulum mattis ullamcorper velit. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Sit amet consectetur adipiscing elit. Lobortis mattis aliquam faucibus purus in massa tempor. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Tellus molestie nunc non blandit massa.</p>

        <div className="app__about-cards">
            {aboutInfo.map((about) => (
                <div className="app__about-card">

                </div>
            ))}
        </div>
    </div>
  )
}

export default About