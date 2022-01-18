import periodos from "../constants/periodos"

class Atividade{
    constructor({nome = '',horarioFim = '', horarioInicio = '', status = false,diasDaSemana=[],periodo=periodos.manha}){
        this.nome=nome
        this.horarioInicio=horarioInicio
        this.horarioFim=horarioFim
        this.status=status,
        this.diasDaSemana = diasDaSemana
        this.periodo = periodo
    }
}
export default Atividade