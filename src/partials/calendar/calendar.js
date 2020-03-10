$(document).ready(function () {

    let today = new Date(),
        todayMark,
        currentMonth = today.getMonth(),
        currentYear = today.getFullYear(),
        months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентрябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        markArrivalYear = currentYear,
        markArrivalMonth = currentMonth,
        markDepartureYear = currentYear,
        markDepartureMonth = currentMonth,
        markArrivalRow,
        markArrivalСolumn,
        markDepartureRow,
        markDepartureСolumn,
        markArrivalDate,
        markDepartureDate,
        markArrival = 'main__calendar__arrival',
        markDeparture = 'main__calendar__departure',
        markArrivalDay,
        markDepartureDay;

    function daysInMonth(month, year) {
        return new Date(year, month, 0).getDate();
    }

    function showCalendar(month, year) {
        let firstDay = (new Date(year, month)).getDay();
        let date = 1;
        let nextMonth = 1;
        let row = 6;

        $('.main__calendar__item:not(:first-child').remove();

        if (firstDay == 0) {
            firstDay = 7;
        }
        if (firstDay == 6 && daysInMonth(month + 1, year) == 31 || firstDay == 7) {
            row = 7;
        }

        for (let i = 2; i <= row; i++) {
            for (let j = 1; j <= 7; j++) {
                $(`.main__calendar__list:nth-child(${j}`).append('<li class="main__calendar__item"></li>');
                let item = $(`.main__calendar__list:nth-child(${j}) .main__calendar__item:nth-child(${i})`);
                item.css('opacity', '0.9');
                if (i === 2 && j < firstDay) {
                    item.html(String(daysInMonth(month, year) - firstDay + j + 1)).css('opacity', '0.4');
                } else if (date > daysInMonth(month + 1, year)) {
                    item.html(String(nextMonth++)).css('opacity', '0.4');
                } else {
                    if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                        item.addClass('main__calendar__today');
                    } // color today's date
                    item.html(String(date));
                    date++;
                }
            }
        }

        // if mark arrival and departure is set

        if (markArrivalRow) {
            if (markArrivalYear == year) {
                if (markArrivalMonth == month) {
                    $(`.main__calendar__list:nth-child(${markArrivalСolumn}) .main__calendar__item:nth-child(${markArrivalRow})`).addClass(markArrival);
                }
            }
        }
        if (markDepartureRow) {
            if (markDepartureYear == year) {
                if (markDepartureMonth == month) {
                    $(`.main__calendar__list:nth-child(${markDepartureСolumn}) .main__calendar__item:nth-child(${markDepartureRow})`).addClass(markDeparture);
                }
            }
        }

        // set between marks background

        if (markArrivalRow && markDepartureRow) {
            let markBetween;
            let item;
            for (let j = 2; j <= row; j++) {
                for (let i = 1; i <= 7; i++) {
                    item = $(`.main__calendar__list:nth-child(${i}) .main__calendar__item:nth-child(${j})`)
                    if (item.css('opacity') != '0.4') {
                        markBetween = year * 365 + month * daysInMonth(month, year) + i + j * 7;
                        if (markBetween > markArrivalDate && markBetween < markDepartureDate) {
                            if (item.hasClass('main__calendar__today')) {
                                item.removeClass('main__calendar__today');
                            }
                            item.addClass('mark-between');
                            if (row == 7) {
                                $('.mark-between').addClass('mark-between--small');
                            }

                            if (markBetween < (markDepartureDate -  j)) {
                                if (row == 7) {
                                    $('.mark-between').css('height', '34px').css('margin-bottom', '0');
                                } else {
                                    $('.mark-between').css('height', '40px').css('margin-bottom', '0');
                                }
                            }
                        }
                    }
                }
            }
        }

        if (row == 7) {
            $('.main__calendar__item').css('line-height', '34px');
            $('.main__calendar__arrival, .main__calendar__departure, .main__calendar__today').addClass('main__calendar__-small');
        }

        // click on li element (item)

        $('.main__calendar__item').click(function () {
            if ($(this).css('opacity') != '0.4') {

                $('.main__calendar__item').removeClass('mark-between');

                if (markArrival == mark) {
                    markArrivalYear = currentYear;
                    markArrivalMonth = currentMonth;
                    markArrivalRow = $(this).index() + 1;
                    markArrivalСolumn = $(this).parent().index() + 1;
                } else if (markDeparture == mark) {
                    markDepartureYear = currentYear;
                    markDepartureMonth = currentMonth;
                    markDepartureRow = $(this).index() + 1;
                    markDepartureСolumn = $(this).parent().index() + 1;
                }

                // set mark

                if ($(this).index() != 0) {
                    $('.main__calendar__item').removeClass(mark);
                    $(this).addClass(mark);

                    markArrivalDate = markArrivalYear * 365 + markArrivalMonth * daysInMonth(markArrivalMonth, markArrivalYear) + markArrivalСolumn + markArrivalRow * 7;
                    markDepartureDate = markDepartureYear * 365 + markDepartureMonth * daysInMonth(markDepartureMonth, markDepartureYear) + markDepartureСolumn + markDepartureRow * 7;

                    // set between marks background

                    if (markArrivalRow && markDepartureRow) {
                        let markBetween;
                        let item;

                        for (let j = 2; j <= row; j++) {
                            for (let i = 1; i <= 7; i++) {
                                item = $(`.main__calendar__list:nth-child(${i}) .main__calendar__item:nth-child(${j})`);
                                item.removeClass('main__calendar__-small');
                                if (row == 7) {
                                    item.css('height', '38px').css('margin-bottom', '-4px');
                                } else {
                                    item.css('height', '45px').css('margin-bottom', '-5px');
                                }
                                if (item.css('opacity') != '0.4') {
                                    markBetween = year * 365 + month * daysInMonth(month, year) + i + j * 7;

                                    if (todayMark == markBetween) {
                                        item.addClass('main__calendar__today');
                                    }

                                    if (markBetween > markArrivalDate && markBetween < markDepartureDate) {
                                        if (item.hasClass('main__calendar__today')) {
                                            item.removeClass('main__calendar__today');
                                            todayMark = markBetween;
                                        }
                                        item.addClass('mark-between');

                                        if (markDepartureRow > j) {
                                            if (row == 7) {
                                                $('.mark-between').css('height', '34px').css('margin-bottom', '0');
                                            } else {
                                                $('.mark-between').css('height', '40px').css('margin-bottom', '0');
                                            }
                                        }
                                    }

                                }
                            }
                        }
                    }

                    if (row == 7) {
                        $('.main__calendar__arrival, .main__calendar__departure, .main__calendar__today').addClass('main__calendar__-small');
                    }
                }

            }

            mark == 'main__calendar__arrival' ? markArrivalDay = $('.main__calendar__arrival').html() : markDepartureDay = $('.main__calendar__departure').html();

        });

    }

    showCalendar(currentMonth, currentYear);


    // current month and year

    $('.main__calendar__header h2').html(months[today.getMonth()] + ' ' + today.getFullYear());

    // click on arrow to change page of calendar

    $('.arrow-right').click(function () {
        ++currentMonth;
        if (currentMonth >= 12) {
            currentMonth = 0;
            ++currentYear;
        }
        $('.main__calendar__header h2').html(months[currentMonth] + ' ' + currentYear);
        showCalendar(currentMonth, currentYear);
    })

    $('.arrow-left').click(function () {
        --currentMonth;
        if (currentMonth <= -1) {
            currentMonth = 11;
            --currentYear;
        }
        $('.main__calendar__header h2').html(months[currentMonth] + ' ' + currentYear);
        showCalendar(currentMonth, currentYear);
    })

});