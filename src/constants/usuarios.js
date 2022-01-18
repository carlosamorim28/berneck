import Atividade from "../classes/Atividade"
import periodos from "./periodos"
const user = {
    nome:'Bernardo',
    nivel:'1',
    XpAtual:30,
    atividades:[
        new Atividade({
            nome:'Café da manhã',
            horarioInicio:'10:00h',
            horarioFim: '10:30h',
            status:false
        }),
        new Atividade({
            nome:'Domir',
            horarioInicio:'10:00h',
            horarioFim: '10:30h',
            status:false
        }),
        new Atividade({
            nome:'Regar as plantas',
            horarioInicio:'10:00h',
            horarioFim: '10:30h',
            status:false
        }),
        new Atividade({
            nome:'Regar as plantas',
            horarioInicio:'10:00h',
            horarioFim: '10:30h',
            status:false
        }),
        new Atividade({
            nome:'Café da manhã',
            horarioInicio:'10:00h',
            horarioFim: '10:30h',
            status:false
        }),
        new Atividade({
            nome:'Domir',
            horarioInicio:'10:00h',
            horarioFim: '10:30h',
            status:false,
            periodo:periodos.tarde
        }),
        new Atividade({
            nome:'Exercícios Físicos',
            horarioInicio:'10:00h',
            horarioFim: '10:30h',
            status:false,
            periodo:periodos.tarde
        }),
        new Atividade({
            nome:'Dormir',
            horarioInicio:'10:00h',
            horarioFim: '10:30h',
            status:false,
            periodo:periodos.tarde
        }),
        new Atividade({
            nome:'Café da manhã',
            horarioInicio:'10:00h',
            horarioFim: '10:30h',
            status:false,
            periodo:periodos.noite
        }),
        new Atividade({
            nome:'Domir',
            horarioInicio:'10:00h',
            horarioFim: '10:30h',
            status:false,
            periodo:periodos.noite
        }),
        new Atividade({
            nome:'Alongamentos',
            horarioInicio:'10:00h',
            horarioFim: '10:30h',
            status:false,
            periodo:periodos.noite
        }),
        new Atividade({
            nome:'correr',
            horarioInicio:'10:00h',
            horarioFim: '10:30h',
            status:false,
            periodo:periodos.noite
        })
    ]
}
export default user