import { combineReducers } from "redux";
// import { reducer as formReducer } from 'formik'
import { reducer as toastrReducer } from 'react-redux-toastr'

// import TabReducer from '../common/tab/tabReducer'
// import PessoaReducer from '../pessoas/pessoaReducer'

const rootReducer = combineReducers({
    // tab: TabReducer,
    // pessoa: PessoaReducer,
    // form: formReducer,
    toastr: toastrReducer,
})

export default rootReducer