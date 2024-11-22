import NotariadoPDF from "./../assets/documents/1. NOTARIADO.pdf";
import PrincipioRogacionPDF from "./../assets/documents/2. PRINCIPIO DE ROGACIÓN.pdf";
import RegimenNotarialPDF from "./../assets/documents/3. RÉGIMEN NOTARIAL.pdf";
import FePublicaPDF from "./../assets/documents/4. FE PÚBLICA.pdf";
import TiposDocumentosPDF from "./../assets/documents/5. TIPOS DE DOCUMENTOS.pdf";
import EscriturasPDF from "./../assets/documents/6. ESCRITURAS PÚBLICAS.pdf";
import PoderesPDF from "./../assets/documents/7. PODERES.pdf";
import ProcedimientoOtorgamientoPDF from "./../assets/documents/7. PROCEDIMIENTO-OTORGAMIENTO DE PODERES ESPECIALES.pdf";
import RevocatoriaPoderesPDF from "./../assets/documents/7. REVOCATORIA DE PODERES.pdf";
import ProcedimientoRecnocimientoPDF from "./../assets/documents/8. PROCEDIMIENTO-RECONOCIMIENTO DE FIRMAS.pdf";
import ReconocimientoFirmasPDF from "./../assets/documents/8. RECONOCIMIENTO DE FIRMAS.pdf";
import ProcedimientoTestamentosPDF from "./../assets/documents/9. PROCEDIMIENTO-TESTAMENTOS.pdf";
import TestamentosPDF from "./../assets/documents/9. TESTAMENTOS.pdf";
import ProcesosVoluntariosPDF from "./../assets/documents/10. PROCESOS VOLUNTARIOS.pdf";
import CompetenciaNotarialPDF from "./../assets/documents/11. COMPETENCIA NOTARIAL.pdf";
import DeclaratoriaPDF from "./../assets/documents/12. DECLARATORIA DE HEREDEROS.pdf";

import ProcedimientoDeclaratoriaPDF from "./../assets/documents/12. PROCEDIMIENTO-DECLARATORIA DE HEREDEROS.pdf";
import DivorcioNotarialPDF from "./../assets/documents/13. DIVORCIO NOTARIAL.pdf";
import ProcedimientoDivorcioNotarialPDF from "./../assets/documents/13. PROCEDIMIENTO-DIVORCIO NOTARIAL.pdf";
import AutorizacionViajePDF from "./../assets/documents/14. AUTORIZACIÓN VIAJE DE MENORES.pdf";
import ProcedimientoAutorizacionViajePDF from "./../assets/documents/14. PROCEDIMIENTO-AUTORIZACION DE VIAJE DE MENOR.pdf";
import AdopcionMayorEdadPDF from "./../assets/documents/15. ADOPCIÓN MAYOR DE EDAD.pdf";
import ProcedimientoAdopcionMayorEdadPDF from "./../assets/documents/15. PROCEDIMIENTO-ADOPCION DE PERSONA MAYOR DE EDAD.pdf";
import AclaracionLimitesmedicionPDF from "./../assets/documents/16. ACLARACIÓN DE LÍMITES DE MEDIANERÍA.pdf";
import ProcedimientoAclaracionLimitesmedicionPDF from "./../assets/documents/16. PROCEDIMIENTO-ACLARACIÓN DE LÍMITES Y MEDIANERIAS.pdf";
import DivisionParticionHerenciaPDF from "./../assets/documents/17. DIVISIÓN Y PARTICION DE HERENCIA.pdf";
import ProcedimientoDivisionParticionHerenciaPDF from "./../assets/documents/17. PROCEDIMIENTO-DIVISIÓN Y PARTICIÓN DE HERENCIA.pdf";

