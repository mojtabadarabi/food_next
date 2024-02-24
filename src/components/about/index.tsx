import { FaChartLine } from "react-icons/fa6";
import { PiFlowerLotusBold, PiNotepadBold } from "react-icons/pi";
import { RiGroupLine } from "react-icons/ri";

export default function Index() {
    return (
        <div className="">
            <div className="bg-[var(--sub-color-plate)] rounded-md p-4 flex items-center justify-center md:aspect-[16/4] aspect-[16/6]">
                <h1 className="md:text-4xl text-2xl text-white font-bold">درباره فودینو بیشتر بدانید</h1>
            </div>
            <div className="p-4 flex flex-col gap-8 my-8">
                <h1 className="text-3xl">درباره ما</h1>
                <div className="flex flex-col md:flex-row items-center justify-center">
                    <p className="md:text-xl text-md text-justify font-light md:w-[50%]">رستوران‌های زنجیره‌ای ترخینه در سال ۱۳۶۸ افتتاح گردیده‌اند و در طی این سال‌ها همواره با ارائه غذاهای باکیفیت و سرویس سریع و به موقع در تلاش برای جلب رضایت مشتریان خود بوده‌اند. در طی این سال‌ها اولیت جلب رضایت مشتریان بوده است. دراین خصوص ترخینه همیشه در تلاش بوده تا در طی این زمان‌ها کیفیت غذاهای خودرا در بهترین حالت نگه داشته و حتی با نوسانات قیمت‌های مواد اولیه در بازار قیمت خود را ثابت نگه داشته است. ترخینه شعبات خود را افتتاح کرده که بسیار شیک و مدرن می‌باشند و برای برگزاری جشن‌های کوچک و بزرگ شما مشتریان عزیز توانایی پذیرایی با کیفیت بالا را دارند. سالن پذیرایی شعبات در دو طبقه مجزا به همراه راه پله مدرن و آسانسور برای افراد کم‌توان و سالخورده آماده ارائه سرویس به شما عزیزان می‌باشند.
                        چشم انداز: در آینده‌ای نزدیک تالار پذیرایی شعبات راه اندازی شده و آماده برگزاری جشن‌ها و مراسم‌های بزرگ شما خواهند بود . به امید آن روز که همه ایرانیان سالم و سلامت باشند.</p>
                    <div className="md:w-[50%]"></div>
                </div>
            </div>
            <div className="flex items-center flex-wrap justify-around gap-4  bg-slate-200 p-2 md:p-16">
                <div className="flex flex-col justify-center items-center text-sm font-bold gap-2">
                    <RiGroupLine size={50} />
                    <span>پرسنلی مجرب و حرفهای</span>
                </div>
                <div className="flex flex-col justify-center items-center text-sm font-bold gap-2">
                    <FaChartLine size={50} />
                    <span>کیفیت بالای غذاها</span>
                </div>
                <div className="flex flex-col justify-center items-center text-sm font-bold gap-2">
                    <PiFlowerLotusBold size={50} />
                    <span>محیطی آرام و دلنشین</span>
                </div>
                <div className="flex flex-col justify-center items-center text-sm font-bold gap-2">
                    <PiNotepadBold size={50} />
                    <span>منوی متنوع</span>
                </div>
            </div>
        </div>
    )
}
