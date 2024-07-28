import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
  configure
} from 'vee-validate'
import { required, min, max, alpha_spaces as alphaSpaces, email } from '@vee-validate/rules'

export default {
  install(app) {
    app.component('VeeForm', VeeForm)
    app.component('VeeField', VeeField)
    app.component('ErrorMessage', ErrorMessage)

    defineRule('required', required)
    defineRule('min', min)
    defineRule('max', max)
    defineRule('alpha_spaces', alphaSpaces)
    defineRule('email', email)

    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `The ${ctx.field} field is required`,
          min: `The ${ctx.field} field is too short`,
          max: `The ${ctx.field} field is too long`,
          email: `The ${ctx.field} field must be a valid email`
        }

        const message = messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : `The field ${ctx.field} is invalid`

        return message
      }
    })
  }
}
