import {create} from 'zustand';
import {getTRDate} from '../utils/general.utils';

const calendarStore = create(set => ({
  selectedCalendarDate: getTRDate(),
  setCalendarDate: selectedCalendarDate => {
    set({selectedCalendarDate});
  },
}));

export default calendarStore;
