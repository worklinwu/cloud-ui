import ListView from 'u-list-view.vue';
import Tablet from '../u-tablet.vue';

/**
 * @class Tablets
 * @extends ListView
 * @param {Array}               props.data                      Pass a data list and don't need to loop tags manually
 * @param {any}                 props.value                     Value of selected item
 * @param {boolean=false}       props.cancelable                Select twice to cancel
 * @param {boolean=false}       props.readonly                  Readonly
 * @param {boolean=false}       props.disabled                  Disabled
 */
const Tablets = ListView.extend({
    name: 'u-tablets',
    data() {
        return {
            ChildComponent: Tablet,
        };
    },
    /**
     * @method select(item) - Select a item
     * @public
     * @param  {number} item - Item to select
     * @return {void}
     */
    /**
     * @event select - Emit when selecting an item
     * @property {number} selectedItem - The selected item
     */
});

export default Tablets;
