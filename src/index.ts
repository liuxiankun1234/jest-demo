import { add } from './util/index'
import { Device } from '@ireader/core-lib'
export default class Logger {
    public os: string
    constructor () {
        this.init()
    }

    init () {
        console.log('Device------------->', Object.keys(Device))
        // this.os = Device.isAndroid() ? 'android' : 'ios'
        this.os = 'android'
    }
}