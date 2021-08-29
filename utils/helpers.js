/**
 * Helper function to format dates
 * @type {{formatDate: (function(*): string)}}
 */
module.exports = {
    formatDate: function (date) {
        const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
        return date.toLocaleDateString(undefined, options);
    },

}