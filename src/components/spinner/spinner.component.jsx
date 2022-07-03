import './spinner.styles.scss'
// import { selectShopItems } from '../../redux/shop/shop.utils'

const Spinner = () => {
    console.log('yes')
    // selectShopItems()
    return (
        <div className="spinnerOverlay">
            <div className="spinnerContainer"></div>
        </div>
    )
}
 
export default Spinner;