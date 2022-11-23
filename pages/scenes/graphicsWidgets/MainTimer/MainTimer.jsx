import TimerIcon from '@mui/icons-material/Timer';

// yellow #f7d707
// green #6ae605

const flagToColor = {
    WarmUp: 'rgba(198, 3, 252, 1)',
    Green: 'rgba(0, 215, 0, 1)',
    Yellow: 'rgba(252, 227, 3, 1)',
    Red:    'rgba(252, 20, 3, 1)',
    Finish: 'rgba(255, 255, 255, 1)'
}

export const MainTimer = (props) => {

    const parseClock = (value) => {
        var splitString = value.split(":");
        if (splitString[0] === "00") {
            return splitString[1] + ":" + splitString[2];
        }
        return value;
    };

    return (
        <div style={{
            width: '20%',
            margin: 'auto',
            marginTop: '4rem',
            backgroundColor: 'black',
            backgroundColor: flagToColor[props.data.api_data ?
                props.data.api_data.race_details.flag : "-"],
            borderRadius: '10px',
            textAlign: 'center',
        }}>
            <div style={{ backgroundColor: 'rgba(23, 23, 23,1)',
                        color: 'white',
                        width: '60%',
                        marginLeft: '50%',
                        marginBottom: '-6%',
                        margin: 'auto',
                        }}>
                        {props.data.api_data ?
                        props.data.api_data.race_details.name : "-"}
            </div>
            <div style={{
                    borderBottomLeftRadius: '10px',

            }}>
                <div style={{ backgroundColor: 'black',
                            marginLeft: '3rem',
                            marginRight: '3rem',
                            height: '2.5rem',

                            }}>
                    <TimerIcon size={32} sx={{color: "white"}} style={{marginLeft: '5rem', marginTop: '1.5%'}}></TimerIcon>
                    <h2 style={{ color: 'white', float: 'right', margin: 'auto', paddingRight: '30%'}}>{`${
                        props.data.api_data ?
                        parseClock(props.data.api_data.race_time.elapsed_time)
                        : "-"}`}</h2>
                </div>

            </div>
        </div>

    )
};