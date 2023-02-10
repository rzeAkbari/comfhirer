import {
  Address,
  Attachment,
  CodeableConcept,
  ContactPoint,
  Element,
  Extension,
  FhirResource,
  HumanName,
  Identifier,
  Meta,
  Narrative,
  Patient,
  PatientCommunication,
  PatientContact,
  PatientLink,
  Reference,
} from "fhir/r4";
export class patient implements Patient {
  resourceType: "Patient";
  active?: boolean;
  _active?: Element;
  address?: Address[];
  birthDate?: string;
  _birthDate?: Element;
  communication?: PatientCommunication[];
  contact?: PatientContact[];
  deceasedBoolean?: boolean;
  _deceasedBoolean?: Element;
  deceasedDateTime?: string;
  _deceasedDateTime?: Element;
  gender?: "other" | "unknown" | "male" | "female";
  _gender?: Element;
  generalPractitioner?: Reference[];
  identifier?: Identifier[];
  link?: PatientLink[];
  managingOrganization?: Reference;
  maritalStatus?: CodeableConcept;
  multipleBirthBoolean?: boolean;
  _multipleBirthBoolean?: Element;
  multipleBirthInteger?: number;
  name?: HumanName[];
  photo?: Attachment[];
  telecom?: ContactPoint[];
  contained?: FhirResource[];
  extension?: Extension[];
  modifierExtension?: Extension[];
  text?: Narrative;
  id?: string;
  _id?: Element;
  implicitRules?: string;
  _implicitRules?: Element;
  language?: string;
  _language?: Element;
  meta?: Meta;

  constructor() {
    this.resourceType = "Patient";
  }
}
