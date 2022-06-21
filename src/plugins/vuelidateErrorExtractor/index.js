import Vue from 'vue';
import vuelidateErrorExtractor, { templates } from 'vuelidate-error-extractor';

Vue.use(vuelidateErrorExtractor, {
  /**
   * Optionally provide the template in the configuration.
   * or register like so Vue.component("FormField", templates.singleErrorExtractor.foundation6)
   */
  // you can also pass your own custom template
  template: templates.singleErrorExtractor.foundation6,
  messages: {
    required: 'The {attribute} field is required',
    email: 'The {attribute} field contains an invalid email address',
    minValue: 'The {attribute} minimum is {min}',
    maxValue: 'The {attribute} maximum is {max}',
    minLength: 'The {attribute} minimun length is {min}',
    maxLength: 'The {attribute} maximum length is {max}',
    url: 'The {attribute} field contains an invalid url',
    numeric: 'The {attribute} field is must be numeric',
    alpha: 'The {attribute} field is must be alphabet',
    alphaSpace: 'The {attribute} field is must be alphabet',
    date: 'The {attribute} field date is invalid range',
    alphaNum: 'The {attribute} field only allow alphabet and number',
    phone: 'The {attribute} field contains an invalid phone format',
    onlyWord: 'The {attribute} field only allow alphabet, number and space',
    range: 'The {attribute} field only allow number, dot and dash',
    wordPunctuation: '{attribute} field only allow Punctuation, alphabet, number and space',
    fileSize: 'The {attribute} maximum file size is {max} MB',
    sameAs: 'The {attribute} must be identical {eq}',
    isRegistered: 'Email already registered',
    isRegisteredInactive: 'Email already registered, but user inactive. Please contact the administrator.',
    isRegisteredInAnotherRole: 'Email found in another role',
    notSameEmail: 'Email Student/Parent cannot same email',
    filename: "Filename format invalid or can't use other/others name",
    fileType: 'File Format not allowed',
    nameDuplicate: 'File name cannot duplicate in same location',
    minOneRightAnswer: 'Minimal 1 Right Answer',
    validationAlpha: 'The {attribute} field must be alphabet',
    validationDate: 'The {attribute} field date is invalid range',
    validationEmail: 'The {attribute} field contains an invalid email address',
    validationPhoneNumber: 'The {attribute} field contains an invalid phone format',
    sameAsPassword: 'Password not match',
    sameAsConfirm: 'Password Not Match',
    invalidTime: 'Invalid time',
    invalidDate: 'Invalid date',
    greaterThanDate: 'Start date cannot be greater or same than End Date',
  }, // error messages to use
});
