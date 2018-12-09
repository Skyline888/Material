import React, { Fragment } from 'react';
import { Grid, Paper, Typography, List, ListItem, ListItemText } from '@material-ui/core/';

const styles = {
    Paper: { padding: 20, marginTop: 10, marginBottom: 10 }
};

export default ({ exercises }) =>
    <Grid container>
        <Grid item sm>
            <Paper style={styles.Paper}>
                {exercises.map(([group, exercises]) =>
                    <Fragment>
                        <Typography variant="headline">
                            {group}
                        </Typography>
                        <List component="ul">
                            {exercises.map(({ title}) =>
                                <ListItem button>
                                    <ListItemText primary={title} />
                                </ListItem>
                            )}
                        </List>
                    </Fragment>
                )}
            </Paper>
        </Grid>
        <Grid item sm>
            <Paper style={styles.Paper}>
                <Typography variant="display1">
                    Welcome!
                </Typography>
                <Typography variant="subheading">
                    Please select what ever
                </Typography>
            </Paper>
        </Grid>
    </Grid>
