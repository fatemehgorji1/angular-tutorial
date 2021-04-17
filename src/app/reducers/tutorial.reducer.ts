import { Action } from '@ngrx/store';
import { Tutorial } from '../models/tutorial.model';
import  {AddTutorial} from '../action/tutorial.action';

// Section 1
const initialState: Tutorial = {
    name: 'Initial Tutorial',
    url: 'http://google.com'
}
export function reducer(state: Tutorial[] = [initialState], action: AddTutorial) {

    // Section 3
    switch (action.type) {
        case '[TUTORIAL] Add':
            return [...state, action.payload];

        default:
            return state;
    }

}
