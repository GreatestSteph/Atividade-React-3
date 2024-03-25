import FormularioFuncionarios from "../formulario_componente/formulariofuncionario";
import TabelaFuncionarios from "../tabelas/telaTabelaFuncionarios";
import { useState } from "react";

export default function ExibirCadastroFuncionarios(props) {
    
    const [exibirTabelaFuncionarios, setExibirTabelaFuncionarios] = useState(true);
    const [listaFuncionarios, setListaFuncionarios] = useState([]);
    const [funcionarioSelecionado, setFuncionarioSelecionado] = useState({});
    const [modoEdicaoFuncionario, setModoEdicaoFuncionario] = useState(false);

    if (exibirTabelaFuncionarios) {
        return (
            <div>
                <h1>Funcionários Cadastrados</h1>
                <br/>
                <TabelaFuncionarios 
                    listaFuncionarios={listaFuncionarios} 
                    setListaFuncionarios={setListaFuncionarios}
                    setExibirTabelaFuncionarios={setExibirTabelaFuncionarios}
                    setFuncionarioSelecionado={setFuncionarioSelecionado}
                    setModoEdicaoFuncionario={setModoEdicaoFuncionario}
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
                    funcionarioSelecionado={funcionarioSelecionado}
                    setModoEdicaoFuncionario={setModoEdicaoFuncionario}
                    modoEdicaoFuncionario={modoEdicaoFuncionario}
                />
            </div>
        )
    }
}
