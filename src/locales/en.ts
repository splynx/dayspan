
import { Locale } from '../Locale';


const MAP: string[] = [
  'th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'
];

const en: Locale = 
{
  weekStartsOn: 0,

  firstWeekContainsDate: 1,

  suffix: (value: number) => {
    const TH_SPECIAL_MIN = 11;
    const TH_SPECIAL_MAX = 13;
    const suffix = value >= TH_SPECIAL_MIN && value <= TH_SPECIAL_MAX ? 'th' : MAP[ value % MAP.length ];

    return value + suffix;
  },

  identifierTime: (short) => short ? 'lll' : 'LLL',
  identifierDay: (short) => short ? 'll' : 'LL',
  identifierWeek: (short) => 'wo [week of] YYYY',
  identifierMonth: (short) => short ? 'MMM YYYY' : 'MMMM YYYY',
  identifierQuarter: (short) => short ? 'Qo [quarter] YYYY' : 'Qo [quarter] YYYY',
  identifierYear: (short) => 'YYYY',

  patternNone: (day) => 'Does not repeat',
  patternDaily: (day) => 'Daily',
  patternWeekly: (day) => 'Weekly on ' + day.format('dddd'),
  patternMonthlyWeek: (day) => 'Monthly on the ' + en.suffix(day.weekspanOfMonth + 1) + ' ' + day.format('dddd'),
  patternAnnually: (day) => 'Annually on ' + day.format('MMMM Do'),
  patternAnnuallyMonthWeek: (day) => 'Annually on the ' + en.suffix(day.weekspanOfMonth + 1) + ' ' + day.format('dddd') + ' of ' + day.format('MMMM'),
  patternWeekday: (day) => 'Every weekday (Monday to Friday)',
  patternMonthly: (day) => 'Monthly on the ' + day.format('Do') + ' day',
  patternLastDay: (day) => 'Last day of the month',
  patternLastDayOfMonth: (day) => 'Last day of ' + day.format('MMMM'),
  patternLastWeekday: (day) => 'Last ' + day.format('dddd') + ' in ' + day.format('MMMM'),
  patternCustom: (day) => 'Custom...',

  scheduleStartingOn: (start) => 'Starting on ' + start.format('MMMM Do, YYYY'),
  scheduleEndingOn: (end) => ' and ending on ' + end.format('MMMM Do, YYYY'),
  scheduleEndsOn: (end) => 'Up until ' + end.format('MMMM Do, YYYY'),
  scheduleThing: (thing, start) => start ? 'The ' + thing + ' will occur' : ' the ' + thing + ' will occur',

  scheduleAtTimes: ' at ',

  scheduleDuration: (duration, unit) => ' lasting ' + duration + ' ' + (unit ? unit + ' ' : ''),

  scheduleExcludes: ' excluding ',
  scheduleIncludes: ' including ',
  scheduleCancels: ' with cancellations on ',

  ruleDayOfWeek: {
    // every 2nd day of the week
    every: (every) => `every ${en.suffix(every)} day of the week`,
    // starting on the 5th day of the week
    offset: (offset) => `starting on the ${en.suffix(offset)} day of the week`,
    // on the 1st, 2nd, and 4th day of the week
    oneOf: (values) => `on the ${en.list(values.map(en.suffix))} day of the week`
  },
  ruleLastDayOfMonth: {
    // every 3rd last day of the month
    every: (every) => `every ${en.suffix(every)} last day of the month`,
    // starting on the 2nd last day of the month
    offset: (offset) => `starting on the ${en.suffix(offset)} last day of the month`,
    // on the 1st, 2nd, and 3rd last day of the month
    oneOf: (values) => `on the ${en.list(values.map(en.suffix))} last day of the month`
  },
  ruleDayOfMonth: {
    // every 3rd day of the month
    every: (every) => `every ${en.suffix(every)} day of the month`,
    // starting on the 2nd day of the month
    offset: (offset) => `starting on the ${en.suffix(offset)} day of the month`,
    // on the 1st, 2nd, and 3rd day of the month
    oneOf: (values) => `on the ${en.list(values.map(en.suffix))} day of the month`
  },
  ruleDayOfYear: {
    // every 3rd day of the year
    every: (every) => `every ${en.suffix(every)} day of the year`,
    // starting on the 2nd day of the year
    offset: (offset) => `starting on the ${en.suffix(offset + 1)} day of the year`,
    // on the 1st, 2nd, and 3rd day of the year
    oneOf: (values) => `on the ${en.list(values.map(en.suffix))} day of the year`
  },
  ruleYear: {
    // every 3rd year
    every: (every) => `every ${en.suffix(every)} year`,
    // starting in 2018
    offset: (offset) => `starting in ${offset}`,
    // in 2019, 2020, and 2021
    oneOf: (values) => `in ${en.list(values.map(x => x.toString()))}`
  },
  ruleMonth: {
    // every 3rd month
    every: (every) => `every ${en.suffix(every)} month`,
    // starting in February
    offset: (offset) => `starting in ${en.months[0][offset]}`,
    // in February, May, and June
    oneOf: (values) => `in ${en.list(values.map(x => en.months[0][x]))}`
  },
  ruleDay: {
    // every 2nd day of the week
    every: (every) => `every ${en.suffix(every)} day of the week`,
    // starting on Tuesday
    offset: (offset) => `starting on ${en.weekdays[0][offset]}`,
    // on Monday, Wednesday, and Friday
    oneOf: (values) => `on ${en.list(values.map(v => en.weekdays[0][v]))}`
  },
  ruleWeekOfYear: {
    // every 3rd week of the year
    every: (every) => `every ${en.suffix(every)} week of the year`,
    // starting on the 2nd week of the year
    offset: (offset) => `starting on the ${en.suffix(offset)} week of the year`,
    // on the 1st, 2nd, and 3rd week of the year
    oneOf: (values) => `on the ${en.list(values.map(en.suffix))} week of the year`
  },
  ruleWeekspanOfYear: {
    // every 3rd weekspan of the year
    every: (every) => `every ${en.suffix(every + 1)} weekspan of the year`,
    // starting on the 2nd weekspan of the year
    offset: (offset) => `starting on the ${en.suffix(offset + 1)} weekspan of the year`,
    // on the 1st, 2nd, and 3rd weekspan of the year
    oneOf: (values) => `on the ${en.list(values.map(x => en.suffix(x + 1)))} weekspan of the year`
  },
  ruleFullWeekOfYear: {
    // every 3rd full week of the year
    every: (every) => `every ${en.suffix(every)} full week of the year`,
    // starting on the 2nd full week of the year
    offset: (offset) => `starting on the ${en.suffix(offset)} full week of the year`,
    // on the 1st, 2nd, and 3rd full week of the year
    oneOf: (values) => `on the ${en.list(values.map(en.suffix))} full week of the year`
  },
  ruleLastWeekspanOfYear: {
    // every 3rd last weekspan of the year
    every: (every) => `every ${en.suffix(every + 1)} last weekspan of the year`,
    // starting on the 2nd last weekspan of the year
    offset: (offset) => `starting on the ${en.suffix(offset + 1)} last weekspan of the year`,
    // on the 1st, 2nd, and 3rd last weekspan of the year
    oneOf: (values) => `on the ${en.list(values.map(x => en.suffix(x + 1)))} last weekspan of the year`
  },
  ruleLastFullWeekOfYear: {
    // every 3rd last full week of the year
    every: (every) => `every ${en.suffix(every)} last full week of the year`,
    // starting on the 2nd last full week of the year
    offset: (offset) => `starting on the ${en.suffix(offset)} last full week of the year`,
    // on the 1st, 2nd, and 3rd last full week of the year
    oneOf: (values) => `on the ${en.list(values.map(en.suffix))} last full week of the year`
  },
  ruleWeekOfMonth: {
    // every 3rd week of the month
    every: (every) => `every ${en.suffix(every)} week of the month`,
    // starting on the 2nd week of the month
    offset: (offset) => `starting on the ${en.suffix(offset)} week of the month`,
    // on the 1st, 2nd, and 3rd week of the month
    oneOf: (values) => `on the ${en.list(values.map(en.suffix))} week of the month`
  },
  ruleFullWeekOfMonth: {
    // every 3rd full week of the month
    every: (every) => `every ${en.suffix(every)} full week of the month`,
    // starting on the 2nd full week of the month
    offset: (offset) => `starting on the ${en.suffix(offset)} full week of the month`,
    // on the 1st, 2nd, and 3rd full week of the month
    oneOf: (values) => `on the ${en.list(values.map(en.suffix))} full week of the month`
  },
  ruleWeekspanOfMonth: {
    // every 3rd weekspan of the month
    every: (every) => `every ${en.suffix(every + 1)} weekspan of the month`,
    // starting on the 2nd weekspan of the month
    offset: (offset) => `starting on the ${en.suffix(offset + 1)} weekspan of the month`,
    // on the 1st, 2nd, and 3rd weekspan of the month
    oneOf: (values) => `on the ${en.list(values.map(x => en.suffix(x + 1)))} weekspan of the month`
  },
  ruleLastFullWeekOfMonth: {
    // every 3rd last full week of the month
    every: (every) => `every ${en.suffix(every)} last full week of the month`,
    // starting on the 2nd last full week of the month
    offset: (offset) => `starting on the ${en.suffix(offset)} last full week of the month`,
    // on the 1st, 2nd, and 3rd full week of the month
    oneOf: (values) => `on the ${en.list(values.map(en.suffix))} last full week of the month`
  },
  ruleLastWeekspanOfMonth: {
    // every 3rd last weekspan of the month
    every: (every) => `every ${en.suffix(every + 1)} last weekspan of the month`,
    // starting on the 2nd last weekspan of the month
    offset: (offset) => `starting on the ${en.suffix(offset + 1)} last weekspan of the month`,
    // on the 1st, 2nd, and 3rd last weekspan of the month
    oneOf: (values) => `on the ${en.list(values.map(x => en.suffix(x + 1)))} last weekspan of the month`
  },

  summaryDay: (short, dayOfWeek, year) => (dayOfWeek ? (short ? 'ddd, ' : 'dddd, ') : '') + (short ? 'MMM ' : 'MMMM ') + 'Do' + (year ? ' YYYY' : ''),
  summaryWeek: (short, dayOfWeek, year) => (dayOfWeek ? (short ? 'ddd, ' : 'dddd, ') : '') + (short ? 'MMM ' : 'MMMM ') + 'Do' + (year ? ' YYYY' : ''),
  summaryMonth: (short, dayOfWeek, year) => (short ? 'MMM' : 'MMMM') + (year ? ' YYYY' : ''),
  summaryYear: (short, dayOfWeek, year) => (year ? 'YYYY' : ''),

  list: (items) => {
    const last: number = items.length - 1;
    let out: string = items[0];

    for (let i = 1; i < last; i++) {
      out += ', ' + items[i];
    }

    if (last > 0) {
      out += ' and ' + items[last];
    }

    return out;
  },

  months: [
    ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octoboer', 'November', 'December'],
    ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
    ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    ['Ja', 'F', 'Mr', 'Ap', 'My', 'Je', 'Jl', 'Ag', 'S', 'O', 'N', 'D']
  ],

  weekdays: [
    ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
    ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    ['Su', 'M', 'Tu', 'W', 'Th', 'F', 'Sa'],
  ],
};

export default en;