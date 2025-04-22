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
            { day: 'پنجشنبه', activity: 'فارسی', activityDuration: 1 },
            { day: 'پنجشنبه', activity: 'استراحت', activityDuration: 0.25 },
            { day: 'پنجشنبه', activity: 'ریاضی', activityDuration: 1 }
        ],
        fourH: [
            { day: 'شنبه', activity: 'فارسی', activityDuration: 1 },
            { day: 'شنبه', activity: 'استراحت', activityDuration: 0.25 },
            { day: 'شنبه', activity: 'ریاضی', activityDuration: 1 },
            { day: 'شنبه', activity: 'استراحت', activityDuration: 0.25 },
            { day: 'شنبه', activity: 'هنر', activityDuration: 1 },
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
            { day: 'سه‌شنبه', activity: 'هنر', activityDuration: 1.5 },
            { day: 'سه‌شنبه', activity: 'استراحت', activityDuration: 0.25 },
            { day: 'سه‌شنبه', activity: 'ریاضی', activityDuration: 1 },
            { day: 'چهارشنبه', activity: 'قرآن', activityDuration: 1 },
            { day: 'چهارشنبه', activity: 'استراحت', activityDuration: 0.25 },
            { day: 'چهارشنبه', activity: 'علوم تجربی', activityDuration: 1 },
            { day: 'چهارشنبه', activity: 'استراحت', activityDuration: 0.25 },
            { day: 'چهارشنبه', activity: 'مطالعات اجتماعی', activityDuration: 1 },
            { day: 'چهارشنبه', activity: 'استراحت', activityDuration: 0.25 },
            { day: 'چهارشنبه', activity: 'قرآن', activityDuration: 1 },
            { day: 'پنجشنبه', activity: 'ریاضی', activityDuration: 1 },
            { day: 'پنجشنبه', activity: 'استراحت', activityDuration: 0.25 },
            { day: 'پنجشنبه', activity: 'علوم تجربی', activityDuration: 1 },
            { day: 'پنجشنبه', activity: 'استراحت', activityDuration: 0.25 },
            { day: 'پنجشنبه', activity: 'فارسی', activityDuration: 1 },
            { day: 'پنجشنبه', activity: 'استراحت', activityDuration: 0.25 },
            { day: 'پنجشنبه', activity: 'هنر', activityDuration: 1 }
        ], sixH: [
            { day: "شنبه", activity: "فارسی ", activityDuration: 1 },
            { day: "شنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "شنبه", activity: "ریاضی ", activityDuration: 1 },
            { day: "شنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "شنبه", activity: "هنر ", activityDuration: 1 },
            { day: "شنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "شنبه", activity: "علوم تجربی ", activityDuration: 1 },
            { day: "یکشنبه", activity: "ریاضی ", activityDuration: 1 },
            { day: "یکشنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "یکشنبه", activity: "فارسی ", activityDuration: 1 },
            { day: "یکشنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "یکشنبه", activity: "علوم تجربی ", activityDuration: 1 },
            { day: "یکشنبه", activity: "مطالعات اجتماعی", activityDuration: 1 },
            { day: "دوشنبه", activity: "علوم تجربی ", activityDuration: 1 },
            { day: "دوشنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "دوشنبه", activity: "مطالعات اجتماعی ", activityDuration: 1 },
            { day: "دوشنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "دوشنبه", activity: "دیکته و املاء", activityDuration: 1 },
            { day: "دوشنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "دوشنبه", activity: "فارسی ", activityDuration: 1 },
            { day: "سه‌شنبه", activity: "مطالعات اجتماعی", activityDuration: 1 },
            { day: "سه‌شنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "سه‌شنبه", activity: "قرآن ", activityDuration: 1 },
            { day: "سه‌شنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "سه‌شنبه", activity: "هنر ", activityDuration: 1.5 },
            { day: "سه‌شنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "سه‌شنبه", activity: "ریاضی ", activityDuration: 1 },
            { day: "چهارشنبه", activity: "قرآن ", activityDuration: 1 },
            { day: "چهارشنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "چهارشنبه", activity: "علوم تجربی ", activityDuration: 1 },
            { day: "چهارشنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "چهارشنبه", activity: "مطالعات اجتماعی", activityDuration: 1 },
            { day: "چهارشنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "چهارشنبه", activity: "قرآن ", activityDuration: 1 },
            { day: "پنجشنبه", activity: "فارسی", activityDuration: 1 },
            { day: "پنجشنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "پنجشنبه", activity: "ریاضی", activityDuration: 1 },
            { day: "پنجشنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "پنجشنبه", activity: "علوم تجربی", activityDuration: 1 },
            { day: "پنجشنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "پنجشنبه", activity: "مطالعات اجتماعی", activityDuration: 1 },
            { day: "پنجشنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "پنجشنبه", activity: "قرآن", activityDuration: 1 },
            { day: "پنجشنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "پنجشنبه", activity: "هنر", activityDuration: 1 }
        ]
    }, rahnamayi: {
        twoH: [
            { day: "شنبه", activity: "ریاضی", activityDuration: 1 },
            { day: "شنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "شنبه", activity: "فارسی ", activityDuration: 1 },
            { day: "یکشنبه", activity: "فارسی", activityDuration: 1 },
            { day: "یکشنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "یکشنبه", activity: "ریاضی ", activityDuration: 1 },
            { day: "دوشنبه", activity: "علوم تجربی", activityDuration: 1 },
            { day: "دوشنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "دوشنبه", activity: "مطالعات اجتماعی", activityDuration: 1 },
            { day: "سه‌شنبه", activity: "قرآن ", activityDuration: 1 },
            { day: "سه‌شنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "سه‌شنبه", activity: "هنر ", activityDuration: 1 },
            { day: "چهارشنبه", activity: "مطالعات اجتماعی", activityDuration: 1 },
            { day: "چهارشنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "چهارشنبه", activity: "علوم تجربی", activityDuration: 1 },
            { day: "پنجشنبه", activity: "ریاضی", activityDuration: 1 },
            { day: "پنجشنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "پنجشنبه", activity: "علوم تجربی", activityDuration: 1 }
        ], fourH: [
            { day: "شنبه", activity: "ریاضی", activityDuration: 1 },
            { day: "شنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "شنبه", activity: "فارسی ", activityDuration: 1 },
            { day: "شنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "شنبه", activity: "علوم تجربی ", activityDuration: 1 },
            { day: "شنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "شنبه", activity: "قرآن ", activityDuration: 1 },
            { day: "یکشنبه", activity: "فارسی", activityDuration: 1 },
            { day: "یکشنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "یکشنبه", activity: "ریاضی ", activityDuration: 1 },
            { day: "یکشنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "یکشنبه", activity: "مطالعات اجتماعی ", activityDuration: 1 },
            { day: "یکشنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "یکشنبه", activity: "علوم تجربی ", activityDuration: 1 },
            { day: "دوشنبه", activity: "علوم تجربی", activityDuration: 1 },
            { day: "دوشنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "دوشنبه", activity: "مطالعات اجتماعی", activityDuration: 1 },
            { day: "دوشنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "دوشنبه", activity: "ریاضی ", activityDuration: 1 },
            { day: "دوشنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "دوشنبه", activity: "هنر ", activityDuration: 1 },
            { day: "سه‌شنبه", activity: "قرآن", activityDuration: 1 },
            { day: "سه‌شنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "سه‌شنبه", activity: "هنر ", activityDuration: 1 },
            { day: "سه‌شنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "سه‌شنبه", activity: "ریاضی", activityDuration: 1 },
            { day: "سه‌شنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "سه‌شنبه", activity: "مطالعات اجتماعی", activityDuration: 1 },
            { day: "چهارشنبه", activity: "قرآن ", activityDuration: 1 },
            { day: "چهارشنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "چهارشنبه", activity: "علوم تجربی ", activityDuration: 1 },
            { day: "چهارشنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "چهارشنبه", activity: "مطالعات اجتماعی", activityDuration: 1 },
            { day: "پنجشنبه", activity: "ریاضی", activityDuration: 1 },
            { day: "پنجشنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "پنجشنبه", activity: "فارسی", activityDuration: 1 },
            { day: "پنجشنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "پنجشنبه", activity: "علوم تجربی", activityDuration: 1 },
            { day: "پنجشنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "پنجشنبه", activity: "مطالعات اجتماعی", activityDuration: 1 }

        ], sixH: [
            { day: "شنبه", activity: "ریاضی", activityDuration: 1 },
            { day: "شنبه", activity: "فارسی ", activityDuration: 1 },
            { day: "شنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "شنبه", activity: "علوم تجربی ", activityDuration: 1 },
            { day: "شنبه", activity: "قرآن ", activityDuration: 1 },
            { day: "شنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "شنبه", activity: "ریاضی ", activityDuration: 1 },
            { day: "شنبه", activity: "مطالعات اجتماعی", activityDuration: 1 },
            { day: "یکشنبه", activity: "فارسی", activityDuration: 1 },
            { day: "یکشنبه", activity: "ریاضی ", activityDuration: 1 },
            { day: "یکشنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "یکشنبه", activity: "مطالعات اجتماعی ", activityDuration: 1 },
            { day: "یکشنبه", activity: "علوم تجربی ", activityDuration: 1 },
            { day: "یکشنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "یکشنبه", activity: "فارسی ", activityDuration: 1 },
            { day: "یکشنبه", activity: "قرآن ", activityDuration: 1 },
            { day: "دوشنبه", activity: "علوم تجربی", activityDuration: 1 },
            { day: "دوشنبه", activity: "مطالعات اجتماعی", activityDuration: 1 },
            { day: "دوشنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "دوشنبه", activity: "ریاضی ", activityDuration: 1 },
            { day: "دوشنبه", activity: "فارسی ", activityDuration: 1 },
            { day: "دوشنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "دوشنبه", activity: "قرآن ", activityDuration: 1 },
            { day: "دوشنبه", activity: "ریاضی ", activityDuration: 1 },
            { day: "سه‌شنبه", activity: "مطالعات اجتماعی", activityDuration: 1 },
            { day: "سه‌شنبه", activity: "قرآن ", activityDuration: 1 },
            { day: "سه‌شنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "سه‌شنبه", activity: "هنر ", activityDuration: 1 },
            { day: "سه‌شنبه", activity: "ریاضی ", activityDuration: 1 },
            { day: "سه‌شنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "سه‌شنبه", activity: "مطالعات اجتماعی ", activityDuration: 1 },
            { day: "سه‌شنبه", activity: "فارسی ", activityDuration: 1 },
            { day: "چهارشنبه", activity: "قرآن ", activityDuration: 1 },
            { day: "چهارشنبه", activity: "علوم تجربی", activityDuration: 1 },
            { day: "چهارشنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "چهارشنبه", activity: "فارسی ", activityDuration: 1 },
            { day: "چهارشنبه", activity: "مطالعات اجتماعی", activityDuration: 1 },
            { day: "چهارشنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "چهارشنبه", activity: "علوم تجربی ", activityDuration: 1 },
            { day: "چهارشنبه", activity: "هنر ", activityDuration: 1 },
            { day: "پنجشنبه", activity: "ریاضی", activityDuration: 1 },
            { day: "پنجشنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "پنجشنبه", activity: "فارسی", activityDuration: 1 },
            { day: "پنجشنبه", activity: "علوم تجربی", activityDuration: 1 },
            { day: "پنجشنبه", activity: "قرآن", activityDuration: 1 },
            { day: "پنجشنبه", activity: "استراحت", activityDuration: 0.25 },
            { day: "پنجشنبه", activity: "مطالعات اجتماعی", activityDuration: 1 },
            { day: "پنجشنبه", activity: "هنر", activityDuration: 1 }
        ]
    },
    motevaseteTwo: {
        ensani: {
            twoH: [
                { day: "شنبه", activity: "تاریخ ", activityDuration: 1 },
                { day: "شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "شنبه", activity: "ادبیات ", activityDuration: 1 },
                { day: "یکشنبه", activity: "فلسفه و منطق", activityDuration: 1 },
                { day: "یکشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "یکشنبه", activity: "عربی ", activityDuration: 1 },
                { day: "دوشنبه", activity: "جغرافیا ", activityDuration: 1 },
                { day: "دوشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "دوشنبه", activity: "روانشناسی ", activityDuration: 1 },
                { day: "سه‌شنبه", activity: "اقتصاد ", activityDuration: 1 },
                { day: "سه‌شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "سه‌شنبه", activity: "جامعه‌شناسی ", activityDuration: 1 },
                { day: "چهارشنبه", activity: "علوم اجتماعی ", activityDuration: 1 },
                { day: "چهارشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "چهارشنبه", activity: "دین و زندگی ", activityDuration: 1 }],
            fourH: [
                { day: "شنبه", activity: "تاریخ ", activityDuration: 1.5 },
                { day: "شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "شنبه", activity: "ادبیات ", activityDuration: 1.5 },
                { day: "شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "شنبه", activity: "عربی ", activityDuration: 1 },

                // یکشنبه
                { day: "یکشنبه", activity: "فلسفه و منطق", activityDuration: 1.5 },
                { day: "یکشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "یکشنبه", activity: "جغرافیا ", activityDuration: 1.5 },
                { day: "یکشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "یکشنبه", activity: "روانشناسی", activityDuration: 1 },

                // دوشنبه
                { day: "دوشنبه", activity: "اقتصاد ", activityDuration: 1.5 },
                { day: "دوشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "دوشنبه", activity: "جامعه‌شناسی ", activityDuration: 1.5 },
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
                { day: "شنبه", activity: "تاریخ ", activityDuration: 2 },
                { day: "شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "شنبه", activity: "ادبیات ", activityDuration: 2 },
                { day: "شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "شنبه", activity: "فلسفه ", activityDuration: 1.5 },
                { day: "شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "شنبه", activity: "زبان انگلیسی", activityDuration: 1 },

                // یکشنبه
                { day: "یکشنبه", activity: "جامعه‌شناسی ", activityDuration: 2 },
                { day: "یکشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "یکشنبه", activity: "جغرافیا ", activityDuration: 2 },
                { day: "یکشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "یکشنبه", activity: "روانشناسی ", activityDuration: 1.5 },
                { day: "یکشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "یکشنبه", activity: "هنر ", activityDuration: 1 },

                // دوشنبه
                { day: "دوشنبه", activity: "اقتصاد ", activityDuration: 2 },
                { day: "دوشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "دوشنبه", activity: "عربی ", activityDuration: 2 },
                { day: "دوشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "دوشنبه", activity: "علوم اجتماعی", activityDuration: 1.5 },
                { day: "دوشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "دوشنبه", activity: "ورزش", activityDuration: 1 },

                // سه‌شنبه
                { day: "سه‌شنبه", activity: "ریاضی انسانی", activityDuration: 2 },
                { day: "سه‌شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "سه‌شنبه", activity: "دین و زندگی ", activityDuration: 2 },
                { day: "سه‌شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "سه‌شنبه", activity: "آمار و احتمال", activityDuration: 1.5 },
                { day: "سه‌شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "سه‌شنبه", activity: "مطالعات رسانه", activityDuration: 1 },

                // چهارشنبه
                { day: "چهارشنبه", activity: "تاریخ ادبیات", activityDuration: 2 },
                { day: "چهارشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "چهارشنبه", activity: "منطق ", activityDuration: 2 },
                { day: "چهارشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "چهارشنبه", activity: "جغرافیا ", activityDuration: 1.5 },
                { day: "چهارشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "چهارشنبه", activity: "پروژه تحقیقاتی", activityDuration: 1 }
            ]
        }, tajrobi: {
            twoH: [
                // شنبه
                { day: "شنبه", activity: "زیست شناسی ", activityDuration: 1 },
                { day: "شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "شنبه", activity: "شیمی ", activityDuration: 1 },

                // یکشنبه
                { day: "یکشنبه", activity: "فیزیک ", activityDuration: 1 },
                { day: "یکشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "یکشنبه", activity: "ریاضی ", activityDuration: 1 },

                // دوشنبه
                { day: "دوشنبه", activity: "زیست ", activityDuration: 1 },
                { day: "دوشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "دوشنبه", activity: "زبان انگلیسی", activityDuration: 1 },

                // سه‌شنبه
                { day: "سه‌شنبه", activity: "شیمی ", activityDuration: 1 },
                { day: "سه‌شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "سه‌شنبه", activity: "دین و زندگی", activityDuration: 1 },

                // چهارشنبه
                { day: "چهارشنبه", activity: "فیزیک ", activityDuration: 1 },
                { day: "چهارشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "چهارشنبه", activity: "آزمایشگاه علوم", activityDuration: 1 }],
            fourH: [
                { day: "شنبه", activity: "زیست شناسی ", activityDuration: 1.5 },
                { day: "شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "شنبه", activity: "شیمی ", activityDuration: 1.5 },
                { day: "شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "شنبه", activity: "ریاضی ", activityDuration: 1 },

                // یکشنبه
                { day: "یکشنبه", activity: "فیزیک ", activityDuration: 1.5 },
                { day: "یکشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "یکشنبه", activity: "زیست ", activityDuration: 1.5 },
                { day: "یکشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "یکشنبه", activity: "زبان انگلیسی", activityDuration: 1 },

                // دوشنبه
                { day: "دوشنبه", activity: "شیمی ", activityDuration: 1.5 },
                { day: "دوشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "دوشنبه", activity: "فیزیک ", activityDuration: 1.5 },
                { day: "دوشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "دوشنبه", activity: "آزمایشگاه علوم", activityDuration: 1 },

                // سه‌شنبه
                { day: "سه‌شنبه", activity: "زیست ", activityDuration: 1.5 },
                { day: "سه‌شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "سه‌شنبه", activity: "ریاضی ", activityDuration: 1.5 },
                { day: "سه‌شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "سه‌شنبه", activity: "دین و زندگی", activityDuration: 1 },

                // چهارشنبه
                { day: "چهارشنبه", activity: "شیمی ", activityDuration: 1.5 },
                { day: "چهارشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "چهارشنبه", activity: "زیست ", activityDuration: 1.5 },
                { day: "چهارشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "چهارشنبه", activity: "جامعه شناسی", activityDuration: 1 }
            ], sixH: [
                // شنبه
                { day: "شنبه", activity: "زیست شناسی ", activityDuration: 2 },
                { day: "شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "شنبه", activity: "شیمی ", activityDuration: 2 },
                { day: "شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "شنبه", activity: "فیزیک ", activityDuration: 1.5 },
                { day: "شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "شنبه", activity: "زبان انگلیسی ", activityDuration: 1 },

                // یکشنبه
                { day: "یکشنبه", activity: "زیست شناسی ", activityDuration: 2 },
                { day: "یکشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "یکشنبه", activity: "ریاضی ", activityDuration: 2 },
                { day: "یکشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "یکشنبه", activity: "شیمی ", activityDuration: 1.5 },
                { day: "یکشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "یکشنبه", activity: "دین و زندگی ", activityDuration: 1 },

                // دوشنبه
                { day: "دوشنبه", activity: "فیزیک ", activityDuration: 2 },
                { day: "دوشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "دوشنبه", activity: "زیست شناسی ", activityDuration: 2 },
                { day: "دوشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "دوشنبه", activity: "آزمایشگاه علوم ", activityDuration: 1.5 },
                { day: "دوشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "دوشنبه", activity: "ادبیات ", activityDuration: 1 },

                // سه‌شنبه
                { day: "سه‌شنبه", activity: "شیمی ", activityDuration: 2 },
                { day: "سه‌شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "سه‌شنبه", activity: "ریاضی ", activityDuration: 2 },
                { day: "سه‌شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "سه‌شنبه", activity: "زیست ", activityDuration: 1.5 },
                { day: "سه‌شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "سه‌شنبه", activity: "عربی ", activityDuration: 1 },

                // چهارشنبه
                { day: "چهارشنبه", activity: "فیزیک ", activityDuration: 2 },
                { day: "چهارشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "چهارشنبه", activity: "شیمی ", activityDuration: 2 },
                { day: "چهارشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "چهارشنبه", activity: "زیست ", activityDuration: 1.5 },
                { day: "چهارشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "چهارشنبه", activity: "ورزش و سلامت", activityDuration: 1 }]
        },
        riyazi: {
            twoH: [
                { day: "شنبه", activity: "ریاضیات ", activityDuration: 1 },
                { day: "شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "شنبه", activity: "فیزیک ", activityDuration: 1 },

                // یکشنبه
                { day: "یکشنبه", activity: "هندسه ", activityDuration: 1 },
                { day: "یکشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "یکشنبه", activity: "شیمی ", activityDuration: 1 },

                // دوشنبه
                { day: "دوشنبه", activity: "جبر و احتمال", activityDuration: 1 },
                { day: "دوشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "دوشنبه", activity: "زبان انگلیسی", activityDuration: 1 },

                // سه‌شنبه
                { day: "سه‌شنبه", activity: "ریاضیات گسسته", activityDuration: 1 },
                { day: "سه‌شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "سه‌شنبه", activity: "دین و زندگی", activityDuration: 1 },

                // چهارشنبه
                { day: "چهارشنبه", activity: "فیزیک ", activityDuration: 1 },
                { day: "چهارشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "چهارشنبه", activity: "آمار و مدلسازی", activityDuration: 1 }
            ], fourH: [
                { day: "شنبه", activity: "حسابان ", activityDuration: 1.5 },
                { day: "شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "شنبه", activity: "فیزیک ", activityDuration: 1.5 },
                { day: "شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "شنبه", activity: "هندسه ", activityDuration: 1 },

                // یکشنبه
                { day: "یکشنبه", activity: "گسسته ", activityDuration: 1.5 },
                { day: "یکشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "یکشنبه", activity: "شیمی ", activityDuration: 1.5 },
                { day: "یکشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "یکشنبه", activity: "زبان انگلیسی", activityDuration: 1 },

                // دوشنبه
                { day: "دوشنبه", activity: "حسابان ", activityDuration: 1.5 },
                { day: "دوشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "دوشنبه", activity: "فیزیک ", activityDuration: 1.5 },
                { day: "دوشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "دوشنبه", activity: "آمار و احتمال", activityDuration: 1 },

                // سه‌شنبه
                { day: "سه‌شنبه", activity: "هندسه ", activityDuration: 1.5 },
                { day: "سه‌شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "سه‌شنبه", activity: "ریاضیات گسسته", activityDuration: 1.5 },
                { day: "سه‌شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "سه‌شنبه", activity: "دین و زندگی", activityDuration: 1 },

                // چهارشنبه
                { day: "چهارشنبه", activity: "حسابان ", activityDuration: 1.5 },
                { day: "چهارشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "چهارشنبه", activity: "فیزیک ", activityDuration: 1.5 },
                { day: "چهارشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "چهارشنبه", activity: "برنامه‌نویسی", activityDuration: 1 }],
            sixH: [
                { day: "شنبه", activity: "حسابان ", activityDuration: 2 },
                { day: "شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "شنبه", activity: "فیزیک ", activityDuration: 2 },
                { day: "شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "شنبه", activity: "هندسه تحلیلی ", activityDuration: 1.5 },
                { day: "شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "شنبه", activity: "زبان انگلیسی ", activityDuration: 1 },

                // یکشنبه
                { day: "یکشنبه", activity: "ریاضیات گسسته ", activityDuration: 2 },
                { day: "یکشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "یکشنبه", activity: "فیزیک ", activityDuration: 2 },
                { day: "یکشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "یکشنبه", activity: "شیمی ", activityDuration: 1.5 },
                { day: "یکشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "یکشنبه", activity: "برنامه‌نویسی ", activityDuration: 1 },

                // دوشنبه
                { day: "دوشنبه", activity: "حسابان ", activityDuration: 2 },
                { day: "دوشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "دوشنبه", activity: "هندسه فضایی ", activityDuration: 2 },
                { day: "دوشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "دوشنبه", activity: "آمار و احتمال ", activityDuration: 1.5 },
                { day: "دوشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "دوشنبه", activity: "معارف اسلامی ", activityDuration: 1 },

                // سه‌شنبه
                { day: "سه‌شنبه", activity: "حسابان ", activityDuration: 2 },
                { day: "سه‌شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "سه‌شنبه", activity: "فیزیک ", activityDuration: 2 },
                { day: "سه‌شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "سه‌شنبه", activity: "جبر خطی ", activityDuration: 1.5 },
                { day: "سه‌شنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "سه‌شنبه", activity: "ادبیات ", activityDuration: 1 },

                // چهارشنبه
                { day: "چهارشنبه", activity: "ریاضیات گسسته ", activityDuration: 2 },
                { day: "چهارشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "چهارشنبه", activity: "فیزیک ", activityDuration: 2 },
                { day: "چهارشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "چهارشنبه", activity: "حل مسائل ترکیبی ", activityDuration: 1.5 },
                { day: "چهارشنبه", activity: "استراحت", activityDuration: 0.25 },
                { day: "چهارشنبه", activity: "زبان عربی ", activityDuration: 1 }
            ]
        }
    }
};
export { studyPlan }

