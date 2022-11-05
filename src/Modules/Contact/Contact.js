import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import './contact.css'


const Contact = ({backgroundColor, color}) => {
    return (
        <div className='contact'>
            <h3>Contact</h3>
            <div className='contact-row'>

                <div className='contact-column'>
                    <Card sx={{ minWidth: 275, minHeight: 200, backgroundColor, color }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Location
                            </Typography> <br /> <br />
                            <Typography variant="body2">
                                4821 Ridge Top Cir, Anchorage, Alaska 99508, USA
                            </Typography>
                        </CardContent>
                    </Card>
                </div>

                <div className='contact-column'>
                    <Card sx={{ minWidth: 275, minHeight: 200, backgroundColor: backgroundColor, color: color }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Contact Number
                            </Typography> <br /> <br />
                            <Typography variant="body2">
                                (205) 251-9088
                            </Typography>
                        </CardContent>
                    </Card>
                </div>

                <div className='contact-column'>
                    <Card sx={{ minWidth: 275, minHeight: 200, backgroundColor: backgroundColor, color: color }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Email Address
                            </Typography> <br /> <br />
                            <Typography variant="body2">
                                susie.hettinger@konopelski.com
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

Contact.propTypes = {
    backgroundColor: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
};

Contact.defaultProps = {
    backgroundColor: "blue",
    color: "white"
};

export default Contact