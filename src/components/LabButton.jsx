const LabButton = ({ imgSrc, linkTo }) => {
    return (
        <div className='lab-button'>
            <a href={ linkTo }>
                <button>
                    <img className='lab-button-img' src={ imgSrc }/>
                </button>
            </a>
        </div>
        
        
    )
}
export default LabButton;