import React from 'react';
import './Rent.scss';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import img from '../../../images/img_1.jpg';
import AddLocationIcon from '@material-ui/icons/AddLocation';
const Rent = (props) => {
    return (
        <Grid item xs={12} md={4} >
            <Paper className="rent">
                <img className="rent-img" src={require(`../../../images/${props.imgName}`)} />
                <h3>{props.desc}</h3>
                <Grid container >
                    <Grid item xs={1}  >
                        <AddLocationIcon className="location" />
                    </Grid>
                    <Grid item xs={11}  >
                        <p>{props.desc}</p>
                    </Grid>
                </Grid>
                <Grid container >
                    <Grid item xs={3}  >
                        <div className="list-div">
                            <p>Bed</p>
                        </div>

                    </Grid>
                    <Grid item xs={3}  >
                        <div className="list-div">
                            <p>Bath</p>
                        </div>
                    </Grid>
                    <Grid item xs={6}  >
                        <div className="list-div">
                            <p>Square Ft.</p>
                        </div>
                    </Grid>
                </Grid>
                <Grid container >
                    <Grid item xs={3}  >
                        <div className="list-div">
                            <p>{props.bed}</p>
                        </div>

                    </Grid>
                    <Grid item xs={3}  >
                        <div className="list-div">
                            <p>{props.bath}</p>
                        </div>
                    </Grid>
                    <Grid item xs={6}  >
                        <div className="list-div">
                            <p>{props.sqarefeet}</p>
                        </div>
                    </Grid>
                </Grid>

            </Paper>
        </Grid>
    );
};

export default Rent;