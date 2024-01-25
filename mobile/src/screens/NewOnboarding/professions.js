import { isRiding, needsStableHand, needsVeterinarian, userType, getClients, organizeClients, organizeStable } from "./questions"

export const professions = [
    {  // RIDER PROFESIONAL
        name: 'Rider Profesional',
        totalSteps: 6,
        step1: {
            type: 'select',
            text: userType.question,
            supporting: userType.supporting,
            items: [
                "Profesional de Primera Categoria",
                "Profesional de Segunda Categoria",
                "Otro"
            ]
        },
        step2: {
            type: 'radio',
            text: isRiding.question,
            supporting: isRiding.supporting,
            items: isRiding.answers
        },
        step3: {
            type: 'radio',
            text: '¿Das clases actualmente?',
            supporting: 'Si estás dando clases actualmente o no.',
            items: [
                "Si, estoy dando clases",
                "No por el momento"
            ]
        },
        step4: {
            type: 'radio',
            text: '¿Querés organizar/conseguir alumnos?',
            supporting: 'Si estás dando clases actualmente o no.',
            items: [
                "Sí, quiero organizar/conseguir alumnos",
                "No por el momento"
            ]
        },
        step5: {
            type: 'radio',
            text: needsVeterinarian.question,
            supporting: needsVeterinarian.supporting,
            items: needsVeterinarian.answers
        },
        step6: {
            type: 'radio',
            text: needsStableHand.question,
            supporting: needsStableHand.supporting,
            items: needsStableHand.answers
        }
    },
    {   // RIDER NO PROFESIONAL
        name: 'Rider No Profesional',
        totalSteps: 4,
        step1: {
            type: 'select',
            text: userType.question,
            supporting: userType.supporting,
            items: [
                "Rider de Primera Categoria",
                "Rider de Segunda Categoria",
                "Rider de Tercera Categoria",
                "Rider Amateur",
                "Rider Children",
                "Otro"
            ]
        },
        step2: {
            type: 'radio',
            text: isRiding.question,
            supporting: isRiding.supporting,
            items: isRiding.answers
        },
        step3: {
            type: 'radio',
            text: needsVeterinarian.question,
            supporting: needsVeterinarian.supporting,
            items: needsVeterinarian.answers
        },
        step4: {
            type: 'radio',
            text: needsStableHand.question,
            supporting: needsStableHand.supporting,
            items: needsStableHand.answers
        }
    },
    {   // RIDER DOMADOR
        name: 'Rider Domador',
        totalSteps: 3,
        step1: {
            type: 'select',
            text: userType.question,
            supporting: userType.supporting,
            items: [
                "Rider de Primera Categoria",
                "Rider de Segunda Categoria",
                "Rider de Tercera Categoria",
                "Otro"
            ]
        },
        step2: {
            type: 'radio',
            text: '¿Estás domando actualmente?',
            supporting: 'Si estás domando caballos actualmente o no.',
            items: [
                'Si, estoy domando',
                'No estoy domando'
            ]
        },
        step3: {
            type: 'radio',
            text: getClients.question,
            supporting: getClients.supporting,
            items: getClients.answers
        }
    },
    {  // Dueño de Haras
        name: 'Dueño de Haras',
        totalSteps: 5,
        step1: {
            type: 'select',
            text: userType.question,
            supporting: userType.supporting,
            items: [
                "Rider de Primera Categoria",
                "Rider de Segunda Categoria",
                "Rider de Tercera Categoria",
                "Otro"
            ]
        },
        step2: {
            type: 'radio',
            text: getClients.question,
            supporting: getClients.supporting,
            items: getClients.answers
        },
        step3: {
            type: 'radio',
            text: organizeStable.question,
            supporting: organizeStable.supporting,
            items: organizeStable.answers
        },
        step4: {
            type: 'radio',
            text: needsVeterinarian.question,
            supporting: needsVeterinarian.supporting,
            items: needsVeterinarian.answers
        },
        step5: {
            type: 'radio',
            text: needsStableHand.question,
            supporting: needsStableHand.supporting,
            items: needsStableHand.answers
        }
    },
    {   // HERRERO
        name: 'Herrero',
        totalSteps: 2,
        step1: {
            type: 'radio',
            text: getClients.question,
            supporting: getClients.supporting,
            items: getClients.answers
        },
        step2: {
            type: 'radio',
            text: organizeClients.question,
            supporting: organizeClients.supporting,
            items: organizeClients.answers
        }
    },
    {   // VETERINARIO
        name: 'Veterinario',
        totalSteps: 3,
        step1: {
            type: 'radio',
            text: '¿Qué tipo de profesional sos?',
            supporting: 'Podés elegir sólo una opción.',
            items: [
                'Profesional',
                'Farmacéutica'
            ]
        },
        step2: {
            type: 'select',
            text: userType.question,
            supporting: userType.supporting,
            items: [
                "Clinica General",
                "Dentista",
                "Fisioterapeuta",
                "Radiologo",
                "Otro"
            ]
        },
        step3: {
            type: 'radio',
            text: organizeClients.question,
            supporting: organizeClients.supporting,
            items: organizeClients.answers
        }
    },
    {   // TRANSPORTISTA
        name: 'Transportista',
        totalSteps: 2,
        step1: {
            type: 'radio',
            text: '¿Te gustaría conseguir viajes por acá?',
            supporting: 'Sí querés generar viajes a futuro por acá.',
            items: [
                'Si, me gustaria',
                'No por el momento'
            ]
        },
        step2: {
            type: 'select',
            text: '¿Qué horarios de viaje disponés?',
            supporting: 'Sí querés generar viajes a futuro por acá, podes elegir bandas horarias que trabajes.',
            items: [
                "De 9:00 a 13:00 horas",
                "De 14:00 a 18:00 horas",
                "De 18:00 a 00:00 horas",
                "24 horas"
            ]
        }
    },
    {   // CRIADOR
        name: 'Criador',
        totalSteps: 4,
        step1: {
            type: 'radio',
            text: '¿Querés vender tus caballos?',
            supporting: 'Sí querés vender tus caballos por aca.',
            items: [
                'Si, me gustaria',
                'No por el momento'
            ]
        },
        step2: {
            type: 'radio',
            text: organizeStable.question,
            supporting: organizeStable.supporting,
            items: organizeStable.answers
        },
        step3: {
            type: 'radio',
            text: needsVeterinarian.question,
            supporting: needsVeterinarian.supporting,
            items: needsVeterinarian.answers
        },
        step4: {
            type: 'radio',
            text: needsStableHand.question,
            supporting: needsStableHand.supporting,
            items: needsStableHand.answers
        }
    },
    {   //  CABALLERIZO
        name: 'Caballerizo',
        totalSteps: 2,
        step1: {
            type: 'select',
            text: userType.question,
            supporting: userType.supporting,
            items: [
                "Equitacion",
                "Polo",
                "Derby",
                "Otro"
            ]
        },
        step2: {
            type: 'radio',
            text: getClients.question,
            supporting: getClients.supporting,
            items: getClients.answers
        }
    }
]