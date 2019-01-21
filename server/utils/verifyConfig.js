const validate = json => {
  if (!!json.secret && !!json.expiry && !!json.credentials && !!json.port) {
    return true;
  } else {
    return false;
  }
};

module.exports = validate;