import Img1 from "../assets/documents/1.jpg";
import Img2 from "../assets/documents/2.jpg";
import Img3 from "../assets/documents/3.jpg";
import Img4 from "../assets/documents/4.jpg";
import Img5 from "../assets/documents/5.jpg";
import Img6 from "../assets/documents/6.png";
import Img7 from "../assets/documents/7.png";
import Img8 from "../assets/documents/8.jpeg";
import Img9 from "../assets/documents/9.jpg";
import Img10 from "../assets/documents/10.jpg";
import Img11 from "../assets/documents/11.jpg";
import Img12 from "../assets/documents/12.jpg";
import Img13 from "../assets/documents/13.jpg";
import Img14 from "../assets/documents/14.jpg";
import Img15 from "../assets/documents/15.jpg";
import Img16 from "../assets/documents/16.jpg";
import Img17 from "../assets/documents/17.jpg";
// export const data = [
//   {
//     title: "NOTARIADO",
//     contenido: "Este es el contenido del título NOTARIADO.",
//     documentos: [
//       { name: NotariadoPDF, type: "pdf", fileName: "1. NOTARIADO.pdf" },
//       { name: Img1, type: "image" },
//     ],
//   },
//   {
//     title: "PRINCIPIO DE ROGACIÓN",
//     contenido: "Este es el contenido del título PRINCIPIO DE ROGACIÓN.",
//     documentos: [
//       { name: PrincipioRogacionPDF, type: "pdf", fileName: "2. PRINCIPIO DE ROGACIÓN.pdf" },
//       { name: Img2, type: "image" },
//     ],
//   },
//   {
//     title: "RÉGIMEN NOTARIAL",
//     contenido: "Este es el contenido del título RÉGIMEN NOTARIAL.",
//     documentos: [
//       { name: RegimenNotarialPDF, type: "pdf", fileName: "3. RÉGIMEN NOTARIAL.pdf" },
//       { name: Img3, type: "image" },
//     ],
//   },
//   {
//     title: "FE PÚBLICA",
//     contenido: "Este es el contenido del título FE PÚBLICA.",
//     documentos: [
//       { name: FePublicaPDF, type: "pdf", fileName: "4. FE PÚBLICA.pdf" },
//       { name: Img4, type: "image" },
//     ],
//   },
//   {
//     title: "TIPOS DE DOCUMENTOS",
//     contenido: "Este es el contenido del título TIPOS DE DOCUMENTOS.",
//     documentos: [
//       { name: TiposDocumentosPDF, type: "pdf", fileName: "5. TIPOS DE DOCUMENTOS.pdf" },
//       { name: Img5, type: "image" },
//     ],
//   },
//   {
//     title: "ESCRITURAS PÚBLICAS",
//     contenido: "Este es el contenido del título ESCRITURAS PÚBLICAS.",
//     documentos: [
//       { name: EscriturasPDF, type: "pdf", fileName: "6. ESCRITURAS PÚBLICAS.pdf" },
//       { name: Img6, type: "image" },
//     ],
//   },
//   {
//     title: "PODERES",
//     contenido: "Este es el contenido del título PODERES.",
//     documentos: [
//       { name: PoderesPDF, type: "pdf", fileName: "7. PODERES.pdf" },
//       { name: ProcedimientoOtorgamientoPDF, type: "pdf", fileName: "7. PROCEDIMIENTO-OTORGAMIENTO DE PODERES ESPECIALES.pdf" },
//       { name: RevocatoriaPoderesPDF, type: "pdf", fileName: "7. REVOCATORIA DE PODERES.pdf" },
//       { name: Img7, type: "image" },
//     ],
//   },
//   {
//     title: "PROCEDIMIENTO-RECONOCIMIENTO ...",
//     contenido:
//       "Este es el contenido del título PROCEDIMIENTO-RECONOCIMIENTO ...",
//     documentos: [
//       { name: ProcedimientoRecnocimientoPDF, type: "pdf", fileName: "8. PROCEDIMIENTO-RECONOCIMIENTO DE FIRMAS.pdf" },
//       { name: ReconocimientoFirmasPDF, type: "pdf", fileName: "8. RECONOCIMIENTO DE FIRMAS.pdf" },
//       { name: Img8, type: "image" },
//     ],
//   },
//   {
//     title: "PROCEDIMIENTO-TESTAMENTOS",
//     contenido: "Este es el contenido del título PROCEDIMIENTO-TESTAMENTOS.",
//     documentos: [
//       { name: ProcedimientoTestamentosPDF, type: "pdf", fileName: "9. PROCEDIMIENTO-TESTAMENTOS.pdf" },
//       { name: TestamentosPDF, type: "pdf", fileName: "9. TESTAMENTOS.pdf" },
//       { name: Img9, type: "image" },
//     ],
//   },
//   {
//     title: "PROCESOS VOLUNTARIOS",
//     contenido: "Este es el contenido del título PROCESOS VOLUNTARIOS.",
//     documentos: [
//       { name: ProcesosVoluntariosPDF, type: "pdf", fileName: "10. PROCESOS VOLUNTARIOS.pdf" },
//       { name: Img10, type: "image" },
//     ],
//   },
//   {
//     title: "COMPETENCIA NOTARIAL",
//     contenido: "Este es el contenido del título COMPETENCIA NOTARIAL.",
//     documentos: [
//       { name: CompetenciaNotarialPDF, type: "pdf", fileName: "11. COMPETENCIA NOTARIAL.pdf" },
//       { name: Img11, type: "image" },
//     ],
//   },
//   {
//     title: "DECLARATORIA DE HEREDEROS",
//     contenido: "Este es el contenido del título DECLARATORIA DE HEREDEROS.",
//     documentos: [
//       { name: DeclaratoriaPDF, type: "pdf", fileName: "12. DECLARATORIA DE HEREDEROS.pdf" },
//       { name: ProcedimientoDeclaratoriaPDF, type: "pdf", fileName: "12. PROCEDIMIENTO-DECLARATORIA DE HEREDEROS.pdf" },
//       { name: Img12, type: "image" },
//     ],
//   },
//   {
//     title: "DIVORCIO NOTARIAL",
//     contenido: "Este es el contenido del título DIVORCIO NOTARIAL.",
//     documentos: [
//       { name: DivorcioNotarialPDF, type: "pdf", fileName: "13. DIVORCIO NOTARIAL.pdf" },
//       { name: Img13, type: "image" },
//       { name: ProcedimientoDivorcioNotarialPDF, type: "pdf", fileName: "13. PROCEDIMIENTO-DIVORCIO NOTARIAL.pdf" },
//     ],
//   },
//   {
//     title: "AUTORIZACIÓN VIAJE DE MENOR",
//     contenido: "Este es el contenido del título AUTORIZACIÓN VIAJE DE MENOR.",
//     documentos: [
//       { name: AutorizacionViajePDF, type: "pdf", fileName: "14. AUTORIZACIÓN VIAJE DE MENORES.pdf" },
//       { name: ProcedimientoAutorizacionViajePDF, type: "pdf", fileName: "14. PROCEDIMIENTO-AUTORIZACION DE VIAJE DE MENOR.pdf" },
//       { name: Img14, type: "image" },
//     ],
//   },

