import { TaglineType } from '../Types'

const TOGGLE_IS_MENU_OPEN: string = 'TOGGLE_IS_MENU_OPEN'

type initialStateType = {
    media: number | null
    tagline: Array<TaglineType>
    isMenuOpen: boolean
}

let initialState: initialStateType = {
    media: null,
    tagline: [
        {
            id: 1,
            string1: 'мы',
            string2: '1',
            string3: 'на рынке'
        },
        {
            id: 2,
            string1: 'гарантируем',
            string2: '50%',
            string3: 'безопасность'
        },
        {
            id: 3,
            string1: 'календарик',
            string2: '2001г',
            string3: 'в подарок'
        },
        {
            id: 4,
            string1: 'путешествие',
            string2: '597',
            string3: 'дней'
        }
    ],
    isMenuOpen: false
}

const appReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case TOGGLE_IS_MENU_OPEN:
            return {
                ...state, isMenuOpen: !state.isMenuOpen
            }
        default:
            return state
    }
}

type toggleIsOpenMenuType = {
    type: typeof TOGGLE_IS_MENU_OPEN
}
export const toggleIsOpenMenu = (): toggleIsOpenMenuType => ({ type: TOGGLE_IS_MENU_OPEN })

export default appReducer