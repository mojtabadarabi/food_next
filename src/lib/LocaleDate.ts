import moment from 'moment-jalaali';
// import {i18n} from "next-i18next";

// load persian date by digits
moment.loadPersian({ usePersianDigits: true });

export default class LocaleDate {
    private readonly date: Date | undefined;
    private static defaultFormat: string = 'HH:mm A'

    constructor(date?: Date) {
        this.date = date;
    }

    getDate() {
        return this.date
    }

    // *************** string date functions *************//
    // get date by format in moment jalali
    static getMomentedDate(date: string | Date, format?: string | FormatType) {
        // if (i18n.resolvedLanguage === 'fa') {
            return this.checkDateFormat(format, date, this.getMomentedPersianDate, 'pr')
        // } else {
        //     return this.checkDateFormat(format, date, this.getMomentedGregorianDate, 'gr')
        // }
    }

    // get date from now or till now in moment jalali
    static getMomentedDateFromNow(date: string | Date) {
        // if (i18n.resolvedLanguage === 'fa') {
        //     return this.getMomentedPersianDateFromNow( date )
        // } else {
        //     return this.getMomentedGregorianDateFromNow( date )
        // }
    }

    // get persian date by format in moment jalali
    static getMomentedPersianDate(date: string | Date, format?: string) {
        return moment(date).locale('fa-IR').format(format || this.defaultFormat)
    }

    // get persian date by format in moment jalali
    static getMomentedPersianDateFromNow(date: string | Date, format?: string) {
        return moment(date).locale('fa-IR').fromNow()
    }

    // get gregorian date by format in moment jalali
    static getMomentedGregorianDate(date: string | Date, format?: string) {
        return moment(date).locale('en-US').format(format || this.defaultFormat)
    }
    // get gregorian date from now or till now in moment jalali
    static getMomentedGregorianDateFromNow(date: string | Date, format?: string) {
        return moment(date).locale('en-US').fromNow()
    }

    // ************ helpers ***********//
    // check format date  and return to callBack
    private static checkDateFormat(format: string | FormatType, date: string | Date, callBack: (date: string | Date, format: string | FormatType) => any, formatLang: string) {
        // if format is not exist return date by default date
        if (!format) return callBack(date, this.defaultFormat)
        // if format is string return by string
        if (typeof format === 'string') return callBack(date, format)
        // if format type is object return by its props
        return callBack(date, format[formatLang])
    }


    static isToday(date: string | Date) {
        const momentedDate = moment(date).locale('en-US').format('YYYY-MM-DD')
        const today = moment(new Date()).locale('en-US').format('YYYY-MM-DD')
        return momentedDate === today
    }

    static isSameWeek(date: string | Date) {
        const momentedDate = moment(date).locale('en-US').format('w')
        const today = moment(new Date()).locale('en-US').format('w')
        return momentedDate === today
    }

    // get different of two date
    static getDifferent(endDate: string | Date, startDate?: string | Date) {
        const now = moment(startDate || new Date());
        const end = moment(endDate);
        //@ts-ignore
        const duration = moment.duration(now.diff(end));
        //@ts-ignore
        return duration?._data
    }


    // ************ formaters ***********//
    // this function return date format
    // if date equal to today return format hour : seconds
    // if day in current week return week day name
    // else return something like this 16may 2023
    static getDateFormat(date: string | Date) {
        if (LocaleDate.isToday(date)) {
            return {
                pr: 'hh:ss',
                gr: 'hh:ss'
            }
        } else if (LocaleDate.isSameWeek(date)) {
            return {
                pr: 'dddd',
                gr: 'dddd'
            }
        } else {
            return {
                gr: ' D MMMM YYYY',
                pr: 'D jMMMM  jYYYY'
            }
        }
    }
}

interface FormatType {
    pr?: string,
    gr?: string
}