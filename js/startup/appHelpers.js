const Helpers = {
    lang: function () {
        return document.documentElement.getAttribute('lang');
    },
    country: function () {
        return document.documentElement.getAttribute('data-country');
    },
    loc: function () {
        return document.documentElement.getAttribute('data-locale')
    },
    env: function (env) { 
        return document.documentElement.getAttribute('data-env') == env;
        // return $('html').attr('data-env') == env;
    },
    baseUrl: function () {
        return window.location.origin + '/' +  document.documentElement.getAttribute('data-locale') + '/';
    },
    smartphone: function() {
        // является ли текущее устройство смартфоном
        return document.getElementsByClassName('js-detect-device').getAttribute('data-smartphone') == 'true';
    },
    tablet: function() {
        // является ли текущее устройство планшетом
        // return $('.js-detect-device').attr('data-mobile') == 'true';
        return document.getElementsByClassName('js-detect-device').getAttribute('data-mobile') == 'true';
    },
    mobile: function() {
        // является ли текущее устройство смартфоном ИЛИ планшетом
        // var $wrapContent = $('.js-detect-device');
        // return $wrapContent.attr('data-smartphone') == 'true' || $wrapContent.attr('data-mobile') == 'true';
        return document.getElementsByClassName('js-detect-device').getAttribute('data-smartphone') == 'true' || document.getElementsByClassName('js-detect-device').getAttribute('data-mobile') == 'true';
    }, 
    Messages: {
        success: function (message) {
            Helpers.Messages.msg('Success', message);
        },
        error: function (message) {
            Helpers.Messages.msg('Error', message);
        },
        warning: function (message) {
            Helpers.Messages.msg('Warning', message);
        },
        msg: function (type, msg) {
            if (typeof(window) !== 'undefined') {
                $().toastmessage('show' + type + 'Toast', msg);
            } else {
                return false;
            }
        }
    }
    ,
    timestamp: function () {
        return Math.floor(new Date().getTime() / 1000)
    }, 
    number_format: function (number, decimals, dec_point, thousands_sep) {

        if (decimals > 0) {
            number = parseFloat(number).toFixed(decimals);
        }

        number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
        var n = !isFinite(+number) ? 0 : +number,
            prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
            sep = (typeof thousands_sep == 'undefined') ? ',' : thousands_sep,
            dec = (typeof dec_point == 'undefined') ? '.' : dec_point,
            toFixedFix = function (n, prec) {
                var k = Math.pow(10, prec);
                return '' + (Math.round(n * k) / k).toFixed(prec);
            };

        var s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');

        if (s[0].length > 3) {
            s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
        }

        if ((s[1] || '').length < prec) {
            s[1] = s[1] || '';
            s[1] += new Array(prec - s[1].length + 1)
                .join('0');
        }

        return s.join(dec);
    },
    floatSign: function (val, back, decimals) {
        val = val || '0';
        back = back || false;
        decimals = decimals || 2;

        if (back) {
            return parseFloat(parseFloat((val + ' ').replace(/[\s]+/g, '').replace(/[\,]+/g, '.')).toFixed(decimals));
        } else {
            var sing = Helpers.lang() == 'en' ? '.' : ',';
            return this.number_format(val, decimals, sing, ' ');
        }
    },
    getDate: function (date) {
        var now = new Date(),
            ts = new Date(date),
            delta = now.getTime() - ts.getTime();

        // Считаем секунды
        var seconds = Math.floor(delta / 1000),
            minutes = Math.floor(seconds / 60),
            hours = Math.floor(seconds / 3600),
            days = Math.floor(seconds / 86400),
            years = Math.floor(seconds / 31536000);

        // Устанвливаем локаль
        moment.locale(this.lang());

        // Вывод
        if (
            (hours < 0 && !(hours > 1)) || // Если вчера
            (minutes >= 1 && minutes < 59) || // в минутах
            (hours >= 1 && hours < 23) || // в часах
            (days >= 0 && days < 6) // в днях
        ) {
            return moment(ts).fromNow();
        }

        // Вывод с годом
        if (years > 1) {
            return moment(ts).format('HH:mm D MMMM YYYY');
        }

        // Вывод число месяц
        if (days > 1) {
            return moment(ts).format('HH:mm D MMMM');
        }

        // Вовод только времени
        return moment(ts).format('HH:mm');
    },
    
    // функция для прохода обектов в реакте так как map работает только с масивами
    mapObject: function(object, callback) {
		return Object.keys(object).map(function (key) {
		  return callback(key, object[key]);
		});
	  }
};

export default Helpers