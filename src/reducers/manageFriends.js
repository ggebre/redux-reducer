export function manageFriends(state = {friends: []}, action){
    if (action.type == "ADD_FRIEND"){
        return {friends: [...state.friends, action.friend]}
    } else if (action.type == "REMOVE_FRIEND"){
        const filteredFriends = [...state.friends].filter(friend => !(friend.id === action.id))
        
        return {friends: filteredFriends}
    } else {
        return {friends: [...state.friends]}
    }
}
