const initialState = {
    name:'',
    level:'', //beginner, intermediate, advanced
    workoutDays: [], //1 - 0
    myWorkouts: [],
    lastWorkout:'', //ID
    dailyProgress:['2021-04-28', '2021-04-27']
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'SET_NAME':
            return {...state, name:action.payload.name};
            break;
    }

    return state;
}