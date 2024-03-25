import FormularioFuncionarios from "../formulario_componente/formulariofuncionario";
import TabelaFuncionarios from "../tabelas/telaTabelaFuncionarios";
import { useState } from "react";

export default function ExibirCadastroFuncionarios(props) {
    
    const [exibirTabelaFuncionarios, setExibirTabelaFuncionarios] = useState(true);
    const [listaFuncionarios, setListaFuncionarios] = useState([]);

    if (exibirTabelaFuncionarios) {
        return (
            <div>
                <h1>Funcionários Cadastrados</h1>
                <br/>
                <TabelaFuncionarios 
                    listaFuncionarios={listaFuncionarios} 
                    setExibirTabelaFuncionarios={setExibirTabelaFuncionarios}
                />
            </div>
        )
    }
    else {
        return (
            <div>
                <h1>Funcionários Cadastrados</h1>
                <br/>
                <FormularioFuncionarios 
                    setExibirTabelaFuncionarios={setExibirTabelaFuncionarios}
                    listaFuncionarios={listaFuncionarios}
                    setListaFuncionarios={setListaFuncionarios}
                />
            </div>
        )
    }
}
