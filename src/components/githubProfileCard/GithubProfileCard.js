import React from "react";
import "./GithubProfileCard.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo, isHireable} from "../../portfolio";
import {Fade} from "react-reveal";

function parseGithubTags(text) {
  if (!text) return null;
  const ret = [];
  const matches = text.matchAll(/@[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}/gi);
  let curIdx = 0;
  for (let match of matches) {
    if (match.index > curIdx) ret.push(text.substring(curIdx, match.index));

    ret.push(
      <a
        key={match.index}
        className="bio-text-link"
        href={`https://github.com/${match[0].substring(1)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {match[0]}
      </a>
    );
    curIdx = match.index + match[0].length;
  }
  if (curIdx < text.length) ret.push(text.substring(curIdx));
  return ret;
}

export default function GithubProfileCard({prof}) {
  if (isHireable) {
    prof.hireable = "Yes";
  } else {
    prof.hireable = "No";
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="contact">
        <h1 className="prof-title">Reach Out to me!</h1>
        <div className="row">
          <div className="main-content-profile">
            <div className="blog-header">
              <p className="subTitle blog-subtitle">{contactInfo.subtitle}</p>
            </div>
            <h2 className="bio-text">"{parseGithubTags(prof.bio)}"</h2>
            {prof.location !== null && (
              <div className="location-div">
                <span className="desc-prof">
                  <svg
                    viewBox="-0.5 -2 20 19"
                    version="1.1"
                    width="22"
                    height="16"
                    aria-hidden="true"
                    stroke="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"
                    ></path>
                  </svg>
                  {prof.location}
                </span>
              </div>
            )}
            <div className="opp-div">
              <span className="desc-prof">
                Open for opportunities: {prof.hireable}
              </span>
            </div>
            <SocialMedia />
          </div>
          <div className="image-content-profile">
            <img
              src={prof.avatarUrl}
              alt={prof.name}
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
