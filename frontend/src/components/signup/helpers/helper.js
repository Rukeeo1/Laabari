export const formValid = ({ formErrors, ...rest }) => {
    let valid = true;
  
    //validate form errors being empty
    Object.values(formErrors).forEach(value => {
      value.length > 0 && (valid = false);
    });
  
    //validate form when no values are passed in....
    Object.values(rest).forEach(value => {
      value === null && (valid = false);
    });
  
    return valid;
  };
 
  
