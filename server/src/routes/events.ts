import * as express from 'express';

/**
 * Handles events on the cses website
 */
class Events {
  /**
   * Grabs the current events for the organization.
   * TODO: Define how these should be udeated and defined
   * @param  req the http request sent
   * @param  res the http response sent
   * @return     none
   */
  static getEvents(req: express.Request, res: express.Response) {
    res.send([]);
  }
}

export default Events;
