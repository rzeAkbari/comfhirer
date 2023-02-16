import {
  CodeableConcept,
  Element,
  Extension,
  PatientCommunication,
} from 'fhir/r4';

export class communication implements PatientCommunication {
  language: CodeableConcept;
  preferred?: boolean;
  _preferred?: Element;
  modifierExtension?: Extension[];
  extension?: Extension[];
  id?: string;
  _id?: Element;
}
