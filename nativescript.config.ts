import { NativeScriptConfig } from '@nativescript/core'

export default {
  id: 'org.nativescript.app',
  appResourcesPath: 'app/App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none',
    id: 'com.seachange.tracker',
  },
  ios: {
    id: 'com.seachange.tracker',
  },
  appPath: 'app',
} as NativeScriptConfig
