import {
  CodeableConcept,
  Element,
  Extension,
  FhirResource,
  Identifier,
  Medication,
  MedicationBatch,
  MedicationIngredient,
  Meta,
  Narrative,
  Ratio,
  Reference,
} from 'fhir/r4';
export class medication implements Medication {
  resourceType: 'Medication';
  amount?: Ratio;
  batch?: MedicationBatch;
  code?: CodeableConcept;
  form?: CodeableConcept;
  identifier?: Identifier[];
  ingredient?: MedicationIngredient[];
  manufacturer?: Reference;
  status?: 'active' | 'inactive' | 'entered-in-error';
  _status?: Element;
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
    this.resourceType = 'Medication';
  }
}
