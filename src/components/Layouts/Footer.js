import React from 'react';
import {Paper, Tabs} from '@material-ui/core/';
import {Tab} from '@material-ui/core/';

export default ({muscles}) =>
    <Paper>
        <Tabs
            value={0} // this.state.value
            // onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
        >
            <Tab label="All" />
            { muscles.map( group =>
                <Tab label={group} />
            )}

        </Tabs>
    </Paper>
