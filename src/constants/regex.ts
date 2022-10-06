 class Regex {
  static PASSWORD_REGEX =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  static MOBILE_NUMBER_REGEX = /^[9][678][0-9]{8}$/;
}


export default Regex;