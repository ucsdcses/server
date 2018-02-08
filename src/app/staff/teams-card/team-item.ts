/**
 * Contains team-specific data
 */
class TeamData {
  title: string;
  desc: string;
  events: string[];
  members: string[];
  imgPath: string;
}

/**
 * Holds all the properties of a team - access methods and data.
 */
class TeamItem extends TeamData {
  /**
   * Simple constructor; allows you to initialize object from a parent object.
   * @param  {TeamsData}
   */
  constructor(teamData?: TeamData) {
    super();

    if (teamData) {
      this.title = teamData.title;
      this.desc = teamData.desc;
      this.events = teamData.events;
      this.members = teamData.members;
      this.imgPath = teamData.imgPath;
    }
  }

  buttonClicked() {
  }
}

export { TeamItem }
