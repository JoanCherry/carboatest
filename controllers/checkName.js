const checkName = (annonce) => {
    if (annonce.contacts.firstName.length > 2 && annonce.contacts.lastName.length > 2)
        return true;
    return false;
}

module.exports = checkName;