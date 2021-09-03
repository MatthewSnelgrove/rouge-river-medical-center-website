import Card from 'react-bootstrap/Card';
const AppointmentType = ({ apptType, apptDisc }) => {
    return (
        <Card className='col-lg col-sm-12'>
            <Card.Img variant='top' src={'./res/apptTypeIcons/' + apptType.replace(/\s/g, '') + '.png'} />
            <Card.Body>
                <Card.Title>
                    {apptType}
                </Card.Title>
                <Card.Text>
                    {apptDisc}
                </Card.Text>
            </Card.Body>
        </Card>   
    );
}

export default AppointmentType
