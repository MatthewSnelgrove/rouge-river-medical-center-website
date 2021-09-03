import Header from './Header';
import Blurb from './Blurb';
import List from './List';
const UnderstandingFHOS = () => {
    return (
        <div>
            <Header title='Understanding FHOs' />
            <div className='content'>
                <Blurb 
                    className='col-xs-1 text-left' 
                    text='Our office is part of a 20-doctor family health organization (FHO) working together 
                    to ensure you have timely access to health care. Being an enrolled FHO patient means you commit to receive healthcare 
                    from your primary physician or - if they are not available - from another doctor in the FHO.'>
                </Blurb>
                <List title='Benefits of an FHO' items={[
                    'Regular appointment times in our office',
                    'Urgent same-day appointments available',
                    'Extended hours shared through the offices of our 20-physician team Monday-Thursday evenings and most Saturday mornings',
                    'Phone advice from a Telehealth nurse available 24 hours',
                    'Referrals to specialists',
                    'Registration with Ministry of Health preventative care program',
                    'Mailed reminders for test such as paps, mammograms, and bowel screening'
                ]}/>
            </div>
        </div>
    )
}
export default UnderstandingFHOS;