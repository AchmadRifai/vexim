import { defineStore } from "pinia"
import { ref } from "vue"

export const useSession = defineStore('session', () => {
    const token = ref(localStorage.getItem('token'))
    const menus = ref([])
    const roles = ref([''])
    function setToken(newToken) {
        token.value = newToken
    }
    function setMenus(newMenus) {
        menus.value = newMenus
    }
    function setRoles(newRoles) {
        roles.value = newRoles
    }
    return { menus, token, roles, setMenus, setToken, setRoles }
})