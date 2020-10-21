import {EXPAND_MAINVIEW,COLLAPSE_MAINVIEW,EXPAND_REQUESTVIEW,COLLAPSE_REQUESTVIEW} from '../types/general'

const onExpandView = (data)=>({
    type: EXPAND_MAINVIEW,
    payload: data
})

const onCollapseView = ()=>({
    type: COLLAPSE_MAINVIEW
})

const onExpandReqView = ()=>({
    type: EXPAND_REQUESTVIEW,
})

const onCollapseReqView = ()=>({
    type: COLLAPSE_REQUESTVIEW
})


export default {onExpandView,onCollapseView,onExpandReqView,onCollapseReqView}