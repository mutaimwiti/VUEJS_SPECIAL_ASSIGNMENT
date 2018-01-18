import { categoryActions } from './category';
import {itemActions} from "./item";

export const actions = Object.assign(
    {}, categoryActions, itemActions
);
