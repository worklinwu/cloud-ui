import format from 'date-fns/format';
import parse from 'date-fns/parse';

import Picker from '../u-picker.vue';
import pickerInput from '../u-picker.vue/input/u-picker-input.vue';
import pickPanel from '../u-picker.vue/panel/u-panel-control.vue';
import { inDateRange, _isDate, validateDateRange, dateValidadtor, setDateTime, getValidDate } from '../u-picker.vue/panel/date';

// | time | String, Number | `start` | 设置返回的日期的时分秒值，可选值为start:时分秒是0:00:00,morning:时分秒为8:00:00,end:表示时分秒为: 23:59:59, 输入整数表示对应的整数时刻，例如输入9代表时分秒为9:00:00,自定义时分秒请输入对应格式的字符串即可 |

export default {
    name: 'u-date-picker',
    extends: Picker,
    components: {
        'u-custom-picker-input': pickerInput,
        'u-custom-panel': pickPanel,
    },
    props: {
        placeholder: { type: String, default: '请选择日期' },
        type: { type: String, default: 'date', validator: (value) => ['year', 'month', 'date'].includes(value) },
        formatter: { type: String, default: 'YYYY-MM-DD', validator: (value) => dateValidadtor(format(new Date(), value)) },
        time: { type: [String, Number], default: 'start', validator(value) {
            if (['start', 'morning', 'end'].includes(value))
                return true;
            const nvalue = +value;
            if (!isNaN(value) && nvalue >= 0 && nvalue < 24)
                return true;

            if (!/^[0-9]{1,2}:[0-9]{1,2}:[0-9]{1,2}$/.test(value))
                throw new Error('invalid props time');
            return true;
        },
        },
    },
    watch: {
        type(value) {
            this.initFormatter();
            this.initPanelControl();
        },
    },
    methods: {
        initCurrentValue(value) {
            this.currentValue = getValidDate(value);
        },
        inDateRange,
        validateRange: validateDateRange,
        validateData() {
            const tempDateRange = (this.dateRange || []).concat([]);
            this.validateRange && this.validateRange(tempDateRange, this.minDate, this.maxDate);
            this.currentDateRange = tempDateRange;
            if (!this.inDateRange(this.currentValue, this.currentDateRange))
                throw new RangeError('initital date is out of dateRange');
        },
        // date面板和time面板的跳转控制
        initFormatter() {
            let res;
            switch (this.type) {
                case 'year':
                    res = /^(Y)+$/.exec(this.currentFormatter);
                    this.currentFormatter = res && _isDate(parse(new Date(), res[0])) ? res[0] : 'YYYY';
                    break;
                case 'month':
                    res = /^(Y+[^a-zA-Z]M+)$/.exec(this.currentFormatter);
                    this.currentFormatter = res && _isDate(parse(new Date(), res[0])) ? res[0] : 'YYYY-MM';
                    break;
                case 'date':
                    res = /^(Y+[^a-zA-Z]M+[^a-zA-Z]D+)$/.exec(this.currentFormatter);
                    this.currentFormatter = res && _isDate(parse(new Date(), res[0])) ? res[0] : 'YYYY-MM-DD';
                    break;
            }

            this.inputValue = _isDate(this.currentValue) ? format(this.currentValue, this.currentFormatter) : undefined;
        },
        initPanelControl() {
            this.blockPanel = {};
            if (!/(Y)+/.exec(this.currentFormatter))
                this.blockPanel.year = true;
            else
                this.panelView = 'customYear';
            if (!/(M)+/.exec(this.currentFormatter))
                this.blockPanel.month = true;
            else
                this.panelView = 'customMonth';
            if (!/(D)+/.exec(this.currentFormatter))
                this.blockPanel.day = true;
            else
                this.panelView = 'customDay'; // 面板显示优先级： day > month > year
        },
        onPanelDateSelect(event) {
            if (this.disabled || this.readonly)
                return;
            let cancel = false;
            this.$emit('before-select', {
                preventDefault: () => cancel = true,
            });

            if (cancel)
                return;

            this.currentValue = event.value;
            const value = this.setDateTime(event.value);
            this.$emit('select', {
                value,
                oldValue: this.setDateTime(event.oldValue),
                formattedValue: format(value, this.currentFormatter),
            });
            this.closePanel();
        },
        setDateTime(date) {
            return setDateTime(date, this.time);
        },
    },
};
