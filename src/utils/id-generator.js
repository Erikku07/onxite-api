
const { customAlphabet } = require('nanoid');


module.exports = (length = 6) => {
    const nanoid = customAlphabet('23456789ABCDEFGHJKLMNPQRSTUVWXYZ', length);

    return nanoid();
}