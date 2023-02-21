import { combineReducers } from "@reduxjs/toolkit";

import category from './category';
import publisher from './publisher';
import customer from './customer';
import review from './review';
import author from './author';
import book from './book';


export default combineReducers({category,publisher,customer,review,author,book})