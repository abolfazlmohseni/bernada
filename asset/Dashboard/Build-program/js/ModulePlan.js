// ماژول برنامه های درسی
const studyPlan = {
    ebtedayi: {
        twoH: [
            { day: 'شنبه', activity: 'فارسی', activityDuration: 1 },
            { day: 'شنبه', activity: 'استراحت', activityDuration: 0.25 },
            { day: 'شنبه', activity: 'ریاضی', activityDuration: 1 },
            { day: 'یکشنبه', activity: 'علوم', activityDuration: 1 },
            { day: 'یکشنبه', activity: 'استراحت', activityDuration: 0.25 },
            { day: 'یکشنبه', activity: 'ریاضی', activityDuration: 1 },
            { day: 'دوشنبه', activity: 'فارسی', activityDuration: 1 },
            { day: 'دوشنبه', activity: 'استراحت', activityDuration: 0.25 },
            { day: 'دوشنبه', activity: 'علوم', activityDuration: 1 },
            { day: 'سه‌شنبه', activity: 'ریاضی', activityDuration: 1 },
            { day: 'سه‌شنبه', activity: 'استراحت', activityDuration: 0.25 },
            { day: 'سه‌شنبه', activity: 'فارسی', activityDuration: 1 },
            { day: 'چهارشنبه', activity: 'علوم', activityDuration: 1 },
            { day: 'چهارشنبه', activity: 'استراحت', activityDuration: 0.25 },
            { day: 'چهارشنبه', activity: 'ریاضی', activityDuration: 1 },
        ],
        fourH: [
            { day: 'شنبه', activity: 'فارسی', activityDuration: 1 },
            { day: 'شنبه', activity: 'استراحت', activityDuration: 0.25 },
            { day: 'شنبه', activity: 'ریاضی', activityDuration: 1 },
            { day: 'شنبه', activity: 'استراحت', activityDuration: 0.25 },
            { day: 'شنبه', activity: 'هنر(طراحی و نقاشی)', activityDuration: 1 },
            { day: 'شنبه', activity: 'استراحت', activityDuration: 0.25 },
            { day: 'شنبه', activity: 'علوم تجربی', activityDuration: 1 },
            { day: 'یکشنبه', activity: 'ریاضی', activityDuration: 1 },
            { day: 'یکشنبه', activity: 'استراحت', activityDuration: 0.25 },
            { day: 'یکشنبه', activity: 'فارسی', activityDuration: 1 },
            { day: 'یکشنبه', activity: 'استراحت', activityDuration: 0.25 },
            { day: 'یکشنبه', activity: 'علوم', activityDuration: 1 },
            { day: 'یکشنبه', activity: 'مطالعات اجتماعی', activityDuration: 1 },
            { day: 'دوشنبه', activity: 'علوم', activityDuration: 1 },
            { day: 'دوشنبه', activity: 'استراحت', activityDuration: 0.25 },
            { day: 'دوشنبه', activity: 'مطالعات اجتماعی', activityDuration: 1 },
            { day: 'دوشنبه', activity: 'استراحت', activityDuration: 0.25 },
            { day: 'دوشنبه', activity: 'دیکته و املاء', activityDuration: 1 },
            { day: 'دوشنبه', activity: 'استراحت', activityDuration: 0.25 },
            { day: 'دوشنبه', activity: 'فارسی', activityDuration: 1 },
            { day: 'سه‌شنبه', activity: 'مطالعات اجتماعی', activityDuration: 1 },
            { day: 'سه‌شنبه', activity: 'استراحت', activityDuration: 0.25 },
            { day: 'سه‌شنبه', activity: 'قرآن', activityDuration: 1 },
            { day: 'سه‌شنبه', activity: 'استراحت', activityDuration: 0.25 },
            { day: 'سه‌شنبه', activity: 'هنر(طراحی و نقاشی)', activityDuration: 1.5 },
            { day: 'سه‌شنبه', activity: 'استراحت', activityDuration: 0.25 },
            { day: 'سه‌شنبه', activity: 'ریاضی', activityDuration: 1 },
            { day: 'چهارشنبه', activity: 'قرآن', activityDuration: 1 },
            { day: 'چهارشنبه', activity: 'استراحت', activityDuration: 0.25 },
            { day: 'چهارشنبه', activity: 'علوم تجربی', activityDuration: 1 },
            { day: 'چهارشنبه', activity: 'استراحت', activityDuration: 0.25 },
            { day: 'چهارشنبه', activity: 'مطالعات اجتماعی', activityDuration: 1 },
            { day: 'چهارشنبه', activity: 'استراحت', activityDuration: 0.25 },
            { day: 'چهارشنبه', activity: 'قرآن(مرور)', activityDuration: 1 },
        ], sixH: [
            { day: "شنبه", activity: "فارسی (خواندن و نوشتن)", activityDuration: 1 },
            { day: "شنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "شنبه", activity: "ریاضی (تمرین و حل مسائل)", activityDuration: 1 },
            { day: "شنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "شنبه", activity: "هنر (طراحی و نقاشی)", activityDuration: 1 },
            { day: "شنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "شنبه", activity: "علوم تجربی (پروژه و آزمایشات)", activityDuration: 1 },
            { day: "یکشنبه", activity: "ریاضی (حل مسائل پیچیده)", activityDuration: 1 },
            { day: "یکشنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "یکشنبه", activity: "فارسی (دیکته و املا)", activityDuration: 1 },
            { day: "یکشنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "یکشنبه", activity: "علوم تجربی (پروژه و آزمایشات)", activityDuration: 1 },
            { day: "یکشنبه", activity: "مطالعات اجتماعی", activityDuration: 1 },
            { day: "دوشنبه", activity: "علوم تجربی (پروژه و آزمایشات)", activityDuration: 1 },
            { day: "دوشنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "دوشنبه", activity: "مطالعات اجتماعی (مرور و تمرین)", activityDuration: 1 },
            { day: "دوشنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "دوشنبه", activity: "دیکته و املاء", activityDuration: 1 },
            { day: "دوشنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "دوشنبه", activity: "فارسی (خواندن و نوشتن)", activityDuration: 1 },
            { day: "سه‌شنبه", activity: "مطالعات اجتماعی", activityDuration: 1 },
            { day: "سه‌شنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "سه‌شنبه", activity: "قرآن (حفظ و تلاوت)", activityDuration: 1 },
            { day: "سه‌شنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "سه‌شنبه", activity: "هنر (طراحی و نقاشی)", activityDuration: 1.5 },
            { day: "سه‌شنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "سه‌شنبه", activity: "ریاضی (تمرین و حل مسائل)", activityDuration: 1 },
            { day: "چهارشنبه", activity: "قرآن (حفظ و تلاوت)", activityDuration: 1 },
            { day: "چهارشنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "چهارشنبه", activity: "علوم تجربی (پروژه و آزمایشات)", activityDuration: 1 },
            { day: "چهارشنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "چهارشنبه", activity: "مطالعات اجتماعی", activityDuration: 1 },
            { day: "چهارشنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "چهارشنبه", activity: "قرآن (مرور)", activityDuration: 1 }
        ]
    }, rahnamayi: {
        twoH: [
            { day: "شنبه", activity: "ریاضی", activityDuration: 1 },
            { day: "شنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "شنبه", activity: "فارسی (دیکته و املا)", activityDuration: 1 },
            { day: "یکشنبه", activity: "فارسی", activityDuration: 1 },
            { day: "یکشنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "یکشنبه", activity: "ریاضی (تمرین و حل مسائل)", activityDuration: 1 },
            { day: "دوشنبه", activity: "علوم تجربی", activityDuration: 1 },
            { day: "دوشنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "دوشنبه", activity: "مطالعات اجتماعی", activityDuration: 1 },
            { day: "سه‌شنبه", activity: "قرآن (حفظ و تلاوت)", activityDuration: 1 },
            { day: "سه‌شنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "سه‌شنبه", activity: "هنر (طراحی و نقاشی)", activityDuration: 1 },
            { day: "چهارشنبه", activity: "مطالعات اجتماعی", activityDuration: 1 },
            { day: "چهارشنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "چهارشنبه", activity: "علوم تجربی", activityDuration: 1 }
        ], fourH: [


            { day: "شنبه", activity: "ریاضی", activityDuration: 1 },
            { day: "شنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "شنبه", activity: "فارسی (دیکته و املا)", activityDuration: 1 },
            { day: "شنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "شنبه", activity: "علوم تجربی (پروژه و آزمایشات)", activityDuration: 1 },
            { day: "شنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "شنبه", activity: "قرآن (حفظ و تلاوت)", activityDuration: 1 },
            { day: "یکشنبه", activity: "فارسی", activityDuration: 1 },
            { day: "یکشنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "یکشنبه", activity: "ریاضی (تمرین و حل مسائل)", activityDuration: 1 },
            { day: "یکشنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "یکشنبه", activity: "مطالعات اجتماعی (مرور و تمرین)", activityDuration: 1 },
            { day: "یکشنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "یکشنبه", activity: "علوم تجربی (پروژه و آزمایشات)", activityDuration: 1 },
            { day: "دوشنبه", activity: "علوم تجربی", activityDuration: 1 },
            { day: "دوشنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "دوشنبه", activity: "مطالعات اجتماعی", activityDuration: 1 },
            { day: "دوشنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "دوشنبه", activity: "ریاضی (حل مسائل پیچیده)", activityDuration: 1 },
            { day: "دوشنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "دوشنبه", activity: "هنر (طراحی و نقاشی)", activityDuration: 1 },
            { day: "سه‌شنبه", activity: "قرآن", activityDuration: 1 },
            { day: "سه‌شنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "سه‌شنبه", activity: "هنر (طراحی و نقاشی)", activityDuration: 1 },
            { day: "سه‌شنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "سه‌شنبه", activity: "ریاضی", activityDuration: 1 },
            { day: "سه‌شنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "سه‌شنبه", activity: "مطالعات اجتماعی", activityDuration: 1 },
            { day: "چهارشنبه", activity: "قرآن (حفظ و تلاوت)", activityDuration: 1 },
            { day: "چهارشنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "چهارشنبه", activity: "علوم تجربی (پروژه و آزمایشات)", activityDuration: 1 },
            { day: "چهارشنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "چهارشنبه", activity: "مطالعات اجتماعی", activityDuration: 1 }
        ], sixH: [
            { day: "شنبه", activity: "ریاضی", activityDuration: 1 },
            { day: "شنبه", activity: "فارسی (دیکته و املا)", activityDuration: 1 },
            { day: "شنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "شنبه", activity: "علوم تجربی (پروژه و آزمایشات)", activityDuration: 1 },
            { day: "شنبه", activity: "قرآن (حفظ و تلاوت)", activityDuration: 1 },
            { day: "شنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "شنبه", activity: "ریاضی (حل مسائل پیچیده)", activityDuration: 1 },
            { day: "شنبه", activity: "مطالعات اجتماعی", activityDuration: 1 },
            { day: "یکشنبه", activity: "فارسی", activityDuration: 1 },
            { day: "یکشنبه", activity: "ریاضی (تمرین و حل مسائل)", activityDuration: 1 },
            { day: "یکشنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "یکشنبه", activity: "مطالعات اجتماعی (مرور و تمرین)", activityDuration: 1 },
            { day: "یکشنبه", activity: "علوم تجربی (پروژه و آزمایشات)", activityDuration: 1 },
            { day: "یکشنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "یکشنبه", activity: "فارسی (خواندن و نوشتن)", activityDuration: 1 },
            { day: "یکشنبه", activity: "قرآن (حفظ و تلاوت)", activityDuration: 1 },
            { day: "دوشنبه", activity: "علوم تجربی", activityDuration: 1 },
            { day: "دوشنبه", activity: "مطالعات اجتماعی", activityDuration: 1 },
            { day: "دوشنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "دوشنبه", activity: "ریاضی (حل مسائل پیچیده)", activityDuration: 1 },
            { day: "دوشنبه", activity: "فارسی (دیکته و املا)", activityDuration: 1 },
            { day: "دوشنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "دوشنبه", activity: "قرآن (حفظ و تلاوت)", activityDuration: 1 },
            { day: "دوشنبه", activity: "ریاضی (تمرین و حل مسائل)", activityDuration: 1 },
            { day: "سه‌شنبه", activity: "مطالعات اجتماعی", activityDuration: 1 },
            { day: "سه‌شنبه", activity: "قرآن (حفظ و تلاوت)", activityDuration: 1 },
            { day: "سه‌شنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "سه‌شنبه", activity: "هنر (طراحی و نقاشی)", activityDuration: 1 },
            { day: "سه‌شنبه", activity: "ریاضی (تمرین و حل مسائل)", activityDuration: 1 },
            { day: "سه‌شنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "سه‌شنبه", activity: "مطالعات اجتماعی (مرور و تمرین)", activityDuration: 1 },
            { day: "سه‌شنبه", activity: "فارسی (دیکته و املا)", activityDuration: 1 },
            { day: "چهارشنبه", activity: "قرآن (حفظ و تلاوت)", activityDuration: 1 },
            { day: "چهارشنبه", activity: "علوم تجربی", activityDuration: 1 },
            { day: "چهارشنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "چهارشنبه", activity: "فارسی (خواندن و نوشتن)", activityDuration: 1 },
            { day: "چهارشنبه", activity: "مطالعات اجتماعی", activityDuration: 1 },
            { day: "چهارشنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "چهارشنبه", activity: "علوم تجربی (آزمایشات)", activityDuration: 1 },
            { day: "چهارشنبه", activity: "هنر (طراحی و نقاشی)", activityDuration: 1 }
        ]
    },
    motevaseteTwo: {
        ensani: {
            twoH: [
                { day: "شنبه", activity: "تاریخ (تحلیل وقایع)", activityDuration: 1 },
                { day: "شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "شنبه", activity: "ادبیات (تاریخ ادبیات)", activityDuration: 1 },
                { day: "یکشنبه", activity: "فلسفه و منطق", activityDuration: 1 },
                { day: "یکشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "یکشنبه", activity: "عربی (ترجمه و قواعد)", activityDuration: 1 },
                { day: "دوشنبه", activity: "جغرافیا (نقشه‌خوانی)", activityDuration: 1 },
                { day: "دوشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "دوشنبه", activity: "روانشناسی (مباحث پایه)", activityDuration: 1 },
                { day: "سه‌شنبه", activity: "اقتصاد (تئوری‌ها)", activityDuration: 1 },
                { day: "سه‌شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "سه‌شنبه", activity: "جامعه‌شناسی (نظریه‌ها)", activityDuration: 1 },
                { day: "چهارشنبه", activity: "علوم اجتماعی (پروژه)", activityDuration: 1 },
                { day: "چهارشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "چهارشنبه", activity: "دین و زندگی (تفسیر آیات)", activityDuration: 1 }],
            fourH: [
                { day: "شنبه", activity: "تاریخ (تحلیل وقایع)", activityDuration: 1.5 },
                { day: "شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "شنبه", activity: "ادبیات (تاریخ ادبیات)", activityDuration: 1.5 },
                { day: "شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "شنبه", activity: "عربی (ترجمه و قواعد)", activityDuration: 1 },

                // یکشنبه
                { day: "یکشنبه", activity: "فلسفه و منطق", activityDuration: 1.5 },
                { day: "یکشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "یکشنبه", activity: "جغرافیا (نقشه‌خوانی)", activityDuration: 1.5 },
                { day: "یکشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "یکشنبه", activity: "روانشناسی", activityDuration: 1 },

                // دوشنبه
                { day: "دوشنبه", activity: "اقتصاد (تئوری‌ها)", activityDuration: 1.5 },
                { day: "دوشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "دوشنبه", activity: "جامعه‌شناسی (نظریه‌ها)", activityDuration: 1.5 },
                { day: "دوشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "دوشنبه", activity: "دین و زندگی", activityDuration: 1 },

                // سه‌شنبه
                { day: "سه‌شنبه", activity: "علوم اجتماعی", activityDuration: 1.5 },
                { day: "سه‌شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "سه‌شنبه", activity: "زبان انگلیسی", activityDuration: 1.5 },
                { day: "سه‌شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "سه‌شنبه", activity: "هنر", activityDuration: 1 },

                // چهارشنبه
                { day: "چهارشنبه", activity: "ریاضی انسانی", activityDuration: 1.5 },
                { day: "چهارشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "چهارشنبه", activity: "آمار و احتمال", activityDuration: 1.5 },
                { day: "چهارشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "چهارشنبه", activity: "مطالعات فرهنگی", activityDuration: 1 }],
            sixH: [

                // شنبه
                { day: "شنبه", activity: "تاریخ (تحلیل منابع)", activityDuration: 2 },
                { day: "شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "شنبه", activity: "ادبیات (نظم و نثر)", activityDuration: 2 },
                { day: "شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "شنبه", activity: "فلسفه (منطق صوری)", activityDuration: 1.5 },
                { day: "شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "شنبه", activity: "زبان انگلیسی", activityDuration: 1 },

                // یکشنبه
                { day: "یکشنبه", activity: "جامعه‌شناسی (نظریه‌ها)", activityDuration: 2 },
                { day: "یکشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "یکشنبه", activity: "جغرافیا (انسان‌شناسی)", activityDuration: 2 },
                { day: "یکشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "یکشنبه", activity: "روانشناسی (رشد)", activityDuration: 1.5 },
                { day: "یکشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "یکشنبه", activity: "هنر (تاریخ هنر)", activityDuration: 1 },

                // دوشنبه
                { day: "دوشنبه", activity: "اقتصاد (کلان)", activityDuration: 2 },
                { day: "دوشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "دوشنبه", activity: "عربی (ترجمه تخصصی)", activityDuration: 2 },
                { day: "دوشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "دوشنبه", activity: "علوم اجتماعی", activityDuration: 1.5 },
                { day: "دوشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "دوشنبه", activity: "ورزش", activityDuration: 1 },

                // سه‌شنبه
                { day: "سه‌شنبه", activity: "ریاضی انسانی", activityDuration: 2 },
                { day: "سه‌شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "سه‌شنبه", activity: "دین و زندگی (تفسیر)", activityDuration: 2 },
                { day: "سه‌شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "سه‌شنبه", activity: "آمار و احتمال", activityDuration: 1.5 },
                { day: "سه‌شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "سه‌شنبه", activity: "مطالعات رسانه", activityDuration: 1 },

                // چهارشنبه
                { day: "چهارشنبه", activity: "تاریخ ادبیات", activityDuration: 2 },
                { day: "چهارشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "چهارشنبه", activity: "منطق (قیاس)", activityDuration: 2 },
                { day: "چهارشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "چهارشنبه", activity: "جغرافیا (GIS)", activityDuration: 1.5 },
                { day: "چهارشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "چهارشنبه", activity: "پروژه تحقیقاتی", activityDuration: 1 }
            ]
        }, tajrobi: {
            twoH: [
                // شنبه
                { day: "شنبه", activity: "زیست شناسی (فیزیولوژی)", activityDuration: 1 },
                { day: "شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "شنبه", activity: "شیمی (محاسبات)", activityDuration: 1 },

                // یکشنبه
                { day: "یکشنبه", activity: "فیزیک (الکتریسیته)", activityDuration: 1 },
                { day: "یکشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "یکشنبه", activity: "ریاضی (هندسه)", activityDuration: 1 },

                // دوشنبه
                { day: "دوشنبه", activity: "زیست (ژنتیک)", activityDuration: 1 },
                { day: "دوشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "دوشنبه", activity: "زبان انگلیسی", activityDuration: 1 },

                // سه‌شنبه
                { day: "سه‌شنبه", activity: "شیمی (استوکیومتری)", activityDuration: 1 },
                { day: "سه‌شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "سه‌شنبه", activity: "دین و زندگی", activityDuration: 1 },

                // چهارشنبه
                { day: "چهارشنبه", activity: "فیزیک (حرکت شناسی)", activityDuration: 1 },
                { day: "چهارشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "چهارشنبه", activity: "آزمایشگاه علوم", activityDuration: 1 }],
            fourH: [
                { day: "شنبه", activity: "زیست شناسی (فیزیولوژی)", activityDuration: 1.5 },
                { day: "شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "شنبه", activity: "شیمی (محاسبات)", activityDuration: 1.5 },
                { day: "شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "شنبه", activity: "ریاضی (مثلثات)", activityDuration: 1 },

                // یکشنبه
                { day: "یکشنبه", activity: "فیزیک (الکتریسیته)", activityDuration: 1.5 },
                { day: "یکشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "یکشنبه", activity: "زیست (ژنتیک)", activityDuration: 1.5 },
                { day: "یکشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "یکشنبه", activity: "زبان انگلیسی", activityDuration: 1 },

                // دوشنبه
                { day: "دوشنبه", activity: "شیمی (استوکیومتری)", activityDuration: 1.5 },
                { day: "دوشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "دوشنبه", activity: "فیزیک (حرکت شناسی)", activityDuration: 1.5 },
                { day: "دوشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "دوشنبه", activity: "آزمایشگاه علوم", activityDuration: 1 },

                // سه‌شنبه
                { day: "سه‌شنبه", activity: "زیست (بیوشیمی)", activityDuration: 1.5 },
                { day: "سه‌شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "سه‌شنبه", activity: "ریاضی (جبر و احتمال)", activityDuration: 1.5 },
                { day: "سه‌شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "سه‌شنبه", activity: "دین و زندگی", activityDuration: 1 },

                // چهارشنبه
                { day: "چهارشنبه", activity: "شیمی (ترمودینامیک)", activityDuration: 1.5 },
                { day: "چهارشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "چهارشنبه", activity: "زیست (بوم شناسی)", activityDuration: 1.5 },
                { day: "چهارشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "چهارشنبه", activity: "جامعه شناسی", activityDuration: 1 }
            ], sixH: [
                // شنبه
                { day: "شنبه", activity: "زیست شناسی (فیزیولوژی و آناتومی)", activityDuration: 2 },
                { day: "شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "شنبه", activity: "شیمی (محاسبات و استوکیومتری)", activityDuration: 2 },
                { day: "شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "شنبه", activity: "فیزیک (الکتریسیته و مدارها)", activityDuration: 1.5 },
                { day: "شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "شنبه", activity: "زبان انگلیسی (درک مطلب)", activityDuration: 1 },

                // یکشنبه
                { day: "یکشنبه", activity: "زیست شناسی (ژنتیک و بیوتکنولوژی)", activityDuration: 2 },
                { day: "یکشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "یکشنبه", activity: "ریاضی (مثلثات و توابع)", activityDuration: 2 },
                { day: "یکشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "یکشنبه", activity: "شیمی (ترمودینامیک)", activityDuration: 1.5 },
                { day: "یکشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "یکشنبه", activity: "دین و زندگی (تفسیر آیات)", activityDuration: 1 },

                // دوشنبه
                { day: "دوشنبه", activity: "فیزیک (نور و اپتیک)", activityDuration: 2 },
                { day: "دوشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "دوشنبه", activity: "زیست شناسی (بوم شناسی و تکامل)", activityDuration: 2 },
                { day: "دوشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "دوشنبه", activity: "آزمایشگاه علوم (عملی)", activityDuration: 1.5 },
                { day: "دوشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "دوشنبه", activity: "ادبیات (آرایه های ادبی)", activityDuration: 1 },

                // سه‌شنبه
                { day: "سه‌شنبه", activity: "شیمی (اسید و باز)", activityDuration: 2 },
                { day: "سه‌شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "سه‌شنبه", activity: "ریاضی (احتمال و آمار)", activityDuration: 2 },
                { day: "سه‌شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "سه‌شنبه", activity: "زیست (دستگاه های بدن)", activityDuration: 1.5 },
                { day: "سه‌شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "سه‌شنبه", activity: "عربی (ترجمه و قواعد)", activityDuration: 1 },

                // چهارشنبه
                { day: "چهارشنبه", activity: "فیزیک (فیزیک اتمی)", activityDuration: 2 },
                { day: "چهارشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "چهارشنبه", activity: "شیمی (الکتروشیمی)", activityDuration: 2 },
                { day: "چهارشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "چهارشنبه", activity: "زیست (پروتئین سازی)", activityDuration: 1.5 },
                { day: "چهارشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "چهارشنبه", activity: "ورزش و سلامت", activityDuration: 1 }]
        },
        riyazi: {
            twoH: [
                { day: "شنبه", activity: "ریاضیات (حسابان)", activityDuration: 1 },
                { day: "شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "شنبه", activity: "فیزیک (حرکت شناسی)", activityDuration: 1 },

                // یکشنبه
                { day: "یکشنبه", activity: "هندسه (ترسیمات هندسی)", activityDuration: 1 },
                { day: "یکشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "یکشنبه", activity: "شیمی (مفاهیم پایه)", activityDuration: 1 },

                // دوشنبه
                { day: "دوشنبه", activity: "جبر و احتمال", activityDuration: 1 },
                { day: "دوشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "دوشنبه", activity: "زبان انگلیسی", activityDuration: 1 },

                // سه‌شنبه
                { day: "سه‌شنبه", activity: "ریاضیات گسسته", activityDuration: 1 },
                { day: "سه‌شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "سه‌شنبه", activity: "دین و زندگی", activityDuration: 1 },

                // چهارشنبه
                { day: "چهارشنبه", activity: "فیزیک (دینامیک)", activityDuration: 1 },
                { day: "چهارشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "چهارشنبه", activity: "آمار و مدلسازی", activityDuration: 1 }
            ], fourH: [
                { day: "شنبه", activity: "حسابان (مثلثات و توابع)", activityDuration: 1.5 },
                { day: "شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "شنبه", activity: "فیزیک (سینماتیک)", activityDuration: 1.5 },
                { day: "شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "شنبه", activity: "هندسه (تحلیلی)", activityDuration: 1 },

                // یکشنبه
                { day: "یکشنبه", activity: "گسسته (گراف و ترکیبیات)", activityDuration: 1.5 },
                { day: "یکشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "یکشنبه", activity: "شیمی (محاسبات)", activityDuration: 1.5 },
                { day: "یکشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "یکشنبه", activity: "زبان انگلیسی", activityDuration: 1 },

                // دوشنبه
                { day: "دوشنبه", activity: "حسابان (مشتق و کاربردها)", activityDuration: 1.5 },
                { day: "دوشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "دوشنبه", activity: "فیزیک (دینامیک)", activityDuration: 1.5 },
                { day: "دوشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "دوشنبه", activity: "آمار و احتمال", activityDuration: 1 },

                // سه‌شنبه
                { day: "سه‌شنبه", activity: "هندسه (فضایی)", activityDuration: 1.5 },
                { day: "سه‌شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "سه‌شنبه", activity: "ریاضیات گسسته", activityDuration: 1.5 },
                { day: "سه‌شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "سه‌شنبه", activity: "دین و زندگی", activityDuration: 1 },

                // چهارشنبه
                { day: "چهارشنبه", activity: "حسابان (انتگرال)", activityDuration: 1.5 },
                { day: "چهارشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "چهارشنبه", activity: "فیزیک (نوسان و موج)", activityDuration: 1.5 },
                { day: "چهارشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "چهارشنبه", activity: "برنامه‌نویسی", activityDuration: 1 }],
            sixH: [
                { day: "شنبه", activity: "حسابان (حد و پیوستگی)", activityDuration: 2 },
                { day: "شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "شنبه", activity: "فیزیک (سینماتیک پیشرفته)", activityDuration: 2 },
                { day: "شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "شنبه", activity: "هندسه تحلیلی (مقاطع مخروطی)", activityDuration: 1.5 },
                { day: "شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "شنبه", activity: "زبان انگلیسی (واژگان تخصصی)", activityDuration: 1 },

                // یکشنبه
                { day: "یکشنبه", activity: "ریاضیات گسسته (گراف‌ها)", activityDuration: 2 },
                { day: "یکشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "یکشنبه", activity: "فیزیک (دینامیک و قوانین نیوتن)", activityDuration: 2 },
                { day: "یکشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "یکشنبه", activity: "شیمی (محاسبات استوکیومتری)", activityDuration: 1.5 },
                { day: "یکشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "یکشنبه", activity: "برنامه‌نویسی (پایتون)", activityDuration: 1 },

                // دوشنبه
                { day: "دوشنبه", activity: "حسابان (مشتق و کاربردهای آن)", activityDuration: 2 },
                { day: "دوشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "دوشنبه", activity: "هندسه فضایی (احجام هندسی)", activityDuration: 2 },
                { day: "دوشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "دوشنبه", activity: "آمار و احتمال (احتمال شرطی)", activityDuration: 1.5 },
                { day: "دوشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "دوشنبه", activity: "معارف اسلامی (تفسیر آیات)", activityDuration: 1 },

                // سه‌شنبه
                { day: "سه‌شنبه", activity: "حسابان (انتگرال نامعین)", activityDuration: 2 },
                { day: "سه‌شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "سه‌شنبه", activity: "فیزیک (کار و انرژی)", activityDuration: 2 },
                { day: "سه‌شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "سه‌شنبه", activity: "جبر خطی (ماتریس‌ها)", activityDuration: 1.5 },
                { day: "سه‌شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "سه‌شنبه", activity: "ادبیات (آرایه‌های ادبی)", activityDuration: 1 },

                // چهارشنبه
                { day: "چهارشنبه", activity: "ریاضیات گسسته (اصل شمول و عدم شمول)", activityDuration: 2 },
                { day: "چهارشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "چهارشنبه", activity: "فیزیک (نوسان و امواج)", activityDuration: 2 },
                { day: "چهارشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "چهارشنبه", activity: "حل مسائل ترکیبی (المپیاد)", activityDuration: 1.5 },
                { day: "چهارشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "چهارشنبه", activity: "زبان عربی (ترجمه متون)", activityDuration: 1 }
            ]
        }
    }
};
export { studyPlan }

