import { boot } from 'quasar/wrappers';
import { createI18n, I18n } from 'vue-i18n';

import messages from 'src/i18n';

export type MessageLanguages = keyof typeof messages;
// Type-define 'en' as the master schema for the resource
export type MessageSchema = typeof messages['ua'];

// See https://vue-i18n.intlify.dev/guide/advanced/typescript.html#global-resource-schema-type-definition
/* eslint-disable @typescript-eslint/no-empty-interface */
declare module 'vue-i18n' {
  // define the locale messages schema
  export interface DefineLocaleMessage extends MessageSchema {}

  // define the datetime format schema
  export interface DefineDateTimeFormat {}

  // define the number format schema
  export interface DefineNumberFormat {}
}
/* eslint-enable @typescript-eslint/no-empty-interface */

let i18n: I18n | null = null;
export default boot(({ app }) => {
  if (i18n) return;
  i18n = createI18n<{ message: MessageSchema }, MessageLanguages>({
    locale: 'ua',
    legacy: false,
    messages,
  });

  // Set i18n instance on app
  app.use(i18n);
});

export { i18n }
