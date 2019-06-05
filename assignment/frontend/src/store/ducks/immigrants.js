//ACTION TYPES

export const Types = {
  SEARCHNAME_REQUEST: 'immigrant/SEARCHNAME_REQUEST',
  ADD_SUCCESS: 'immigrant/ADD_SUCCESS',
  ADD_FAILURE: 'immigrant/ADD_FAILURE',
  CLEAR_DATA: 'immigrant/CLEAR_DATA'
};  

//REDUCER

const INITIAL_STATE = {
  error: '',
  data: [],
};

export default function immigrants(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;

    case Types.SEARCHNAME_REQUEST:
      return { ...state, };

    case Types.ADD_SUCCESS:
      return { ...state, error: null, data: [ action.payload.data] };

    case Types.ADD_FAILURE:
      return { ...state, error: action.payload.error };
    
    case Types.CLEAR_DATA:
      return { ...state, data: []};
  }
}

//ACTIONS

export const Creators = {
  searchImmigrantByNameRequest: imm => ({
    type: Types.SEARCHNAME_REQUEST,
    payload: { imm },
  }),

  searchImmigrantSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data },
  }),

  searchImmigrantFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error },
  }),

  clearImmigrantData: () => ({
    type: Types.CLEAR_DATA,
  })
} 
