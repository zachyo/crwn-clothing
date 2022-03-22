import '../custom-button/custom-button.styles.scss';

const CustomButton = ({children, isGoogleSignIn, ...otherProps}) => {
    return (
      <div
        className={`${isGoogleSignIn ? 'google-signin' : '' } custom-button`}
        {...otherProps}
      >
        {children}
      </div>
    );
}
 
export default CustomButton;