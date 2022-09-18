import React from 'react';
import "./About.scss";
import {FiAirplay, FiBookOpen, FiVideo} from 'react-icons/fi';

const aboutInfo = [
    {title: "Lorem Ipsum"},
    {title: "Lorem Ipsum"},
    {title: "Lorem Ipsum"}

]
const icons = [
  FiAirplay,FiBookOpen,FiVideo
]

const About = () => {
  return (
    <div className="app__about">
        <h1>About the College</h1>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non quam lacus suspendisse faucibus interdum posuere. Orci phasellus egestas tellus rutrum tellus pellentesque eu. Sit amet consectetur adipiscing elit. Lacus sed viverra tellus in hac. Augue lacus viverra vitae congue eu consequat ac. Egestas tellus rutrum tellus pellentesque. Magna eget est lorem ipsum dolor. Pellentesque adipiscing commodo elit at. Feugiat sed lectus vestibulum mattis ullamcorper velit. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Sit amet consectetur adipiscing elit. Lobortis mattis aliquam faucibus purus in massa tempor. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Tellus molestie nunc non blandit massa.</p>

        <div className="app__about-cards">
            {aboutInfo.map((about, idx) => {

              const Icon = icons[idx];
                return(

                  <div className="app__about-card">
                    <Icon className='icon'
                      size={30}
                    />
                    <div className="app__about-card-title">
                      <h2>{about.title}</h2>
                    </div>
                  </div>
                )
            })}
        </div>
    </div>
  )
}

export default About