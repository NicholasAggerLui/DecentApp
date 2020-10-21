import {EXPAND_VIEW,COLLAPSE_VIEW} from '../types/rates'

const onExpandView = (data)=>({
    type: EXPAND_VIEW,
    payload: data
})

const onCollapseView = ()=>({
    type: COLLAPSE_VIEW
})

export default {onExpandView,onCollapseView}