//   {
//     title: "ADOPCIÓN MAYOR DE EDAD",
//     contenido: "Este es el contenido del título ADOPCIÓN MAYOR DE EDAD.",
//     documentos: [
//       { name: AdopcionMayorEdadPDF, type: "pdf", fileName: "15. ADOPCIÓN MAYOR DE EDAD.pdf" },
//       { name: ProcedimientoAdopcionMayorEdadPDF, type: "pdf", fileName: "15. PROCEDIMIENTO-ADOPCION DE PERSONA MAYOR DE EDAD.pdf" },
//       { name: Img15, type: "image" },
//     ],
//   },
//   {
//     title: "ACLARACIÓN DE LÍMITES DE MEDICIÓN",
//     contenido:
//       "Este es el contenido del título ACLARACIÓN DE LÍMITES DE MEDICIÓN.",
//     documentos: [
//       { name: AclaracionLimitesmedicionPDF, type: "pdf", fileName: "16. ACLARACIÓN DE LÍMITES DE MEDIANERÍA.pdf" },
//       { name: ProcedimientoAclaracionLimitesmedicionPDF, type: "pdf", fileName: "16. PROCEDIMIENTO-ACLARACIÓN DE LÍMITES Y MEDIANERIAS.pdf" },
//       { name: Img16, type: "image" },
//     ],
//   },

//   {
//     title: "DIVISIÓN Y PARTICIÓN DE HERENCIA",
//     contenido:
//       "Este es el contenido del título DIVISIÓN Y PARTICIÓN DE HERENCIA.",
//     documentos: [
//       { name: DivisionParticionHerenciaPDF, type: "pdf", fileName: "17. DIVISIÓN Y PARTICIÓN DE HERENCIA.pdf" },
//       { name: ProcedimientoDivisionParticionHerenciaPDF, type: "pdf", fileName: "17. PROCEDIMIENTO-DIVISIÓN Y PARTICIÓN DE HERENCIA.pdf" },
//       { name: Img17, type: "image" },
//     ],
//   },

// ];

