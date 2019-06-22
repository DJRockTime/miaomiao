const state = {
    nm: window.localStorage.getItem('nowNm') || '北京',
    id: window.localStorage.getItem('nowId') || '1'
}

const actions = {

}

const mutations = {
    CITY_INFO(state, playoad) {
        state.nm = playoad.nm
        state.id = playoad.id
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}