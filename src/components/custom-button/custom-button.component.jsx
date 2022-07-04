import '../custom-button/custom-button.styles.scss';

const CustomButton = ({children, isGoogleSignIn, inverted, ...otherProps}) => {
    return (
      <button
        className={`${inverted ? "inverted" : ""} ${
          isGoogleSignIn ? "google-signin" : ""
        } custom-button`}
        {...otherProps}
      >
        {children}
      </button>
    );
}
 
export default CustomButton;