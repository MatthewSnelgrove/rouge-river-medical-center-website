import Card from 'react-bootstrap/Card';
const List = ({ title, items }) => {
    return (
        <div className='row justify-content-center'>
            <Card className='col-lg-6 col-md-9'>
                <Card.Body>
                    <Card.Title className='cardTitle'>
                        { title }
                    </Card.Title>
                    <Card.Text>
                    <ul>
                        {items.map(item => 
                        <li key={ item }>{ item }</li>
                        )}
                    </ul>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
        

        
        // <div>
        //     <p className='text-center'><b>{ title }</b></p>
        //     <ul>
        //         {items.map(item => 
        //         <li key={ item }>{ item }</li>
        //         )}
        //     </ul>

            
        // </div>
    )
}
export default List;