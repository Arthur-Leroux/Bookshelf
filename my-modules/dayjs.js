const dayjs = require(`dayjs`);
const advancedFormat = require('dayjs/plugin/advancedFormat');
dayjs.extend(advancedFormat);

require(`dayjs/locale/fr`);
dayjs.locale(`fr`);




module.exports = dayjs;