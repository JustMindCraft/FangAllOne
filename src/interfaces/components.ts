
export interface IAppProps {
    currentUser:any,
    msg: any, 
    app:any
}

export interface IAppState {
    loadingTime: number,
}

export interface IPageProps {
    history: any,
    currentUser: any,
    msg: any,
    classes: any,
    app:any
}