import Vue from 'vue'
import {eventHub} from './plugins/eventHub'

declare module 'vue/types/vue' {
    interface Vue {
        $eventHub: {
            on: (event: string | string[], callback: any) => Vue;
            emit: (event: string, ...args: any[]) => Vue;
            off: (event?: string | string[], callback?: any) => Vue;
            once: (event: string | string[], callback: any) => Vue;
        };
    }
}
