import React, { Fragment } from 'react';
import './footer.scss';
import Grid from '@material-ui/core/Grid';

const Footer = (props) => {
    return (
        <Fragment>
            <div className="footer">
                <Grid container >
                    <Grid item xs={4}  >
                        <div className="about">
                            <h4>About ABC</h4>
                            <p className="about-para ">
                                Real estate is the property, land, buildings, air rights above the land and underground rights below the land. The term real estate means real, or physical, property. “Real” comes from the Latin root res, or things.
                            </p>
                        </div>

                    </Grid>
                    <Grid item xs={7}  >
                        <div className="contact">
                            <h4>Contact us</h4>
                            <ul>
                                <li>Phone Number : 90999999999</li>
                                <li>Headquarter : India</li>
                            </ul>
                        </div>

                    </Grid>
                    <Grid item xs={1}  ></Grid>
                </Grid>
            </div >
        </Fragment>
    );
};

export default Footer;
