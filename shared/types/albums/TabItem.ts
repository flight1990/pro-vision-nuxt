import type {Component} from "vue";

export type TabItem = {
    title: string;
    value: 'upload' | 'photos' | 'settings';
    component: Component;
}