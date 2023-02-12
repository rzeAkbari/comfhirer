/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var comfhirer;
/******/ (() => {
  // webpackBootstrap
  /******/ 'use strict';
  /******/ var __webpack_modules__ = {
    /***/ './build/comfhirerError.js':
      /*!*********************************!*\
  !*** ./build/comfhirerError.js ***!
  \*********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ ComfhirerError)\n/* harmony export */ });\nclass ComfhirerError {\n    constructor(name, message, type) {\n        this.name = name;\n        this.message = message;\n        this.type = type;\n    }\n}\n\n\n//# sourceURL=webpack://comfhirer/./build/comfhirerError.js?'
        );

        /***/
      },

    /***/ './build/constants.js':
      /*!****************************!*\
  !*** ./build/constants.js ***!
  \****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Error\": () => (/* binding */ Error)\n/* harmony export */ });\nconst Error = {\n    message: {\n        NO_QUOTE: 'string without quotes',\n        NO_NUMBER: 'key with number',\n        NO_BRACKET: 'key with bracket',\n        NO_PARANTHESIS: 'key with paranthesis',\n    },\n};\n\n\n//# sourceURL=webpack://comfhirer/./build/constants.js?"
        );

        /***/
      },

    /***/ './build/helper/fhirr4/resources/medication.js':
      /*!*****************************************************!*\
  !*** ./build/helper/fhirr4/resources/medication.js ***!
  \*****************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "medication": () => (/* binding */ medication)\n/* harmony export */ });\nclass medication {\n    constructor() {\n        this.resourceType = \'Medication\';\n    }\n}\n\n\n//# sourceURL=webpack://comfhirer/./build/helper/fhirr4/resources/medication.js?'
        );

        /***/
      },

    /***/ './build/helper/fhirr4/resources/patient.js':
      /*!**************************************************!*\
  !*** ./build/helper/fhirr4/resources/patient.js ***!
  \**************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "patient": () => (/* binding */ patient)\n/* harmony export */ });\nclass patient {\n    constructor() {\n        this.resourceType = "Patient";\n    }\n}\n\n\n//# sourceURL=webpack://comfhirer/./build/helper/fhirr4/resources/patient.js?'
        );

        /***/
      },

    /***/ './build/helper/fhirr4/standard-library.js':
      /*!*************************************************!*\
  !*** ./build/helper/fhirr4/standard-library.js ***!
  \*************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "FhirResourceTypes": () => (/* binding */ FhirResourceTypes)\n/* harmony export */ });\n/* harmony import */ var _resources_medication__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resources/medication */ "./build/helper/fhirr4/resources/medication.js");\n/* harmony import */ var _resources_patient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resources/patient */ "./build/helper/fhirr4/resources/patient.js");\n\n\nconst FhirResourceTypes = {\n    //   "Account",\n    //   "ActivityDefinition",\n    //   "AdministrableProductDefinition",\n    //   "AdverseEvent",\n    //   "AllergyIntolerance",\n    //   "Appointment",\n    //   "AppointmentResponse",\n    //   "AuditEvent",\n    //   "Basic",\n    //   "Binary",\n    //   "BiologicallyDerivedProduct",\n    //   "BodyStructure",\n    //   "Bundle",\n    //   "CapabilityStatement",\n    //   "CarePlan",\n    //   "CareTeam",\n    //   "CatalogEntry",\n    //   "ChargeItem",\n    //   "ChargeItemDefinition",\n    //   "Citation",\n    //   "Claim",\n    //   "ClaimResponse",\n    //   "ClinicalImpression",\n    //   "ClinicalUseDefinition",\n    //   "CodeSystem",\n    //   "Communication",\n    //   "CommunicationRequest",\n    //   "CompartmentDefinition",\n    //   "Composition",\n    //   "ConceptMap",\n    //   "Condition",\n    //   "Consent",\n    //   "Contract",\n    //   "Coverage",\n    //   "CoverageEligibilityRequest",\n    //   "CoverageEligibilityResponse",\n    //   "DetectedIssue",\n    //   "Device",\n    //   "DeviceDefinition",\n    //   "DeviceMetric",\n    //   "DeviceRequest",\n    //   "DeviceUseStatement",\n    //   "DiagnosticReport",\n    //   "DocumentManifest",\n    //   "DocumentReference",\n    //   "Encounter",\n    //   "Endpoint",\n    //   "EnrollmentRequest",\n    //   "EnrollmentResponse",\n    //   "EpisodeOfCare",\n    //   "EventDefinition",\n    //   "Evidence",\n    //   "EvidenceReport",\n    //   "EvidenceVariable",\n    //   "ExampleScenario",\n    //   "ExplanationOfBenefit",\n    //   "FamilyMemberHistory",\n    //   "Flag",\n    //   "Goal",\n    //   "GraphDefinition",\n    //   "Group",\n    //   "GuidanceResponse",\n    //   "HealthcareService",\n    //   "ImagingStudy",\n    //   "Immunization",\n    //   "ImmunizationEvaluation",\n    //   "ImmunizationRecommendation",\n    //   "ImplementationGuide",\n    //   "Ingredient",\n    //   "InsurancePlan",\n    //   "Invoice",\n    //   "Library",\n    //   "Linkage",\n    //   "List",\n    //   "Location",\n    //   "ManufacturedItemDefinition",\n    //   "Measure",\n    //   "MeasureReport",\n    //   "Media",\n    Medication: _resources_medication__WEBPACK_IMPORTED_MODULE_0__.medication,\n    //   "MedicationAdministration",\n    //   "MedicationDispense",\n    //   "MedicationKnowledge",\n    //   "MedicationRequest",\n    //   "MedicationStatement",\n    //   "MedicinalProductDefinition",\n    //   "MessageDefinition",\n    //   "MessageHeader",\n    //   "MolecularSequence",\n    //   "NamingSystem",\n    //   "NutritionOrder",\n    //   "NutritionProduct",\n    //   "Observation",\n    //   "ObservationDefinition",\n    //   "OperationDefinition",\n    //   "OperationOutcome",\n    //   "Organization",\n    //   "OrganizationAffiliation",\n    //   "PackagedProductDefinition",\n    //   "Parameters",\n    Patient: _resources_patient__WEBPACK_IMPORTED_MODULE_1__.patient,\n    //   "PaymentNotice",\n    //   "PaymentReconciliation",\n    //   "Person",\n    //   "PlanDefinition",\n    //   "Practitioner",\n    //   "PractitionerRole",\n    //   "Procedure",\n    //   "Provenance",\n    //   "Questionnaire",\n    //   "QuestionnaireResponse",\n    //   "RegulatedAuthorization",\n    //   "RelatedPerson",\n    //   "RequestGroup",\n    //   "ResearchDefinition",\n    //   "ResearchElementDefinition",\n    //   "ResearchStudy",\n    //   "ResearchSubject",\n    //   "RiskAssessment",\n    //   "Schedule",\n    //   "SearchParameter",\n    //   "ServiceRequest",\n    //   "Slot",\n    //   "Specimen",\n    //   "SpecimenDefinition",\n    //   "StructureDefinition",\n    //   "StructureMap",\n    //   "Subscription",\n    //   "SubscriptionStatus",\n    //   "SubscriptionTopic",\n    //   "Substance",\n    //   "SubstanceDefinition",\n    //   "SupplyDelivery",\n    //   "SupplyRequest",\n    //   "Task",\n    //   "TerminologyCapabilities",\n    //   "TestReport",\n    //   "TestScript",\n    //   "ValueSet",\n    //   "VerificationResult",\n    //   "VisionPrescription",\n};\n\n\n//# sourceURL=webpack://comfhirer/./build/helper/fhirr4/standard-library.js?'
        );

        /***/
      },

    /***/ './build/main.js':
      /*!***********************!*\
  !*** ./build/main.js ***!
  \***********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "Compile": () => (/* binding */ Compile)\n/* harmony export */ });\n/* harmony import */ var _parse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parse */ "./build/parse.js");\n/* harmony import */ var _tokenize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tokenize */ "./build/tokenize.js");\n/* harmony import */ var _traverse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./traverse */ "./build/traverse.js");\n\n\n\nfunction Compile(input) {\n    const fhirExpressions = input.toString().split(/(?:\\r\\n|\\r|\\n)/g);\n    const ast = [];\n    for (let line = 0; line < fhirExpressions.length; line++) {\n        const nodes = (0,_tokenize__WEBPACK_IMPORTED_MODULE_1__.Tokenize)(fhirExpressions[line]);\n        ast.push((0,_parse__WEBPACK_IMPORTED_MODULE_0__["default"])(nodes));\n    }\n    return (0,_traverse__WEBPACK_IMPORTED_MODULE_2__["default"])(ast)[0];\n}\n\n\n//# sourceURL=webpack://comfhirer/./build/main.js?'
        );

        /***/
      },

    /***/ './build/parse.js':
      /*!************************!*\
  !*** ./build/parse.js ***!
  \************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Parse)\n/* harmony export */ });\nfunction Parse(tokens) {\n    let level = 1;\n    let ast = {\n        type: 'Resource',\n        name: '',\n        value: '',\n    };\n    for (const token of tokens) {\n        if (token.type === 'resource') {\n            ast.type = 'Resource';\n            ast.name = token.value;\n        }\n        else if (token.type === 'field' ||\n            token.type === 'array' ||\n            token.type === 'simpleArray') {\n            ast.field = nestedField(ast.field, 1, level, token);\n            level++;\n        }\n        else if (token.type === 'data') {\n            ast.value = token.value;\n        }\n    }\n    return ast;\n}\nfunction nestedField(field, count, level, token) {\n    if (count === level) {\n        return {\n            level,\n            type: getType(token.type),\n            name: token.value,\n        };\n    }\n    field.field = nestedField(field.field, count + 1, level, token);\n    return field;\n}\nfunction getType(type) {\n    switch (type) {\n        case 'field':\n            return 'FlatField';\n        case 'array':\n            return 'MultipleFields';\n        case 'simpleArray':\n            return 'MultipleSimpleFields';\n        default:\n            break;\n    }\n}\n\n\n//# sourceURL=webpack://comfhirer/./build/parse.js?"
        );

        /***/
      },

    /***/ './build/tokenize.js':
      /*!***************************!*\
  !*** ./build/tokenize.js ***!
  \***************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Tokenize\": () => (/* binding */ Tokenize)\n/* harmony export */ });\n/* harmony import */ var _comfhirerError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comfhirerError */ \"./build/comfhirerError.js\");\n/* harmony import */ var _helper_fhirr4_standard_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper/fhirr4/standard-library */ \"./build/helper/fhirr4/standard-library.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ \"./build/constants.js\");\n\n\n\nfunction Tokenize(input) {\n    let tokens;\n    let [path, value] = input.split('=');\n    let keys = path.split('.');\n    tokens = keys.map((key) => ({\n        type: getKeyType(key),\n        value: getKeyValue(key),\n    }));\n    tokens.push({\n        type: 'data',\n        value: getDataValue(value),\n    });\n    return tokens;\n}\nfunction getKeyType(key) {\n    key = key.trim();\n    catchKeySyntaxError(key);\n    if (_helper_fhirr4_standard_library__WEBPACK_IMPORTED_MODULE_1__.FhirResourceTypes[key])\n        return 'resource';\n    if (isArray(key))\n        return 'array';\n    if (isSimpleArray(key))\n        return 'simpleArray';\n    return 'field';\n}\nfunction getKeyValue(value) {\n    return value.trim().replace(/[\\[|\\]\\{\\}]/g, '');\n}\nfunction getDataValue(value) {\n    if (value.indexOf('true') > -1)\n        return true;\n    if (value.indexOf('false') > -1)\n        return false;\n    if (value.indexOf(\"'\") === -1 && value.indexOf('\"') === -1) {\n        if (Number.isNaN(Number.parseFloat(value)))\n            throw new _comfhirerError__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('UnsupportedValue', _constants__WEBPACK_IMPORTED_MODULE_2__.Error.message.NO_QUOTE, 'syntax');\n        return Number.parseInt(value);\n    }\n    return value.trim().replace(/['|\"]/g, '');\n}\nfunction catchKeySyntaxError(key) {\n    if (key.match(/\\w\\d|\\d\\w/)) {\n        throw new _comfhirerError__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('UnsupportedKey', _constants__WEBPACK_IMPORTED_MODULE_2__.Error.message.NO_NUMBER, 'syntax');\n    }\n    if (key.match(/\\w\\[|\\]\\w/)) {\n        throw new _comfhirerError__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('UnsupportedKey', _constants__WEBPACK_IMPORTED_MODULE_2__.Error.message.NO_BRACKET, 'syntax');\n    }\n    if (key.match(/\\w\\{|\\}\\w/)) {\n        throw new _comfhirerError__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('UnsupportedKey', _constants__WEBPACK_IMPORTED_MODULE_2__.Error.message.NO_PARANTHESIS, 'syntax');\n    }\n}\nfunction isArray(input) {\n    return input.indexOf('[') > -1;\n}\nfunction isSimpleArray(input) {\n    return input.indexOf('{') > -1;\n}\n\n\n//# sourceURL=webpack://comfhirer/./build/tokenize.js?"
        );

        /***/
      },

    /***/ './build/traverse.js':
      /*!***************************!*\
  !*** ./build/traverse.js ***!
  \***************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ traverse)\n/* harmony export */ });\n/* harmony import */ var _helper_fhirr4_standard_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper/fhirr4/standard-library */ \"./build/helper/fhirr4/standard-library.js\");\n\nlet activeRersources = {};\nfunction traverse(astNodes) {\n    let result = [];\n    activeRersources = instantiateResources(astNodes);\n    for (const node of astNodes) {\n        let resrouceInstance = activeRersources[node.name];\n        propagateField(node.field, resrouceInstance, node.value);\n    }\n    for (const resourceName of Object.keys(activeRersources)) {\n        result.push(activeRersources[resourceName]);\n    }\n    return result;\n}\nfunction propagateField(field, resrouceInstance, value) {\n    if (isRoot(field))\n        return resrouceInstance;\n    if (isLeafe(field)) {\n        if (isMultipleSimpleFields(field.type)) {\n            resrouceInstance = setMultipleSimpleFields(resrouceInstance, field, value);\n        }\n        else {\n            resrouceInstance[field.name] = value;\n        }\n        return resrouceInstance;\n    }\n    if (field.type === 'FlatField') {\n        resrouceInstance[field.name] = resrouceInstance[field.name] || {};\n        resrouceInstance[field.name] = propagateField(field.field, resrouceInstance[field.name], value);\n    }\n    if (field.type === 'MultipleFields') {\n        resrouceInstance =\n            resrouceInstance instanceof Array ? resrouceInstance : [];\n        const index = Number.parseInt(field.name, 10);\n        if (index > resrouceInstance.length) {\n            throw new Error('FhirArrayOutOfBand');\n        }\n        if (index === resrouceInstance.length)\n            resrouceInstance.push({});\n        propagateField(field.field, resrouceInstance[index], value);\n    }\n    return resrouceInstance;\n}\nfunction isRoot(field) {\n    return field === undefined;\n}\nfunction isLeafe(field) {\n    return field.field === undefined;\n}\nfunction isMultipleSimpleFields(fieldType) {\n    return fieldType === 'MultipleSimpleFields';\n}\nfunction setMultipleSimpleFields(resrouceInstance, field, value) {\n    resrouceInstance = resrouceInstance instanceof Array ? resrouceInstance : [];\n    const index = Number.parseInt(field.name, 10);\n    resrouceInstance.splice(index, 0, value);\n    return resrouceInstance;\n}\nfunction instantiateResources(astNodes) {\n    let activeRersources = {};\n    for (const node of astNodes) {\n        if (!activeRersources[node.name]) {\n            const resourceRef = _helper_fhirr4_standard_library__WEBPACK_IMPORTED_MODULE_0__.FhirResourceTypes[node.name];\n            const resourceInstance = new resourceRef();\n            activeRersources[node.name] = resourceInstance;\n        }\n    }\n    return activeRersources;\n}\n\n\n//# sourceURL=webpack://comfhirer/./build/traverse.js?"
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module',
        });
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__('./build/main.js');
  /******/ comfhirer = __webpack_exports__;
  /******/
  /******/
})();
