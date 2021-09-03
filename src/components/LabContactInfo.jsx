import Header from './Header';
import LabButton from './LabButton';
import Blurb from './Blurb';
const LabContactInfo = () => {
    return (
        <div>
            <Header title='Lab Contact Info' />
            <div className='content'>
                <Blurb
                    text='With a lab requistion signed by your doctor, lab work may be done at the local lab closest to you. 
                    Your results go directly into your electronic record for your doctor to review and sign.'>
                </Blurb>
                <div className='row justify-content-around'>
                    <LabButton 
                        imgSrc='../res/LabIcons/Dynacare.png' 
                        linkTo='https://www.dynacare.ca/find-a-location.aspx'>
                    </LabButton>
                    <LabButton 
                        imgSrc='../res/LabIcons/LifeLabs.png'  
                        linkTo='https://locations.lifelabs.com/locationfinder'>
                    </LabButton>
                </div>
                
            </div>
        </div>
    )
}
export default LabContactInfo;