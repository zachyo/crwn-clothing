import '../custom-button/custom-button.styles.scss';

const CustomButton = ({children, isGoogleSignIn, inverted, ...otherProps}) => {
    return (
      <div
        className={`${inverted ? "inverted" : ""} ${
          isGoogleSignIn ? "google-signin" : ""
        } custom-button`}
        {...otherProps}
      >
        {children}
      </div>
    );
}
 
export default CustomButton;