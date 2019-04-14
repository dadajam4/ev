import EVListener, { EVListenerTag } from './EVListener';
/**
 * This is the default event map.
 */
export interface EVEventMap {
    [key: string]: any;
}
/**
 * The context class for event operations.<br>
 * You can use as it is or inherit any classes in this class.<br>
 * <pre><code>const dv = new EV();
 * // or...
 * class SomeClass extends EV {}
 * </code></pre>
 * When using it with TypeScript, it is possible to strictly set type information by specifying an interface in Generics.<br>
 * <pre><code>class SomeClass extends EV<{event1: string, event2: boolean}> {
 *   constructor() {
 *     super();
 *     this.emit('event1', 5); // ng
 *     this.emit('event1', 'string'); // ok
 *     this.on('event2', event => {
 *       const var1: string = event; // ng
 *       const var2: boolean = event; // ok
 *     });
 *   }
 * }</code></pre>
 */
export default class EV<EventMap extends EVEventMap = EVEventMap> {
    /**
     * Create and return listener instance by type, handler.
     * @param type
     * @param handler
     */
    on<K extends keyof EventMap>(type: K, handler: (ev: EventMap[K]) => any): EVListener;
    /**
     * Create and return listener instance by type, handler, option.
     * @param type
     * @param handler
     * @param option
     */
    on<K extends keyof EventMap>(type: K, handler: (ev: EventMap[K]) => any, option?: {
        tag?: EVListenerTag;
        once?: boolean;
    }): EVListener;
    /**
     * Create and return listener instance by type, handler, option.
     * @param type
     * @param handler
     * @param option
     */
    on<K extends keyof EventMap>(type: K, handler: (ev: EventMap[K]) => any, option?: {
        tag?: EVListenerTag;
        once?: boolean;
    }): EVListener;
    /**
     * Create and return listener instance by type, handler, once.
     * @param type
     * @param handler
     * @param option
     * @param once
     */
    on<K extends keyof EventMap>(type: K, handler: (ev: EventMap[K]) => any, option?: {
        tag?: EVListenerTag;
    }, once?: boolean): EVListener;
    /**
     * Create and return listener instance by type, option.
     * @param type
     * @param option
     */
    on<K extends keyof EventMap>(type: K, option?: {
        handler: ((ev: EventMap[K]) => any);
        tag?: EVListenerTag;
        once?: boolean;
    }): EVListener;
    /**
     * Create and return listener instance by option.
     * @param option
     */
    on<K extends keyof EventMap>(option: {
        type: K;
        handler: (ev: EventMap[K]) => any;
        tag?: EVListenerTag;
        once?: boolean;
    }): EVListener;
    /**
     * Create and return listener instance by type, handler.
     * This listener is deleted when it detects an event only once.
     * @param type
     * @param handler
     */
    once<K extends keyof EventMap>(type: K, handler: (ev: EventMap[K]) => any): EVListener;
    /**
     * Create and return listener instance by type, handler, option.
     * This listener is deleted when it detects an event only once.
     * @param type
     * @param handler
     * @param option
     */
    once<K extends keyof EventMap>(type: K, handler: (ev: EventMap[K]) => any, option: {
        tag?: EVListenerTag;
    }): EVListener;
    /**
     * Create and return listener instance by type, option.
     * This listener is deleted when it detects an event only once.
     * @param type
     * @param option
     */
    once<K extends keyof EventMap>(type: K, option: {
        handler: ((ev: EventMap[K]) => any);
        tag?: EVListenerTag;
    }): EVListener;
    /**
     * Create and return listener instance by option.
     * This listener is deleted when it detects an event only once.
     * @param option
     */
    once<K extends keyof EventMap>(option: {
        type: K;
        handler: (ev: EventMap[K]) => any;
        tag?: EVListenerTag;
    }): EVListener;
    /**
     * Create and return listener instance by type, handler. This will be done immediately.
     * When registering this hook, do not expect the payload to be passed to the callback method.
     * @param type
     * @param handler
     */
    immediate<K extends keyof EventMap>(type: K, handler: () => any, option?: {
        tag?: EVListenerTag;
    }): EVListener;
    /**
     * Remove listener by type
     * @param type
     */
    off<K extends keyof EventMap>(type: K): void;
    /**
     * Remove listener by type and handler.
     * @param type
     * @param handler
     */
    off<K extends keyof EventMap>(type: K, handler: (ev: EventMap[K]) => any): void;
    /**
     * Remove listener by type and option.
     * @param type
     * @param option
     */
    off<K extends keyof EventMap>(type: K, option: {
        handler?: (ev: EventMap[K]) => any;
        tag?: EVListenerTag;
    }): void;
    /**
     * Remove listener by handler.
     * @param handler
     */
    off<K extends keyof EventMap>(handler: (ev: EventMap[K]) => any): void;
    /**
     * Remove listener by option(tag, handler, tag).
     * @param option
     */
    off<K extends keyof EventMap>(option: {
        type?: K;
        handler?: (ev: EventMap[K]) => any;
        tag?: EVListenerTag;
    }): void;
    /**
     * Remove all listener instances.
     */
    offAll(): void;
    /**
     * Emit event.
     * @param type
     * @param payload
     */
    emit<K extends keyof EventMap>(type: K, payload: EventMap[K]): void;
    private __ev_listeners__;
    private __ev_listener_remover__;
    private __ev_filter__;
}
