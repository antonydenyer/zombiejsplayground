module.exports = {
    mixin: function (source, dest) {
        for (var key in source) {
            if (!dest.hasOwnProperty(key)) {
                dest[key] = source[key];
            }
        }
    }
};
