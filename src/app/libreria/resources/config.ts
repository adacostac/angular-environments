import { InjectionToken } from '@angular/core';
import { Inject } from '@angular/core';

export interface Config {
  apiURL: string;
}
export const ConfigToken = new InjectionToken<Config>('ConfigToken');
//export declare type ConfigToken = @Inject(ConfigToken);
