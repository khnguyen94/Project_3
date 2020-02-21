import React from "react";
import "../SideBar/SideBar.css";
import { Row } from "../Grid";
import FavoriteTeamBtn from "../FavoriteTeamBtn";

function SideBar(props) {
<<<<<<< HEAD
  let allSortedTeams = props.teams.sort(function(teamA, teamB) {
    return teamA.teamId - teamB.teamId;
  });

  // Function to render all of the teams from allTeamsFiltered
  let renderAllTeams = allSortedTeams.map((team, index) => {
    return (
      <li className="listItem">
        <a
          className="listItemText"
          eventKey={index}
          href="#"
          data-teamId={team.teamId}
          onClick={() => props.clickFunc(team.teamId)}
        >
          {team.fullName}
        </a>
        <input
          className="star"
          type="checkbox"
          id={index}
          onChange={props.changeFavTeam}
          checked={team.favorite}
        />
      </li>
    );
  });

  // Function to render all the favorite teams from faveTeamsFiltered
  let renderFaveTeams = props.favteams.map((team, index) => {
    console.log(team);
    return (
      <li className="listItem">
        <a className="listItemText" eventKey={index} href="#">
          {team.fullName}
        </a>
      </li>
    );
  });
=======
  
  // Function to render all of the teams from allTeamsFiltered

  let renderAllTeams = props.teams
    .map((team, index) => {
      return (
        <li className="listItem">
          <a
            className="listItemText"
            eventKey={index}
            href="#"
            data-teamId={team.teamId}
            onClick={() => props.clickFunc(team.teamId)}
          >
            {team.fullName}
          </a>
          <div className="faveBtnContainer">
          <input className="star" type="checkbox" id={index} onChange={props.changeFavTeam} checked={team.favorite}/>
          </div>
        </li>
      );
    });

  // Function to render all the favorite teams from faveTeamsFiltered
  let renderFaveTeams = props.favteams
    .map((team, index) => {
      return (
        <li className="listItem">
          <a className="listItemText" eventKey={index} href="#">
            {team.fullName}
          </a>
          <div className="faveBtnContainer">
          </div>
        </li>
      );
    });
>>>>>>> 722674879e60d72dfe49b0900fe3d68b6c70ba56

  return (
    <div className="wrapper">
      <nav id="sidebar">
        <ul className="list-unstyled components">
          <li className="sideBarMainItem">
            <a
              href="#faveTeamsList"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              <span className="sideBarMainItemText">Favorite Teams</span>
            </a>
            <ul className="collapse list-unstyled" id="faveTeamsList">
              {renderFaveTeams}
            </ul>
          </li>

          <li className="sideBarMainItem">
            <a
              href="#homeSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              <span className="sideBarMainItemText">All Teams</span>
            </a>
            <ul className="collapse list-unstyled" id="homeSubmenu">
              {renderAllTeams}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideBar;
