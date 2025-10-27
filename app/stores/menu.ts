import {defineStore} from "pinia";
import type {Menu} from "#types/Menu";


interface IMenu {
    items: Menu[]
}

export const useMenuStore = defineStore('menu', {
    state: (): IMenu => ({
        items: [
            {
                title: "Home",
                prependIcon: 'mdi-view-dashboard-outline',
                link: true,
                to: {name: 'index'},
            },
            {
                title: "Albums",
                prependIcon: 'mdi-view-dashboard-outline',
                link: true,
                to: {name: 'albums'},
            },
        ]
    })
})