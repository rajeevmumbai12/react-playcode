import { atom } from 'recoil';

const textState = atom({
    key: 'textState', // Unique key for the atom
    default: '', // Initial value of the state
});

export default textState;