export interface IMainStateObject {
    active_note: any;
}

export interface IMainState extends IMainStateObject {
    set_state: (title: keyof IMainStateObject, value: any) => void
}