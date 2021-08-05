export default interface IHooks {
    register(
        name: string,
        callback: Function,
        weight: number
    ): void;

    call(
        name: string,
        args: any
    ): number
}