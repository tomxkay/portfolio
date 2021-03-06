import * as React from 'react';
import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
  FaPhp,
} from 'react-icons/fa';

class SkillCard extends React.Component<{}> {
  public handleMouseOver = (event: React.MouseEvent) => {
    const { currentTarget } = event;

    currentTarget.classList.remove('bar', 'bar--html');
    currentTarget.classList.add('bar');
    currentTarget.classList.add('bar--html');
  };

  public render() {
    return (
      <div className="tech">
        <div className="graph-container">
          <h3 className="heading-small heading-small--align-left heading-small--tech animateFromTop">
            Technologies
          </h3>
          <div onMouseEnter={this.handleMouseOver} className="bar bar--html">
            <FaHtml5 /> HTML
          </div>
          <div className="bar bar--css">
            <FaCss3 /> CSS
          </div>
          <div className="bar bar--js">
            <FaJs /> JavaScript
          </div>
          <div className="bar bar--typescript">
            <FaJs /> TypeScript
          </div>
          <div className="bar bar--react">
            <FaReact /> React
          </div>
          <div className="bar bar--node">
            <FaNodeJs /> Node
          </div>
          <div className="bar bar--php">
            <FaPhp /> PHP
          </div>
        </div>
      </div>
    );
  }
}

export default SkillCard;
