import { sideBarShow } from './sideBarReducer'
import { LEFT_SIDEBAR_SHOW, LEFT_SIDEBAR_HIDE } from "../../constants/constants";


describe('checkSideBarReducer', () => {
    test('LEFT_SIDEBAR_HIDE', () => {

        const state = {
            sideBarShow: false,
        }

        expect(sideBarShow(state, LEFT_SIDEBAR_HIDE)).toEqual({sideBarShow: false})
    })



})