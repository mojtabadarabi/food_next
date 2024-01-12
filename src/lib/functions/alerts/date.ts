import moment from 'moment-jalaali';

moment.loadPersian({ usePersianDigits: true });

/**
 * returns jalali date, like '۱۴۰۰/۰۹/۱۴'
 * @params: accepts a date as string, like 'Mon Dec 06 2021 10:17:50 GMT+0330 (Iran Standard Time)'
 * */
export const formatDate = (date: string) => {
  return moment(date).format('jYYYY/jM/jD');
}

export function formatDateToPersian(dateObj) {
  return moment(dateObj.value).format('jYYYY/jM/jD');
}

export function formatDateToGregorian(obj) {
  return( moment(obj.value).locale('en-us').format('YYYY/MM/DD'))
}

export function formatDateToPersianByTime(dateObj) {
    console.log(dateObj)
  return moment(dateObj).format('HH:MM:SS - jYYYY/jM/jD');
}

export function formatDateToGregorianByTime(obj) {
  return moment(obj.value).locale('en-us').format('HH:MM:SS - YYYY/MM/DD');
}