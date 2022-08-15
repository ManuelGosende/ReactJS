export const todoReducer = ( initalState = [], action ) => {
    switch (action.type) {
        case 'ABC':
            throw new Error('Error');
            return initalState;
    
        default:
            return initalState;
    }
}