export const data = [
  {
    title: "NOTARIADO",
    contenido:
      "El notariado es una profesión jurídica que se encarga de dar fe a todos los actos que se realicen ante un notario",
    documentos: [
      { name: NotariadoPDF, type: "pdf", fileName: "1. NOTARIADO.pdf" },
      { name: Img1, type: "image" },
    ],
  },
  {
    title: "PRINCIPIO DE ROGACIÓN",
    contenido:
      "El notario solo actúa si se lo piden, no puede intervenir por su cuenta en ningún trámite. Solo trabaja cuando una persona interesada le solicita que lo haga.",
    documentos: [
      {
        name: PrincipioRogacionPDF,
        type: "pdf",
        fileName: "2. PRINCIPIO DE ROGACIÓN.pdf",
      },
      { name: Img2, type: "image" },
    ],
  },
  {
    title: "RÉGIMEN NOTARIAL",
    contenido:
      "El Régimen Notarial en Bolivia está regulado principalmente por la Ley N° 483 (Ley del Notariado Plurinacional), que establece las funciones, competencias y responsabilidades de los notarios de fe pública.",
    documentos: [
      {
        name: RegimenNotarialPDF,
        type: "pdf",
        fileName: "3. RÉGIMEN NOTARIAL.pdf",
      },
      { name: Img3, type: "image" },
    ],
  },
  {
    title: "FE PÚBLICA",
    contenido:
      "La fe publica consiste en la otorgación de certeza o veracidad de los actos, hechos y negocios jurídicos a través de una notaria o un notario.",
    documentos: [
      { name: FePublicaPDF, type: "pdf", fileName: "4. FE PÚBLICA.pdf" },
      { name: Img4, type: "image" },
    ],
  },
  {
    title: "TIPOS DE DOCUMENTOS",
    contenido:
      "Los documentos notariales son aquellos que han sido redactados, intervenidos o autorizados por un notario, y que cuentan con la fe pública, es decir, se presume que su contenido es verdadero y ha sido realizado de acuerdo a la ley.",
    documentos: [
      {
        name: TiposDocumentosPDF,
        type: "pdf",
        fileName: "5. TIPOS DE DOCUMENTOS.pdf",
      },
      { name: Img5, type: "image" },
    ],
  },
  {
    title: "ESCRITURAS PÚBLICAS",
    contenido:
      "La escritura pública es un documento autorizado por un Notario, auténtico y garantizado por el Estado, que cumple con todas las formalidades legales y tiene pleno valor probatorio, siendo registrado en el protocolo notarial.",
    documentos: [
      {
        name: EscriturasPDF,
        type: "pdf",
        fileName: "6. ESCRITURAS PÚBLICAS.pdf",
      },
      { name: Img6, type: "image" },
    ],
  },
  {
    title: "PODERES",
    contenido:
      "La escritura pública es un documento autorizado por un Notario, auténtico y garantizado por el Estado, que cumple con todas las formalidades legales y tiene pleno valor probatorio, siendo registrado en el protocolo notarial.",
    documentos: [
      { name: PoderesPDF, type: "pdf", fileName: "7. PODERES.pdf" },
      {
        name: ProcedimientoOtorgamientoPDF,
        type: "pdf",
        fileName: "7. PROCEDIMIENTO-OTORGAMIENTO DE PODERES ESPECIALES.pdf",
      },
      {
        name: RevocatoriaPoderesPDF,
        type: "pdf",
        fileName: "7. REVOCATORIA DE PODERES.pdf",
      },
      { name: Img7, type: "image" },
    ],
  },
  {
    title: "PROCEDIMIENTO-RECONOCIMIENTO ...",
    contenido:
      "Notariode Fe Pública tomará juramento a los comparecientes para establecerla autenticidad de las firmas y rúbricas estampadas en el documento privado.",
    documentos: [
      {
        name: ProcedimientoRecnocimientoPDF,
        type: "pdf",
        fileName: "8. PROCEDIMIENTO-RECONOCIMIENTO DE FIRMAS.pdf",
      },
      {
        name: ReconocimientoFirmasPDF,
        type: "pdf",
        fileName: "8. RECONOCIMIENTO DE FIRMAS.pdf",
      },
      { name: Img8, type: "image" },
    ],
  },
  {
    title: "PROCEDIMIENTO-TESTAMENTOS",
    contenido:
      "Describe el proceso legal y notarial para la redacción y ejecución de testamentos.",
    documentos: [
      {
        name: ProcedimientoTestamentosPDF,
        type: "pdf",
        fileName: "9. PROCEDIMIENTO-TESTAMENTOS.pdf",
      },
      { name: TestamentosPDF, type: "pdf", fileName: "9. TESTAMENTOS.pdf" },
      { name: Img9, type: "image" },
    ],
  },
  {
    title: "PROCESOS VOLUNTARIOS",
    contenido:
      "Son procedimientos que se desarrollan a solicitud de las partes involucradas y tienen como objetivo dar fe pública a actos jurídicos.",
    documentos: [
      {
        name: ProcesosVoluntariosPDF,
        type: "pdf",
        fileName: "10. PROCESOS VOLUNTARIOS.pdf",
      },
      { name: Img10, type: "image" },
    ],
  },
  {
    title: "COMPETENCIA NOTARIAL",
    contenido:
      "Constituye aquella facultad de un notario/a para intervenir en ciertos actos jurídicos que se hacen de manera libre y voluntaria.",
    documentos: [
      {
        name: CompetenciaNotarialPDF,
        type: "pdf",
        fileName: "11. COMPETENCIA NOTARIAL.pdf",
      },
      { name: Img11, type: "image" },
    ],
  },
  {
    title: "DECLARATORIA DE HEREDEROS",
    contenido:
      "En caso de no existir un testamento, los hijos a través de esta trámite podrán ser considerados herederos legales, llegando a adquirir los bienes.",
    documentos: [
      {
        name: DeclaratoriaPDF,
        type: "pdf",
        fileName: "12. DECLARATORIA DE HEREDEROS.pdf",
      },
      {
        name: ProcedimientoDeclaratoriaPDF,
        type: "pdf",
        fileName: "12. PROCEDIMIENTO-DECLARATORIA DE HEREDEROS.pdf",
      },
      { name: Img12, type: "image" },
    ],
  },
  {
    title: "DIVORCIO NOTARIAL",
    contenido:
      "El divorcio notarial procederá cuando: a. Exista consentimiento y mutuo acuerdo entre los cónyuges. b. No existan hijos producto de ambos cónyuges; c. No existan bienes comunes o gananciales sujetos a registro; d. No exista pretensión de asistencia familiar por ninguno de los cónyuges.",
    documentos: [
      {
        name: DivorcioNotarialPDF,
        type: "pdf",
        fileName: "13. DIVORCIO NOTARIAL.pdf",
      },
      { name: Img13, type: "image" },
      {
        name: ProcedimientoDivorcioNotarialPDF,
        type: "pdf",
        fileName: "13. PROCEDIMIENTO-DIVORCIO NOTARIAL.pdf",
      },
    ],
  },
  {
    title: "AUTORIZACIÓN VIAJE DE MENOR",
    contenido:
      "El trámite de permiso de viaje al exterior de niña, niño o adolescente menor de edad procede sólo cuando la o el menor viaje con la madre o con el padre y es solicitado por ambos padres.",
    documentos: [
      {
        name: AutorizacionViajePDF,
        type: "pdf",
        fileName: "14. AUTORIZACIÓN VIAJE DE MENORES.pdf",
      },
      {
        name: ProcedimientoAutorizacionViajePDF,
        type: "pdf",
        fileName: "14. PROCEDIMIENTO-AUTORIZACION DE VIAJE DE MENOR.pdf",
      },
      { name: Img14, type: "image" },
    ],
  },
  {
    title: "ADOPCIÓN MAYOR DE EDAD",
    contenido:
      "Através de este proceso, una persona mayor de edad adquiere la calidad de hija o hijo de la o el adoptante, en forma estable, permanente y definitiva.",
    documentos: [
      {
        name: AdopcionMayorEdadPDF,
        type: "pdf",
        fileName: "15. ADOPCIÓN MAYOR DE EDAD.pdf",
      },
      {
        name: ProcedimientoAdopcionMayorEdadPDF,
        type: "pdf",
        fileName: "15. PROCEDIMIENTO-ADOPCION DE PERSONA MAYOR DE EDAD.pdf",
      },
      { name: Img15, type: "image" },
    ],
  },
  {
    title: "ACLARACIÓN DE LÍMITES DE MEDICIÓN",
    contenido:
      "Es un proceso que permite establecer los límites legales de un terreno o parcela. Es importante conocer estos conceptos para evitar conflictos con vecinos o propietarios colindantes, y para determinar dónde se pueden construir",
    documentos: [
      {
        name: AclaracionLimitesmedicionPDF,
        type: "pdf",
        fileName: "16. ACLARACIÓN DE LÍMITES DE MEDIANERÍA.pdf",
      },
      {
        name: ProcedimientoAclaracionLimitesmedicionPDF,
        type: "pdf",
        fileName: "16. PROCEDIMIENTO-ACLARACIÓN DE LÍMITES Y MEDIANERIAS.pdf",
      },
      { name: Img16, type: "image" },
    ],
  },
  {
    title: "DIVISIÓN Y PARTICIÓN DE HERENCIA",
    contenido:
      "Es el procedimiento por el cual los herederos se distribuyen los bienes que componen la masa hereditaria.",
    documentos: [
      {
        name: DivisionParticionHerenciaPDF,
        type: "pdf",
        fileName: "17. DIVISIÓN Y PARTICIÓN DE HERENCIA.pdf",
      },
      {
        name: ProcedimientoDivisionParticionHerenciaPDF,
        type: "pdf",
        fileName: "17. PROCEDIMIENTO-DIVISIÓN Y PARTICIÓN DE HERENCIA.pdf",
      },
      { name: Img17, type: "image" },
    ],
  },
];
