import { ContactPoint, Extension, Period } from 'fhir/r4';

export class telecom implements ContactPoint {
  period?: Period | undefined;

  rank?: number | undefined;

  system?:
    | ('phone' | 'fax' | 'email' | 'pager' | 'url' | 'sms' | 'other')
    | undefined;
  _system?: Element | undefined;

  use?: ('home' | 'work' | 'temp' | 'old' | 'mobile') | undefined;
  _use?: Element | undefined;

  value?: string | undefined;
  _value?: Element | undefined;

  extension?: Extension[];
  id?: string;
  _id?: Element;
}
