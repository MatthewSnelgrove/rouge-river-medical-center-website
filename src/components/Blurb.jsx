import Card from 'react-bootstrap/Card';
const Blurb = ({ text }) => {
    return (
        <Card className='blurb'>
            <Card.Body>
                <Card.Text>
                    { text }
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Blurb
