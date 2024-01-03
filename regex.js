let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex for email

//The local part (before the @ symbol) must consist of one or more word characters.
//The domain part (after the @ symbol) allows for subdomains and must consist of one or more word characters separated by dots or hyphens.
//The top-level domain (TLD) must consist of a dot followed by 2 or 3 word characters.
//The overall structure should be localpart@domainpart.tld.

let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; // regex for password

//Contains at least one digit.
//Contains at least one lowercase letter.
//Contains at least one uppercase letter.
//Has a total length between 6 and 20 characters.

//check the data in given format by
  emailRegex.test(value_to_be_tested) --=> returns boolean either true or false
