const correctionDictionary = {
    "&#039;": "'",
    "&quot;": '"',
    "&amp;": "&",
    "&eacute;": "é",
    "&oacute;": "ó",
    "&deg;": "°",
    "&sup2;:": "²",
    "&uuml;": "ü",
    "&rdquo;": "”",
    "&aacute;": "á",
    "&uacute;": "ú",
    "&ograve;" : "ò",
    "&pi;" : "π"
};

function regEx(string) {
    const updatedString = string.replace(/&#039;|&quot;|&amp;|&eacute;|&oacute|&sup2;:|&uuml;|&rdquo;|&aacute;|&uacute;|&ograve;|&pi;/g,matched => correctionDictionary[matched])
    return updatedString
}

export default regEx