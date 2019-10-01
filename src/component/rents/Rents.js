import React from 'react';
import Rent from './Rent';
import './rents.scss';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const Rents = () => {
    return (
        <Grid container spacing={3}>
            <Rent 
                imgName="img_1.jpg"
                desc="625 S. Berendo St Unit 607 Los Angeles, CA 90005"
                bed={2}
                bath={3}
                sqarefeet={1,620}
             />
            <Rent 
                imgName="img_2.jpg" 
                desc="1 New York Ave, Warners Bay, NSW 2282"
                bed={2}
                bath={3}
                sqarefeet={1,620}  
            />
            <Rent 
                imgName="img_3.jpg" 
                desc="853 S Lucerne Blvd Unit 101 Los Angeles, CA 90005"
                bed={2}
                bath={3}
                sqarefeet={1,620}
            />
            <Rent 
                imgName="img_1.jpg" 
                desc="625 S. Berendo St Unit 607 Los Angeles, CA 90005"
                bed={2}
                bath={3}
                sqarefeet={1,620}
             />
            <Rent 
                imgName="img_2.jpg" 
                desc="1 New York Ave, Warners Bay, NSW 2282"
                bed={2}
                bath={3}
                sqarefeet={1,620}  
            />
            <Rent 
                imgName="img_3.jpg" 
                desc="853 S Lucerne Blvd Unit 101 Los Angeles, CA 90005"
                bed={2}
                bath={3}
                sqarefeet={1,620}  
            />
        </Grid>
    );
};

export default Rents;