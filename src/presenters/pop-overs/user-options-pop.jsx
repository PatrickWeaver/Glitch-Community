/* global analytics */

     
import React from 'react';

const TeamButton = ({url, name, teamAvatarUrl}) => (
  <a className="button-link" href={url}>
    <div className="button button-small has-emoji button-tertiary">
      <span>{name} </span>
      <img className="emoji avatar" src={teamAvatarUrl} alt={`${name} team avatar`} width="16px" height="16px"/>
    </div>
  </a>
);

const TeamButtons = ({teams}) => {
  const hasTeams = teams && teams.length;
  if(!hasTeams) {
    return null;
  }
  
  return (
    <section className="pop-over-actions">
      {teams.map((team) => (
        <TeamButton key={team.name} {...team}/>
      ))}
    </section>
  );
};

const UserOptionsPop = ({visible, profileLink, avatarUrl, teams, showNewStuffOverlay, signOut}) => {
  if(!visible) {
    return null;
  }
  
  const clickNewStuff = (event) => {
    showNewStuffOverlay();
    event.stopPropagation();
  }

  return (
    <dialog className="pop-over user-options-pop">
      <section className="pop-over-actions">
        <a className="button-link" href={profileLink}>
          <div className="button button-small has-emoji button-tertiary">
            <span>Your Profile </span>
            <img className="emoji avatar" src={avatarUrl} alt="Your avatar"></img>
          </div>
        </a>

        <button className="button-small has-emoji button-tertiary" onClick={clickNewStuff}>
          <span>New Stuff </span>
          <span className="emoji dog-face"></span>
        </button>
        
        <a className="button-link" href="https://support.glitch.com">
          <div className="button button-small has-emoji button-tertiary">
            <span>Support </span>
            <span className="emoji ambulance"></span>
          </div>
        </a>        
      </section>

      <TeamButtons teams={teams}/>

      <section className="pop-over-info last-section section-has-tertiary-buttons">
        <button className="button-small has-emoji button-tertiary button-on-secondary-background" onClick={signOut}>
          <span>Sign Out</span>
          <span className="emoji balloon"></span>
        </button>
      </section>
    </dialog>
  );
};


export default UserOptionsPop;