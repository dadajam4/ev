import EV from './EV';
/**
 * Any tag can be set for the listener. (Registration of objects as well as character strings is also possible)
 * By setting this tag when registering a listener with [[EV.on]] or [[EV.once]]
 * With [[EV.off]] you can release related listeners at once.
 */
export declare type EVListenerTag = number | string | Symbol | Object;
declare type EVStackRemover = (stack: EVListener) => void;
export default class EVListener {
    readonly context: EV;
    readonly type: string | null | undefined;
    readonly tag?: EVListenerTag;
    readonly handler: Function;
    readonly once: boolean;
    constructor({ context, remover, type, tag, handler, once, }: {
        context: EV;
        remover: EVStackRemover;
        type: string;
        tag?: EVListenerTag;
        handler: Function;
        once: boolean;
    });
    /**
     * Remove this instance from parent context.
     */
    remove(): void;
    /**
     * Check match condition by type or handler or tag.
     * @param type
     * @param handler
     * @param tag
     */
    match(type?: string | null, handler?: Function, tag?: EVListenerTag): boolean;
    /**
     * Trigger this listener.
     * @param params
     */
    trigger(params?: any): void;
    private _remover;
}
export {};
