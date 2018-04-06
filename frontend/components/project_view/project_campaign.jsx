import React from 'react';
import { Link } from 'react-router-dom';

export const ProjectCampaign = ({project}) => (
        <div className="Project-campaign">
          <section className="">
            <h2>About</h2>
            <img src={project.image_url}/>
            <h3>Project description</h3>
            <p className="campaign-about">{project.full_description}</p>
          </section>
          <section className="campaign-rewards">
            <h2>Support</h2>
            <div>
              <ul>
                <li>
                  <h3>Make a pledge without a reward</h3>
                  <h4>USD$ <input type="text" placeholder="Pledge any amount"></input></h4>
                  <button>Continue</button>
                </li>
              </ul>
            </div>
          </section>
        </div>
);
